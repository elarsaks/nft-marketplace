import React, { createContext, useContext, useState, ReactNode } from "react";

interface Web3ProviderProps {
  children: ReactNode;
}

const Web3Context = React.createContext<any>(null);

// const Web3Provider: React.FC<Web3ProviderProps> = ({ children }) => {
//   const [web3Api, setWeb3Api] = useState({ test: "Hello Provider!" });

//   return (
//     <Web3Context.Provider value={web3Api}>{children}</Web3Context.Provider>
//   );
// };

export function useWeb3() {
  return useContext(Web3Context);
}

//export default Web3Provider;
