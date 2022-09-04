import Head from "next/head";
import Link from "next/link";

import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hackathons & Dragons</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mainContainer">
        <navbar className="flex flex-row justify-center items-center p-4">
          <ul className="flex flex-row gap-20 text-3xl z-10">
            <li>
              <Link href="/">Getting started</Link>
            </li>
            <li>
              <Link href="/events">Hackathons</Link>
            </li>
            <li>
              <Link href="/showcase">Showcase</Link>
            </li>
          </ul>

          <div className="flex absolute justify-end w-full p-4 z-0">
            <ConnectButton />
          </div>
        </navbar>
      </main>
    </>
  );
}
