import { CryptoHookFactory } from "@_types/hooks";
import useSWR from "swr";

type AccountHookFactory = CryptoHookFactory<string>;

export type UseAccountHook = ReturnType<AccountHookFactory>;

export const hookFactory: CryptoHookFactory<string, string> =
  ({ provider }) =>
  () => {
    const swrRes = useSWR(provider ? "web3/useAccount" : null, async () => {
      const accounts = await provider!.listAccounts();
      const account = accounts[0];

      return account;
    });

    return swrRes;
  };
