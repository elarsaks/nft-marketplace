import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import {
  createDefaultState,
  createWeb3State,
  loadContract,
  Web3State,
} from "./utils";
import { ethers } from "ethers";

interface Web3ProviderProps {
  children: ReactNode;
}

const Web3Context = createContext<Web3State>(createDefaultState());

const Web3Provider: React.FC<Web3ProviderProps> = ({ children }) => {
  const [web3Api, setWeb3Api] = useState<Web3State>(createDefaultState());

  useEffect(() => {
    async function initWeb3() {
      const provider = new ethers.providers.Web3Provider(
        window.ethereum as any
      );

      // Request account access
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
      } catch (error) {
        console.error("User denied account access");
        return;
      }

      const accounts = await provider!.listAccounts();

      const contract = await loadContract("NftMarket", provider);

      setWeb3Api(
        createWeb3State({
          ethereum: window.ethereum,
          provider,
          contract,
          isLoading: false,
        })
      );
    }

    initWeb3();
  }, []);

  return (
    <Web3Context.Provider value={web3Api}>{children}</Web3Context.Provider>
  );
};

export function useWeb3() {
  return useContext(Web3Context);
}

export function useHooks() {
  const { hooks } = useWeb3();
  return hooks;
}

export default Web3Provider;
