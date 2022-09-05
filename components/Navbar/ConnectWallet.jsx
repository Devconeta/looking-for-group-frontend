import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";

const ConnectWallet = () => {
  return (
    <ConnectButton.Custom>
      {({ openConnectModal }) => {
        return (
          <button onClick={openConnectModal} className="buttonStandar">
            <p>Connect Wallet</p>
            {/* <Image
              className="invert"
              width="38rem"
              height="38rem"
              src="/user.png"
              alt="User Icon"
            /> */}
          </button>
        );
      }}
    </ConnectButton.Custom>
  );
};

export default ConnectWallet;
