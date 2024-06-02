"use client";

import { useState, useEffect } from "react";
// import TonConnectButton from "./TonConnectButton";
import { TonConnectButton } from "@tonconnect/ui-react";
// import { connector } from "../components/TonConnector";
// import { RecoilRoot } from "recoil";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import LootBoxOpening from "@/public/lootbox-opening-optimize.gif";
import Image from "next/image";
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

  // useEffect(() => {
  //   connector && connector.restoreConnection();
  // }, []);

  return (
    // <RecoilRoot>
    <TonConnectUIProvider manifestUrl="https://lootfront.netlify.app/tonconnect-manifest.json">
      <div className="mt-10 flex flex-col items-center justify-center justify-items-center">
        <video src="123.mp4" autoPlay playsInline muted />
        {/* <Image className="" src={LootBoxOpening} alt="loading..." /> */}
        <div className="text-center items-center justify-center  text-2xl transition ease-in-out delay-150 mb-5">
          <span>
            {showText ? "Congratulations! You have unlocked 5 Tons!" : null}
          </span>
        </div>

        <TonConnectButton className={showConnectButton ? "" : "hidden"} />
      </div>
    </TonConnectUIProvider>
    /* </RecoilRoot> */
  );
}
