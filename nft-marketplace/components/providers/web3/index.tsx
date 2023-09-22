import React, { createContext, useContext, useState, ReactNode } from "react";
import { MetaMaskInpageProvider } from "@metamask/providers";
import { Contract, providers } from "ethers";
interface Web3ProviderProps {
  children: ReactNode;
}

export type Web3State = {
  ethereum?: MetaMaskInpageProvider;
  provider?: providers.Web3Provider;
  contract?: Contract;
};

const Web3Context = createContext<Web3State>({});

const Web3Provider: React.FC<Web3ProviderProps> = ({ children }) => {
  const [web3Api, setWeb3Api] = useState<Web3State>({});

  return (
    <Web3Context.Provider value={web3Api}>{children}</Web3Context.Provider>
  );
};

export function useWeb3() {
  return useContext(Web3Context);
}

export default Web3Provider;
