import React, { useState } from "react";
import "./Navbar.css";
import MB_Logo from "../../assets/MB_Logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchBar, setSearchBar] = useState(false);

  const MenuClickhandler = () => {
    setMenuOpen((prev) => !prev);
  };

  const SearchBarClick = () => {
    setSearchBar((prev) => !prev);
  };

  return (
    <div className="top-0 z-50 px-4 flex justify-between items-center h-14 text-white mx-auto bg-[#D9D9D9]">
      <div className="h-12 left bg-[#BACBAE] w-28 flex justify-center">
        <img src={MB_Logo} alt="Logo " className="h-full pt-1 pb-1" />
      </div>
      <div className="right-0 flex text-black gap-16 text-lg mr-16">
        <p>News</p>
        <p>Careers</p>
        <p>Our Departments</p>
      </div>
    </div>
  );
};

export default Navbar;
