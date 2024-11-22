import React, { useEffect, useState } from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import Assets from "../../assets/assets";
import { IoEllipsisHorizontalOutline } from "react-icons/io5";
import AnchorLink from "react-anchor-link-smooth-scroll";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to control mobile menu visibility
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to toggle mobile menu visibility
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <div
      className={` ${
        scrolled ? "bg-white transition-all duration-500 text-black" : ""
      }  fixed z-50 top-0  left-0 right-0 bg-transparent mb-20 flex items-center justify-between py-6 font-poppins`}
    >
      <AnchorLink href="#hero">
        <p className="font-semibold text-2xl italic ml-5 cursor-pointer">
          ChieF
        </p>
      </AnchorLink>

      {/* Desktop Menu: Visible only on medium (md) and larger screens */}
      <ul className={`hidden md:flex items-center gap-5 lg:ml-44`}>
        <li
          className={`${
            menu === "home" && "translate-y-4"
          } flex flex-col gap-[0px]   hover:scale-105 hover:shadow-lg transition-all duration-200 ease-in-out cursor-pointer`}
        >
          <AnchorLink className="anchorLink" offset={50} href="#hero">
            <p className="" onClick={() => setMenu("home")}>
              Home
            </p>
          </AnchorLink>
          {menu === "home" ? (
            <div className=" flex m-auto">
              <IoEllipsisHorizontalOutline size={30} />
            </div>
          ) : (
            ""
          )}
        </li>
        <li
          className={`${
            menu === "about" && "translate-y-4"
          } flex flex-col gap-[0px]   hover:scale-105 hover:shadow-lg transition-all duration-200 ease-in-out cursor-pointer`}
        >
          <AnchorLink className="anchorLink" offset={80} href="#about">
            <p onClick={() => setMenu("about")}>About Me</p>
          </AnchorLink>{" "}
          {menu === "about" ? (
            <div className="mx-auto">
              <IoEllipsisHorizontalOutline size={30} />
            </div>
          ) : (
            ""
          )}
        </li>
        <li
          className={`${
            menu === "services" && "translate-y-4"
          } flex flex-col gap-[0px]   hover:scale-105 hover:shadow-lg transition-all duration-200 ease-in-out cursor-pointer`}
        >
          <AnchorLink className="anchorLink" offset={80} href="#services">
            <p onClick={() => setMenu("services")}>Services</p>
          </AnchorLink>{" "}
          {menu === "services" ? (
            <div className="mx-auto">
              <IoEllipsisHorizontalOutline size={30} />
            </div>
          ) : (
            ""
          )}
        </li>
        <li
          className={`${
            menu === "projects" && "translate-y-4"
          } flex flex-col gap-[0px]   hover:scale-105 hover:shadow-lg transition-all duration-200 ease-in-out cursor-pointer`}
        >
          <AnchorLink className="anchorLink" offset={80} href="#projects">
            <p onClick={() => setMenu("projects")}>Projects</p>
          </AnchorLink>{" "}
          {menu === "projects" ? (
            <div className="mx-auto">
              <IoEllipsisHorizontalOutline size={30} />
            </div>
          ) : (
            ""
          )}
        </li>
        <li
          className={`${
            menu === "contact" && "translate-y-4"
          } flex flex-col gap-[0px]   hover:scale-105 hover:shadow-lg transition-all duration-200 ease-in-out cursor-pointer`}
        >
          <AnchorLink className="anchorLink" offset={80} href="#contact">
            {" "}
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" ? (
            <div className="mx-auto">
              <IoEllipsisHorizontalOutline size={30} />
            </div>
          ) : (
            ""
          )}
        </li>
      </ul>

      {/* Social Icons (Always Visible) */}
      <div className="flex gap-2 text-xl mr-5">
        <a
          href="https://github.com/kameyaw14"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="cursor-pointer hover:scale-105 hover:shadow-lg transition-all duration-200 ease-in-out" />
        </a>
        <FaInstagram className="cursor-pointer hover:scale-105 hover:shadow-lg transition-all duration-200 ease-in-out" />
        <FaLinkedin className="cursor-pointer hover:scale-105 hover:shadow-lg transition-all duration-200 ease-in-out" />
      </div>

      {/* Hamburger Icon for Mobile: Only shown on small (sm) screens */}
      <div
        className={`md:hidden mr-5 cursor-pointer ${
          isOpen ? "fixed right-5 top-5 z-50" : ""
        }`}
        onClick={toggleMenu}
      >
        {/* Icon toggles between hamburger (FaBars) and close (FaTimes) based on `isOpen` */}
        {isOpen ? (
          <FaTimes size={24} className="text-black cursor-pointer -z-50" />
        ) : (
          <FaBars size={24} />
        )}
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full bg-white w-2/3 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-40 shadow-lg`}
      >
        {/* List items with close functionality when clicked */}
        <ul className="flex flex-col items-center gap-8 mt-20 text-lg text-black">
          <AnchorLink href="#hero">
            <li
              className="hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer"
              onClick={toggleMenu}
            >
              Home
            </li>
          </AnchorLink>
          <AnchorLink href="#about" offset={80}>
            <li
              className="hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer"
              onClick={toggleMenu}
            >
              About Me
            </li>
          </AnchorLink>
          <AnchorLink href="#services" offset={80}>
            <li
              className="hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer"
              onClick={toggleMenu}
            >
              Services
            </li>
          </AnchorLink>
          <AnchorLink href="#projects" offset={80}>
            <li
              className="hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer"
              onClick={toggleMenu}
            >
              Projects
            </li>
          </AnchorLink>
          <AnchorLink href="#contact" offset={80}>
            <li
              className="hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer"
              onClick={toggleMenu}
            >
              Contact
            </li>
          </AnchorLink>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
