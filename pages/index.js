import Head from "next/head";

import Navbar from "../components/Navbar/Navbar";
import FirstBlock from "../components/Landing/FirstBlock";

import { useState, useEffect } from "react";

export default function Home() {
  const [firstRender, setFirstRender] = useState(true);

  let metamask = null;

  if (!firstRender) {
    metamask = window.ethereum;
  }

  useEffect(() => {
    if (!firstRender && metamask != null) {
      metamask.on("chainChanged", () => {
        // @dev - To prevent issues and critical bugs, the best practice is to reload the page when the user changes the network
        window.location.reload();
      });

      return () => {
        metamask.removeAllListeners();
      };
    }

    if (firstRender) {
      setFirstRender(false);
    }
  }, [firstRender]);

  return (
    <>
      <Head>
        <title>Hackathons & Dragons</title>
        <meta name="description" />
        <link rel="icon" href="/dragon-icon.png" />
      </Head>

      <main className="mainContainer">
        <Navbar />
        <FirstBlock />
      </main>
    </>
  );
}
