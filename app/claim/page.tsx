"use client";

import { useState, useEffect } from "react";
import TonConnectButton from "./TonConnectButton";
// import { TonConnectButton } from "@tonconnect/ui-react";
import { connector } from "../components/TonConnector";
import { RecoilRoot } from "recoil";
import { TonConnectUIProvider } from "@tonconnect/ui-react";

export default function TaskCompleted() {
  const [showText, setShowText] = useState(false);
  const [showConnectButton, setShowConnectButton] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowText(true);
    }, 5000);

    setTimeout(() => {
      setShowConnectButton(true);
    }, 7000);
  });

  useEffect(() => {
    connector.restoreConnection();
  }, []);

  return (
    <RecoilRoot>
      <TonConnectUIProvider manifestUrl="https://lootfront.netlify.app/tonconnect-manifest.json">
        <div className="mt-10">
          <video src="123.mp4" autoPlay muted />
          <div className="text-center items-center justify-center -mt-10 text-3xl transition ease-in-out delay-150">
            <span>{showText ? "You gained 5 Tons!" : null}</span>
            <TonConnectButton />
          </div>
        </div>
      </TonConnectUIProvider>
    </RecoilRoot>
  );
}
