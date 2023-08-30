import { Web3Button } from "@web3modal/react";

export default function Header() {
  return (
    <header className="container">
      <div className="fixed z-50 top-[1.5%] left-2 sm:left-[13%] flex w-[96%] sm:w-[75%] border border-gray-700 p-2 bg-[#272a2aa8] backdrop-blur-xl backdrop-saturate-150 rounded-full mx-auto justify-between items-center">
        <div className="flex justify-between items-center gap-10">
          <div>
            <img src="/logo.svg" alt="logo" className="w-48 sm:w-auto" />
          </div>
          <div className="uppercase text-[14px] hidden md:flex font-light px-2 justify-between cursor-progress text-gray-100 gap-10">
            <p>Products</p>
            <p>Partners</p>
            <p>Docs</p>
            <p>Explorer</p>
          </div>
        </div>
        <div>
          <Web3Button className="border border-red-600" icon="hide" />
        </div>
      </div>
    </header>
  );
}
