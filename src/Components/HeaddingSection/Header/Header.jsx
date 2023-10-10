import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="py-5 flex absolute w-full justify-around items-center">
      <div className="logo">
        <img src="logo.png" width="30%" alt="" />
      </div>
      <div className="flex text-xl gap-5">
        <Link to="/" className="hover:text-blue-400">
          Home
        </Link>
        <Link to="/Appliedjobs" className="hover:text-blue-400">
          Applied jobs
        </Link>
        <Link to="/" className="hover:text-blue-400">
          Statistics
        </Link>
        <Link to="/" className="hover:text-blue-400">
          Blog
        </Link>
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
