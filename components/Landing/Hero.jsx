const Hero = () => {
  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] relative ">
      <h1 className="text-[5.5rem] text-orange-700 my-[5vh]">Hackathons & Dragons</h1>
      <div className="flex flex-col gap-3 text-2xl tracking-wide w-[60%] pl-2">
        <p>
          Hackathon & Dragons is a platform that seeks to be a meeting point for the community, made
          by the community.
        </p>
        <p>
          We want to create a space for people with different skills to connect and form groups to
          participate in Hackathons.
        </p>
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
