import React from "react";

const LocalHero = ({ title }) => {
  return (
    <div className="w-full h-64 -z-10 relative">
      <img src="hero.jpg" width={"100%"} className="h-full absolute" alt="" />
      <div className="absolute flex py-36 font-semibold items-center justify-center w-full h-full">
        <h1 className="text-center mx-auto ">{title}</h1>
      </div>
    </div>
  );
};

export default LocalHero;
