import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { createDefaultState, Web3State } from "./utils";
import { ethers } from "ethers";

interface Web3ProviderProps {
  children: ReactNode;
}

const Web3Context = createContext<Web3State>(createDefaultState());

const Web3Provider: React.FC<Web3ProviderProps> = ({ children }) => {
  const [web3Api, setWeb3Api] = useState<Web3State>(createDefaultState());

  useEffect(() => {
    function initWeb3() {
      const provider = new ethers.providers.Web3Provider(
        window.ethereum as any
      );

      setWeb3Api({
        ethereum: window.ethereum,
        provider: provider,
        contract: null,
        isLoading: false,
      });
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

export default Web3Provider;
