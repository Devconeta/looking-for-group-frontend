import React from "react";

const functions = [
  {
    title: "Match making",
    description: [
      "Look for your ideal party members. Create your team or join an already created one.",
      "Maybe you are a solo-hacker looking for designers and business planners.",
      "Or perhaps you want to develop that incredible idea but you need developers",
      "loremloremloremloremloremloremloremloremloremloremloreloremloremloremloremlo",
      ,
      "loremloremloremloremloremloremloremlore lorem mloremloremlemlo",
    ],
    image: "https://www.pngplay.com/wp-content/uploads/11/World-Of-Warcraft-PNG-Photo-Image.png",
  },
  {
    title: "Party treasure",
    description: [
      "When your party is ready, deploy the Party Treasure Smart Contract, and let the code rule over the trust.",
      "The party members can decide how much every member will receive. ",
      "Also, we will help you to divide non-fungible prizes in the way that the party wants. Will you roll a dice?, will you submit it to a vote round?,",
      "As the platform is open source, we allow people to come with their own non-fungible division modules. ",
    ],
    image: "treasure.png",
  },

  {
    title: "Level-up, gain experience, reputation, NFT's, POAPs, Merch, and more!",
    description: [
      "Your party it's an evolving entity. By building trough hackathons & dragons, your team will gain experience every time you participate in a code conquest. ",
      "loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlo",
    ],

    image: "warlock.webp",
  },
];

const Functionalities = () => {
  return (
    <div className="w-full h-[140vh] xl:h-[170vh] 2xl:h-[130vh] bg-black text-white flex flex-col items-center">
      <div className="w-10/12 h-full flex flex-col ">
        {functions.map((item, index) => (
          <div
            key={index}
            className={`w-full justify-center items-center flex border-t border-amber-100/15 pt-8 mb-6 2xl:pt-10 2xl:mb-10 ${
              index % 2 == 0 ? "flex-row-reverse" : ""
            }`}
          >
            <img
              className="object-contain w-[390px] h-[245px] 2xl:w-[450px] 2xl:h-[230px] rounded "
              src={item.image}
              alt="functionality image"
            />
            <div className="flex flex-col">
              <h3 className="text-4xl text-primary mb-1">{item.title}</h3>
              <span className="px-1 text-primaryLight text-xl max-w-[50vw] 2xl:max-w-[45vw]">
                {item.description.map((item, index) => (
                  <p key={index} className="">
                    {item}
                  </p>
                ))}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Functionalities;
