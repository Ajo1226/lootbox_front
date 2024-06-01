import { Wallet } from "@tonconnect/sdk";
import { useEffect, useState } from "react";
import { connector } from "../components/TonConnector";

export function useTonWallet() {
  const [wallet, setWallet] = useState<Wallet | null>(connector.wallet);

  useEffect(() => connector.onStatusChange(setWallet, console.error), []);

  return wallet;
}
