import React from "react";
import Assets from "../assets/assets";

const NavBar = ({ isMenuOpen, toggleMenu }) => {
  return (
    <div className="flex items-center md:justify-around justify-between m-[20px] relative">
      {/* Desktop Navbar */}
      <ul className="flex font-poppins items-center list-none gap-[60px] text-[20px] hidden md:flex">
        <li className="hover:scale-105 hover:shadow-lg transition-all duration-200 ease-in-out">Home</li>
        <li className="hover:scale-105 hover:shadow-lg transition-all duration-200 ease-in-out">About Me</li>
        <li className="hover:scale-105 hover:shadow-lg transition-all duration-200 ease-in-out">Services</li>
        <li className="hover:scale-105 hover:shadow-lg transition-all duration-200 ease-in-out">Portfolio</li>
        <li className="hover:scale-105 hover:shadow-lg transition-all duration-200 ease-in-out">Contact</li>
      </ul>

      {/* Mobile Navbar Hamburger Icon */}
      <div
        className="md:hidden text-[30px] cursor-pointer"
        onClick={toggleMenu}
      >
        &#9776;
      </div>

      {/* Reach Me Button */}
      <div className="hidden md:block p-[20px] font-poppins border-none rounded-[50px] text-[22px] cursor-pointer bg-netflixRed hover:bg-[#b00710] hover:scale-105 hover:shadow-lg transition-all duration-200 ease-in-out">
        Reach Me
      </div>

      {/* Mobile Menu (Hidden by default, slides in when menu is open) */}
      <div
        className={`${
          isMenuOpen ? "right-0" : "-right-full"
        } absolute top-0 bottom-0 w-1/3 rounded-[50px] text-white p-5 transition-all duration-300 ease-in-out md:hidden`}
      >
        <ul className="flex flex-col items-center gap-6 text-[20px]">
          <li className="hover:scale-105 hover:shadow-lg transition-all duration-200 ease-in-out">Home</li>
          <li className="hover:scale-105 hover:shadow-lg transition-all duration-200 ease-in-out">About Me</li>
          <li className="hover:scale-105 hover:shadow-lg transition-all duration-200 ease-in-out">Services</li>
          <li className="hover:scale-105 hover:shadow-lg transition-all duration-200 ease-in-out">Portfolio</li>
          <li className="hover:scale-105 hover:shadow-lg transition-all duration-200 ease-in-out">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
