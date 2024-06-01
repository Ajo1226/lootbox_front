import { connector } from "./TonConnector";
import { useEffect } from "react";

export default function TonConnectButton() {
  useEffect(() => {
    connector.restoreConnection();
  }, []);

  return (
    <button className="text-lg rounded-xl bg-blue px-5 py-2 my-5 transition ease-in-out delay-150">
      Connect Wallet to Claim!
    </button>
  );
}
