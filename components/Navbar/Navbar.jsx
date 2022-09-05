import Link from "next/link";
import Image from "next/image";

import { useEffect, useState } from "react";

import { useAccount, useDisconnect } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Navbar = () => {
  const [account, setAccount] = useState({ address: null, connected: false });
  const [toggle, setToggle] = useState(false);

  const { address, status } = useAccount();
  const { disconnect } = useDisconnect();

  useEffect(() => {
    if (status === "connected") {
      setAccount({ address, connected: true });
    } else {
      setAccount({ address: null, connected: false });
    }
  }, [status]);

  return (
    <>
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
          <div className="flex justify-center">
            <button
              onClick={() => {
                setToggle(!toggle);
              }}
              className="flex items-center p-1 backdrop-blur-lg border border-green-700 rounded-full hover:-translate-y-1 duration-150"
            >
              <Image
                width="40rem"
                height="40rem"
                src="/dragon.png"
                alt="Dragon Icon"
              />
            </button>
            {toggle && (
              <div className="flex flex-col items-center justify-center gap-2 absolute border border-green-700 mt-16 w-24  rounded-sm backdrop-blur-lg text-xl">
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
                <button
                  onClick={openConnectModal}
                  className="flex flex-row items-center gap-3 buttonStandar"
                >
                  <p>Connect Wallet</p>
                  <Image
                    width="25rem"
                    height="25rem"
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
