import { useState } from "react";
import "./App.css";
import Footer from "./Components/FooterSection/Footer/Footer";
import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Components/HeaddingSection/Header/Header";

function App() {
  const navigation = useNavigation();
  return (
    <>
      <div>
        <Header></Header>
        {(navigation.state === "submitting" && "Loading...") || <Outlet />}

        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
