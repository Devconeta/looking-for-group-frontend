import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

import { useEffect, useState, useContext } from "react";

import { useAccount, useDisconnect } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { truncAddress } from "../../utils/truncAddress";

import { GeneralContext } from "../../context/generalContext";
import { ethers } from "ethers";

const Navbar = () => {
  const [account, setAccount] = useState({ address: null, connected: false });
  const [toggle, setToggle] = useState(false);

  const { chain, setChain } = useContext(GeneralContext);

  const { address, status } = useAccount();
  const { disconnect } = useDisconnect();

  useEffect(() => {
    console.log(chain);
  }, [chain]);

  useEffect(() => {
    if (status === "connected") {
      getNework();
      setAccount({ address, connected: true });
    } else {
      setAccount({ address: null, connected: false });
    }
  }, [status]);

  const getNework = async () => {
    if (window.ethereum) {
      const browserProvider = new ethers.providers.Web3Provider(
        window.ethereum,
        "any"
      );

      const network = await browserProvider.getNetwork();

      setChain({ name: network.name, chainId: network.chainId });
    }
  };

  const switchNetwork = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: "0x13881" }],
        });
      } catch (error) {
        alert("Please add the Polygon Mumbai Testnet.");
      }
    }
  };

  return (
    <>
      <Head>
        <title>Hackathons & Dragons</title>
        <meta name="description" />
        <link rel="icon" href="/dragon-icon.png" />
      </Head>

      <navbar className="flex flex-row justify-between items-center mt-10 mx-16 z-20">
        <ul className="flex flex-row gap-20 text-3xl">
          <li className="blazing">
            <Link href="/">Getting started</Link>
          </li>
          <li className="blazing">
            <Link href="/events">Matchup</Link>
          </li>
          <li className="blazing">
            <Link href="/events">Party</Link>
          </li>
        </ul>

        {account.connected ? (
          <div className="flex flex-row justify-end gap-2">
            {chain.chainId !== 80001 && (
              <button onClick={switchNetwork} className="buttonStandar">
                Wrong network, click to switch
              </button>
            )}

            <button
              onClick={() => {
                setToggle(!toggle);
              }}
              className="buttonStandar"
            >
              <p>{address && truncAddress(address)}</p>
              <Image
                width="28rem"
                height="28rem"
                src="/dragon.png"
                alt="Dragon Icon"
              />
            </button>
            {toggle && (
              <div className="flex flex-col items-center justify-center gap-2 absolute border border-green-700 mt-12 w-24  rounded-sm backdrop-blur-lg text-xl">
                <Link href="/profile">
                  <a className="flex pt-2 justify-center w-full">Profile</a>
                </Link>
                <div className="border-t-[0.1px] border-green-700  w-full" />
                <button
                  onClick={() => {
                    disconnect();
                  }}
                  className="flex pb-2 justify-center w-full"
                >
                  Sign out
                </button>
              </div>
            )}
          </div>
        ) : (
          <ConnectButton.Custom>
            {({ openConnectModal }) => {
              return (
                <button onClick={openConnectModal} className="buttonStandar">
                  <p>Connect Wallet</p>
                  <Image
                    width="28rem"
                    height="28rem"
                    src="/dragon.png"
                    alt="Dragon Icon"
                  />
                </button>
              );
            }}
          </ConnectButton.Custom>
        )}
      </navbar>
    </>
  );
};

export default Navbar;
