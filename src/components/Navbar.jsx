import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-10 bg-[#FFC0CB] flex items-center">
      <h1 className="w-full text-2xl font-extrabold mx-20">
        <NavLink to={"/"}>LOGO</NavLink>
      </h1>
      <p className="mr-10 text-base">
        <a href="#About">About</a>
      </p>
      <p className="mr-20 text-base">
        <a href="#Contact">Contact</a>
      </p>
    </div>
  );
};

export default Navbar;
