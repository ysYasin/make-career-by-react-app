import React from "react";

const HeroSectin = () => {
  return (
    <div className="md:flex w-full md:px-14 px-5 bg-green-50 justify-around pt-36 -z-10 pb-10">
      <div className="lg:w-6/12 flex flex-col gap-6 ">
        <div className="lg:text-2xl font-serif mt-10 font-semibold capitalize">
          <h1>One step</h1>
          <h1>closer to your </h1>
          <h3 style={{ color: "#7E90FE" }} className="md:text-7xl text-5xl">
            {" "}
            dream job
          </h3>
        </div>
        <p className="w-9/12">
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <button
          style={{
            backgroundImage: "linear-gradient(45deg,#7E90FE, #9873FF)",
          }}
          className="text-white w-1/4"
        >
          Explore
        </button>
      </div>
      <div className="lg:w-4/12 md:w-full">
        <img src="hero.png" width="100%" alt="" />
      </div>
    </div>
  );
};

export default HeroSectin;
