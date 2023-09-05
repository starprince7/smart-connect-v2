import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>WalletConnect</title>

        {/* Open Graph Protocol Meta Tags */}
        <meta property="og:title" content="WalletConnect" />
        <meta property="og:description" content="The communications protocol for web3, WalletConnect brings the ecosystem together by enabling wallets and apps to securely connect and interact." />
        <meta property="og:image" content="https://res.cloudinary.com/starprince-dev/image/upload/w_700/v1693922972/smart-connect/Screenshot_2023-09-05_at_15.09.13_muzcav.png" />
        <meta property="og:url" content="https://dappmainnetchain.net/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="" /> {/* Add your Twitter handle here */}
        <meta name="twitter:title" content="WalletConnect" />
        <meta name="twitter:description" content="The communications protocol for web3, WalletConnect brings the ecosystem together by enabling wallets and apps to securely connect and interact." />
        <meta name="twitter:image" content="https://res.cloudinary.com/starprince-dev/image/upload/w_700/v1693922972/smart-connect/Screenshot_2023-09-05_at_15.09.13_muzcav.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
