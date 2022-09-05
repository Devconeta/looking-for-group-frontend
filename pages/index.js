import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Landing/Hero";
import { useState, useEffect } from "react";
import Functionalities from "../components/Landing/Functionalities";
import AppContainer from "../Containers/AppContainer";

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

      <AppContainer className="appContainer--landing">
        <div className="absolute h-[30vh] bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-black " />
        <Hero />
      </AppContainer>
      <Functionalities />
    </>
  );
}
