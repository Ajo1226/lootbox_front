"use client";

import { connector } from "../components/TonConnector";
import { useState, useEffect, useCallback } from "react";
import { useForceUpdate } from "../hooks/useForceUpdate";
import { useTonWallet } from "../hooks/useTonWallet";
import { useTonWalletConnectionError } from "../hooks/useTonWalletConnectionError";
import { useSlicedAddress } from "../hooks/useSlicedAddress";
import { isDesktop, isMobile, openLink } from "../utils/utils";

import { useRecoilValueLoadable } from "recoil";
import { walletsListQuery } from "../walletList";

const TonConnectButton: React.FC<{ className: string }> = ({ className }) => {
  const [modalUniversalLink, setModalUniversalLink] = useState("");
  const forceUpdate = useForceUpdate();
  const wallet = useTonWallet();

  const onConnectErrorCallback = useCallback(() => {
    setModalUniversalLink("");

    console.error({
      message: "Connection was rejected",
      description: "Please approve connection to the dApp in your wallet.",
    });
  }, []);
  useTonWalletConnectionError(onConnectErrorCallback);

  const walletsList = useRecoilValueLoadable(walletsListQuery);

  const address = useSlicedAddress(
    wallet?.account.address,
    wallet?.account.chain
  );

  const handleButtonClick = useCallback(async () => {
    // Use loading screen/UI instead (while wallets list is loading)
    if (!(walletsList.state === "hasValue")) {
      setTimeout(handleButtonClick, 200);
    }

    if (!isDesktop() && walletsList.contents.embeddedWallet) {
      connector.connect({
        jsBridgeKey: walletsList.contents.embeddedWallet.jsBridgeKey,
      });
      return;
    }

    const tonkeeperConnectionSource = {
      universalLink: walletsList.contents.walletsList[0].universalLink,
      bridgeUrl: walletsList.contents.walletsList[0].bridgeUrl,
    };

    const universalLink = connector.connect(tonkeeperConnectionSource);

    if (isMobile()) {
      openLink(universalLink, "_blank");
    } else {
      setModalUniversalLink(universalLink);
    }
  }, [walletsList]);

  return (
    <>
      <div className={className}>
        {wallet ? (
          <button
            className="text-lg rounded-xl bg-blue px-5 py-2 my-5 transition ease-in-out delay-150"
            onClick={() => connector.disconnect()}
          >
            {address}
          </button>
        ) : (
          <button
            className="text-lg rounded-xl bg-blue px-5 py-2 my-5 transition ease-in-out delay-150"
            onClick={handleButtonClick}
          >
            Connect Wallet to Claim!
          </button>
        )}
      </div>
    </>
  );
};

export default TonConnectButton;
