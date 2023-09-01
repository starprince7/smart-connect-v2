import { Web3Button } from "@web3modal/react";
export default function HeroSection() {
  return (
    <div className="container hero p-0">
      <div
        id="hero-bg"
        className="flex justify-center items-center py-3 mt-16 overflow-hidden sm:border rounded-[3.5rem] h-200 w-full border-gray-500"
      >
        <div id="content" className="p-5 text-center space-y-6">
          <img
            src="/brand-logo.svg"
            alt="brand logo"
            className="block mx-auto w-24 sm:w-28"
          />
          <h3 className="text-6xl text-white md:text-7xl w-full font-bold md:font-extrabold">
            Connecting web3
          </h3>
          <p className="text-neutral-400 text-sm">
            The communications protocol for web3, WalletConnect brings the
            ecosystem together by enabling wallets and apps to securely connect
            and interact.
          </p>
          <div>
            <Web3Button />
          </div>
        </div>
      </div>
    </div>
  );
}
