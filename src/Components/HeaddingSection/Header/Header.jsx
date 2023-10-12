import React from "react";
import ActivePage from "../../IsActivePage/ActivePage";

const Header = () => {
  return (
    <nav className="py-5 flex absolute z-30 w-full justify-around items-center">
      <div className="logo">
        <img src="logo.png" width="30%" alt="" />
      </div>
      <div className="flex text-xl gap-5">
        <ActivePage to="/">Home</ActivePage>
        <ActivePage to="/Appliedjobs">Applied jobs</ActivePage>
        <ActivePage to="/statistic">Statistics</ActivePage>
        <ActivePage to="/">Blog</ActivePage>
      </div>
      <button
        type="submit"
        className=" bg-gradient-to-l font-semibold text-white from-cyan-500 to-blue-500"
      >
        Start Aplying
      </button>
    </nav>
  );
};

export default Header;
