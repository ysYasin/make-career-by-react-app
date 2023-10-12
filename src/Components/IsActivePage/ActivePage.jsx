import React from "react";
import { NavLink } from "react-router-dom";

const ActivePage = ({ to, children }) => {
  return (
    <div>
      <NavLink to={to} className={({ isActive }) => isActive && "text-black"}>
        {children}
      </NavLink>
    </div>
  );
};

export default ActivePage;
