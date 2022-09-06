const Hero = () => {
  const texts = [
    "Time to level-up, dear Web3 adventurer.",
    "Hackathons & dragons is the decentralized tool to go when you want to get the most out of a hackathon.",
    "We created the space for people with different skills to connect and hack together.",
    "Party making system leveraging the etherical power of Smart Contracts. ",
  ];

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] relative">
      <h1 className="text-[5.5rem] text-orange-700 my-[5vh]">
        Hackathons & Dragons
      </h1>
      <div className="flex flex-col gap-3 text-2xl tracking-wide w-[60%] pl-2">
        {texts.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
    </div>
  );
};

export default Hero;

{
  /* <div>
          <img className="mb-20" src="./party-unscreen.gif" />
        </div> */
}
