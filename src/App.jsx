import { useState } from "react";
import "./App.css";
import Header from "./Components/HeaddingSection/Header/Header";
import Footer from "./Components/FooterSection/Footer/Footer";
import HeroSectin from "./Components/HomePage/HeroSectin";

function App() {
  return (
    <>
      <div>
        <Header></Header>
        <HeroSectin></HeroSectin>
      </div>
    </>
  );
}

export default App;
