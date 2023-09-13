import React from "react";
import "./Navbar.css";
import MB_Logo from "../../assets/MB_Logo.png";

const Navbar = () => {
  return (
    <div className="top-0 sticky z-50 px-4  flex justify-between items-center h-20  text-white mx-auto bg-Navbar-background">
      <div className="h-16 left w-28 ml-32 flex justify-center">
        <img src={MB_Logo} alt="Logo " className="h-full pt-1 pb-1" />
      </div>
      <div className="right-0 flex text-white gap-16 text-2xl font-semibold mr-16">
        <p>News</p>
        <p>Careers</p>
        <p>Our Departments</p>
      </div>
    </div>
  );
};

export default Navbar;
