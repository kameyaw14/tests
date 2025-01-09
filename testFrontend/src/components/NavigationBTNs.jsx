import React from "react";
import { Link } from "react-router-dom";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const NavButtons = ({ leftTo, rightTo, page }) => {
  return (
    <div className="fixed bottom-8 left-0 right-0 flex justify-between px-4 z-20">
      <Link
        to={leftTo}
        className={`${
          page === "home" && "invisible"
        } flex items-center justify-center bg-blue-500 text-white p-5 rounded-[100%] font-semibold hover:bg-blue-400 transition duration-300`}
      >
        <FaAngleLeft className="md:text-lg text-xl" />
      </Link>
      <Link
        to={rightTo}
        className={`${
          page === "contact" && "invisible"
        } flex items-center justify-center bg-blue-500 text-white p-5 rounded-[100%] font-semibold hover:bg-blue-400 transition duration-300`}
      >
        <FaAngleRight className="md:text-lg text-xl" />
      </Link>
    </div>
  );
};

export default NavButtons;
