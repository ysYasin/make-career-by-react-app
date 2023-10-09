import React from "react";
import HeroSectin from "./HeroSectin";
import CareerCathagory from "./Career-chatagory/CareerCathagory";
import Fetured from "./Career-chatagory/FeaturedCompanySection/Fetured";

const Home = () => {
  return (
    <main>
      <HeroSectin></HeroSectin>
      <CareerCathagory></CareerCathagory>
      <Fetured></Fetured>
    </main>
  );
};

export default Home;
