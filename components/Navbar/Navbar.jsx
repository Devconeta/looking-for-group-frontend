import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { useEffect, useState, useContext } from "react";
import { useAccount, useDisconnect } from "wagmi";
import { truncAddress } from "../../utils/truncAddress";
import { GeneralContext } from "../../context/generalContext";
import { ethers } from "ethers";
import ConnectWallet from "./ConnectWallet";

const Navbar = () => {
  const [account, setAccount] = useState({ address: null, connected: false });
  const [toggle, setToggle] = useState(false);
  const { chain, setChain } = useContext(GeneralContext);
  const { address, status } = useAccount();
  const { disconnect } = useDisconnect();

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
      const browserProvider = new ethers.providers.Web3Provider(window.ethereum, "any");
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
    <nav className="w-full flex justify-between items-center h-[5rem]  mx-auto">
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
        // Logged in
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
            <Image
              className="invert"
              width="38rem"
              height="38rem"
              src="/user.png"
              alt="User Icon"
            />
            <p>{address && truncAddress(address)}</p>
          </button>

          {/* Toggle Menu  */}
          {toggle && (
            <div className="flex flex-col items-center justify-center absolute border border-white/30 mt-12 w-24 rounded-sm backdrop-blur-lg text-xl !cursor-pointer">
              <Link href="/profile">
                <a className="flex pt-2 justify-center w-full ">Profile</a>
              </Link>
              <div className="border-t-[0.1px] border-white/30 w-full" />
              <button
                onClick={() => {
                  disconnect();
                }}
                className="flex pb-2 justify-center w-full !cursor-pointer "
              >
                Sign out
              </button>
            </div>
          )}
        </div>
      ) : (
        <ConnectWallet />
      )}
    </nav>
  );
};

export default Navbar;
