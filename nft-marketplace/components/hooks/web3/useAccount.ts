import { CryptoHookFactory } from "@_types/hooks";
import useSWR from "swr";

type AccountHookFactory = CryptoHookFactory<string>;

export type UseAccountHook = ReturnType<AccountHookFactory>;

export const hookFactory: CryptoHookFactory<string, string> =
  ({ provider }) =>
  (params) => {
    const swrRes = useSWR("web3/useAccount", () => {
      provider?.listAccounts();
      console.log("deps", provider);
      console.log("params", params);
      // Making a request to get data
      return "Test User";
    });

    useSWR(provider ? "web3/useAccount" : null, () => {
      return "Test User";
    });

    return swrRes;
  };
