import React from "react";

const functions = [
  {
    title: "functionTitle",
    description:
      "w-full h-[100vh] bg-black text-white flex flex-col items-centerw-full h-[100vh] bg-black text-white flex flex-col items-centerw-full h-[100vh] bg-black text-white flex flex-col items-center",
    image: "https://www.pngplay.com/wp-content/uploads/11/World-Of-Warcraft-PNG-Photo-Image.png",
  },
  {
    title: "functionTitle",
    description:
      "w-full h-[100vh] bg-black text-white flex flex-col items-centerw-full h-[100vh] bg-black text-white flex flex-col items-centerw-full h-[100vh] bg-black text-white flex flex-col items-center",
    image:
      "https://e7.pngegg.com/pngimages/766/902/png-clipart-world-of-warcraft-wrath-of-the-lich-king-starcraft-ii-wings-of-liberty-world-of-warcraft-the-burning-crusade-chest-world-of-warcraft-cataclysm-hearthstone-treasure-warcraft.png",
  },

  {
    title: "functionTitle",
    description:
      "w-full h-[100vh] bg-black text-white flex flex-col items-centerw-full h-[100vh] bg-black text-white flex flex-col items-centerw-full h-[100vh] bg-black text-white flex flex-col items-center",
    image:
      "https://mpng.subpng.com/20190621/jaa/kisspng-diablo-iii-reaper-of-souls-world-of-warcraft-bat-tricou-diablo-3-demon-hunter-logo-5d0d7b7a7d8569.7834983115611646665141.jpg",
  },
];

const Functionalities = () => {
  return (
    <div className="w-full h-[130vh] bg-black text-white flex flex-col items-center">
      <div className="w-11/12 h-full flex flex-col ">
        {functions.map((item, index) => (
          <div
            key={index}
            className={`w-full h-[200px] my-6 flex gap-10 ${
              index % 2 == 0 ? "flex-row-reverse" : ""
            }`}
          >
            <img
              className="object-contain w-[330px]  rounded"
              src={item.image}
              alt="functionality image"
            />
            <div className="">
              <h3 className="text-3xl">{item.title}</h3>
              <p className="pl-1">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Functionalities;
