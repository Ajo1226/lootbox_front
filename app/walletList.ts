"use client";

import { isWalletInfoInjected } from "@tonconnect/sdk";
import { selector } from "recoil";
import { connector } from "./components/TonConnector";

export const walletsListQuery = selector({
  key: "walletsList",
  get: async () => {
    const walletsList = connector ? await connector.getWallets() : [];

    const embeddedWallet = walletsList
      .filter(isWalletInfoInjected)
      .find((wallet) => wallet.embedded);

    return {
      walletsList,
      embeddedWallet,
    };
  },
});
