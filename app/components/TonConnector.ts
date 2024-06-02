import { TonConnect } from "@tonconnect/sdk";

export const connector = window !== undefined ? new TonConnect() : null;
