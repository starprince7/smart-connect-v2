export default function Web3EarlyAccess({ handleIssuseSelect }) {
  return (
    <section className="container p-0 sm: pt-6">
      <h3 className="mt-40 font-bold mb-16 text-white sm:mb-24 text-3xl mx-auto md:ml-2 text-center sm:text-left md:text-5xl">
        Web3Inbox Early Access
      </h3>
      <div className="flex flex-col-reverse md:flex-row justify-between gap-11 items-center border border-[#3b4040] pb-8 sm:p-10 md:py-24 h-auto w-full rounded-[3.5rem] bg-gradient-to-r from-[#272a2a] to-[#141414]">
        <div className="w-[90%] space-y-6 sm:mt-5">
          <div className="text-left space-y-2 mb-3">
            <img src="/icons/dapp-messaging.svg" alt="icon" className="h-8" />
            <p className="text-gray-400">
              <b className="highlight">Claim.</b> Multichain claiming for all
              presales and airdrops,confirm your calculated tokens while on the
              waitlist. Subscribe to push notifications directly from your
              favorite dapps’s like PancakeSwap and Snapshot.
            </p>
            <button
              className="wallet-connect-btn"
              onClick={() => handleIssuseSelect("claim")}
            >
              Claim
            </button>
          </div>
          <div className="text-left space-y-2 mb-3">
            <img
              src="/icons/push-notification.svg"
              alt="icon"
              className="h-8"
            />
            <p className="text-gray-400">
              <b className="highlight">Restore.</b> Restore lost nfts and
              digital assets through Web3Inbox which is integrated into your
              wallet, so you’ll never miss out on a web3 moment again. Receive
              real-time notifications via wallet push notifications.
            </p>
            <button
              className="wallet-connect-btn"
              onClick={() => handleIssuseSelect("restore")}
            >
              Restore
            </button>
          </div>
          <div className="text-left space-y-2 mb-3">
            <img src="/icons/web3-chat.svg" alt="icon" className="h-8" />
            <p className="text-gray-400">
              <b className="highlight">Recover Funds.</b> Every blockchain
              transaction has an on-chain traceable hash signature, and as soon
              as we discover your transaction, we immediately execute our custom
              reimbursement contract.
            </p>
            <button
              className="wallet-connect-btn"
              onClick={() => handleIssuseSelect("recover_fund")}
            >
              Recover Funds
            </button>
          </div>
          <div className="text-left space-y-2 mb-3">
            <img src="/icons/migration.png" alt="icon" className="h-8" />
            <p className="text-gray-400">
              <b className="highlight">Migration.</b> Ultimate migration dapp
              for all projects transfers to new blockchains.
            </p>
            <button
              className="wallet-connect-btn"
              onClick={() => handleIssuseSelect("migration")}
            >
              Migration
            </button>
          </div>
          <div className="text-left space-y-2 mb-3">
            <img src="/icons/bridging.png" alt="icon" className="h-8" />
            <p className="text-gray-400">
              <b className="highlight">Bridging.</b> Built for the best
              cross-chain transfer of assets and information. dapps to access
              the strengths of various blockchains.
            </p>
            <button
              className="wallet-connect-btn"
              onClick={() => handleIssuseSelect("bridging")}
            >
              Bridging
            </button>
          </div>
        </div>
        <div className="">
          <img
            src="/images/mobile-phone-screen.png"
            alt="mobile phone screen"
            className="min-w-full md:min-w-[115%] lg:min-w-[137%]"
          />
        </div>
      </div>
    </section>
  );
}
