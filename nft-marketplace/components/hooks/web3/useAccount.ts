import { use } from "react";
import useSwr from "swr";

// deps provider, ethereum, contract (web3Sate)
export const hookFactory = (deps: any) => (params: any) => {
  const swrRes = useSwr("web3/useAccount", () => {
    console.log("deps", deps);

    return "Test User";
  });

  return swrRes;
};

export const useAccount = hookFactory({
  ethereum: null,
  provider: null,
});
