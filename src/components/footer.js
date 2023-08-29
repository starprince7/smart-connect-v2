export default function Footer() {
  return (
    <footer className="container mt-24 sm:mt-32 sm:pb-24">
      <img
        src="/brand-logo.svg"
        alt="brand logo"
        className="mx-auto w-24 my-10"
      />
      <div className="flex flex-col sm:flex-row justify-between items-center w-full my-10 space-y-6">
        <div className="text-neutral-400 text-sm font-semibold">
          &copy; 2023 WalletConnect, Inc
        </div>
        <div className="text-neutral-500 text-sm uppercase w-[300px] flex justify-between items-center">
          <p>terms of service</p>
          <p>privacy policy</p>
        </div>
      </div>
    </footer>
  );
}
