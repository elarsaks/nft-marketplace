import { CryptoHookFactory } from "@_types/hooks";
import useSWR from "swr";

// deps provider, ethereum, contract (web3Sate)
export const hookFactory: CryptoHookFactory = (deps) => (params) => {
  const swrRes = useSWR("web3/useAccount", () => {
    console.log("deps", deps);
    console.log("params", params);
    // Making a request to get data
    return "Test User";
  });

  return swrRes;
};

export const useAccount = hookFactory({
  ethereum: undefined,
  provider: undefined,
  // contract: null,
});
