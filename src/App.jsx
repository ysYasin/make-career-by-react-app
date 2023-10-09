import { useState } from "react";
import "./App.css";
import Header from "./Components/HeaddingSection/Header/Header";
import Footer from "./Components/FooterSection/Footer/Footer";
import HeroSectin from "./Components/HomePage/HeroSectin";
import CareerCathagory from "./Components/HomePage/Career-chatagory/CareerCathagory";
import Fetured from "./Components/HomePage/Career-chatagory/FeaturedCompanySection/Fetured";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <Header></Header>
        <Outlet />
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
