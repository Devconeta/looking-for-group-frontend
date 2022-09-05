import Head from "next/head";

import Navbar from "../components/Navbar/Navbar";
import FirstBlock from "../components/Landing/FirstBlock";

export default function Home() {
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
