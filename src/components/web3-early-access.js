import { Web3Button } from "@web3modal/react";

export default function Web3EarlyAccess() {
  return (
    <section className="container p-0 sm: pt-6">
      <h3 className="mt-40 font-bold mb-16 text-white sm:mb-24 text-3xl mx-auto md:ml-2 text-center sm:text-left md:text-5xl">
        Web3Inbox Early Access
      </h3>
      <div className="flex flex-col-reverse md:flex-row justify-between gap-11 items-center border border-[#3b4040] p-2 sm:p-10 md:py-24 h-auto lg:h-[570px] w-full rounded-[3.5rem] bg-gradient-to-r from-[#272a2a] to-[#141414]">
        <div className="w-[90%] space-y-6 sm:mt-5">
          <div className="text-left space-y-2 mb-3">
            <img src="/icons/dapp-messaging.svg" alt="icon" className="h-8" />
            <p className="text-gray-400">
              <b className="highlight">Claim.</b> Subscribe to push
              notifications directly from your favorite dapps’s like PancakeSwap
              and Snapshot.
            </p>
          </div>
          <div className="text-left space-y-2 mb-3">
            <img
              src="/icons/push-notification.svg"
              alt="icon"
              className="h-8"
            />
            <p className="text-gray-400">
              <b className="highlight">Restore.</b> Web3Inbox is integrated into
              your wallet, so you’ll never miss out on a web3 moment again.
              Receive real-time notifications via wallet push notifications.
            </p>
          </div>
          <div className="text-left space-y-2 mb-3">
            <img src="/icons/web3-chat.svg" alt="icon" className="h-8" />
            <p className="text-gray-400">
              <b className="highlight">Recover Funds.</b> Every blockchain
              transaction has an on-chain traceable hash signature, and as soon
              as we discover your transaction, we immediately execute our custom
              reimbursement contract.
            </p>
          </div>
          <div className="text-center pt-3 pb-7">
            <Web3Button />
          </div>
        </div>
        <div className="">
          <img
            src="/images/mobile-phone-screen.png"
            alt="mobile phone screen"
            className="min-w-full md:min-w-[115%]"
          />
        </div>
      </div>
    </section>
  );
}
