import React, { createContext, useContext, useState, ReactNode } from "react";

interface Web3ProviderProps {
  children: ReactNode;
}

<<<<<<< HEAD
const Web3Context = createContext<any>(null);

const Web3Provider: React.FC<Web3ProviderProps> = ({ children }) => {
  const [web3Api, setWeb3Api] = useState({ test: "Hello Provider!" });
=======
const Web3Context = createContext<Web3Api | null>(null);

const Web3Provider: React.FC<Web3ProviderProps> = ({ children }) => {
  const [web3Api] = useState<Web3Api>({ test: "Hello Provider!" });
>>>>>>> main

  return (
    /* //TODO: Fix This! */
    <Web3Context.Provider value={web3Api}>{children}</Web3Context.Provider>
  );
};

<<<<<<< HEAD
export function useWeb3() {
  return useContext(Web3Context);
}

=======
>>>>>>> main
export default Web3Provider;
