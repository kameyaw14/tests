import React, { useState } from "react";
import { RiCodeView } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { navLinks } from "../assets/data";
import ResponsiveMenu from "./ResponsiveMenu";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState("");
  const navigate = useNavigate();

  return (
    <div className="bg-black shadow-md custom-glow">
      <nav className="w-full">
        <div className=" mx-auto flex justify-between items-center py-6 px-4 lg:px-10">
          {/* Logo Section */}
          <div
            onClick={() => navigate("/")}
            className="flex items-center gap-2 cursor-pointer font-bold uppercase text-blue-500 custom-glow"
          >
            <RiCodeView className="text-5xl filter drop-shadow-lg glow-effect" />
          </div>

          {/* Menu Section */}
          <div className="hidden lg:block">
            <ul className="flex items-center space-x-8 text-blue-500 font-medium">
              {navLinks.map((item, index) => (
                <li key={index} className="relative group">
                  <Link
                    to={item.to}
                    className="inline-block px-4 py-2 transition-all duration-300 rounded-md"
                    onClick={() => setMenu(item.label)}
                  >
                    {item.label}
                  </Link>
                  {/* Pseudo-element replacement */}
                  <span className="absolute left-0 bottom-0 h-[3px] w-0 bg-transparent transition-all duration-500 ease-in-out group-hover:w-full group-hover:bg-blue-500 glow-effect"></span>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Hamburger Menu */}
          <div
            onClick={() => setOpen((prev) => !prev)}
            className="lg:hidden text-gray-700 cursor-pointer z-50"
          >
            {open ? (
              <AiOutlineClose className="text-3xl  text-blue-500 glow-effect" />
            ) : (
              <GiHamburgerMenu className="text-3xl text-blue-500 glow-effect" />
            )}
          </div>
        </div>
      </nav>
      {/* Mobile Navigation */}
      <ResponsiveMenu open={open} setOpen={setOpen} />
    </div>
  );
};

export default NavBar;
