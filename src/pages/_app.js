import "@/styles/globals.css";
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import {
  arbitrum,
  mainnet,
  polygon,
  bsc,
  goerli,
  sepolia,
  avalanche,
  polygonMumbai,
  fantom,
} from "wagmi/chains";

// Project ID
const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;
const chains = [
  // arbitrum,
  // mainnet,
  // polygon,
  // bsc,
  goerli,
  sepolia,
  // avalanche,
  // polygonMumbai,
  // fantom,
];

export default function App({ Component, pageProps }) {
  const { publicClient } = configureChains(chains, [
    w3mProvider({ projectId }),
  ]);

  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors: w3mConnectors({ projectId, chains }),
    publicClient,
  });
  const ethereumClient = new EthereumClient(wagmiConfig, chains);

  return (
    <>
      <WagmiConfig config={wagmiConfig}>
        <Component {...pageProps} />
      </WagmiConfig>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  );
}
