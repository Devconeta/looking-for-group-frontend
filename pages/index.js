import Head from "next/head";

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
        <header className="flex flex-row justify-end p-4">
          <ConnectButton />
        </header>
      </main>
    </>
  );
}
