import React, { createContext, useContext, useState, ReactNode } from "react";

interface Web3Api {
  test: string;
}

interface Web3ProviderProps {
  children: ReactNode;
}

const Web3Context = createContext<Web3Api | null>(null);

const Web3Provider: React.FC<Web3ProviderProps> = ({ children }) => {
  const [web3Api] = useState<Web3Api>({ test: "Hello Provider!" });

  return (
    <Web3Context.Provider value={web3Api}>{children}</Web3Context.Provider>
  );
};

export default Web3Provider;
