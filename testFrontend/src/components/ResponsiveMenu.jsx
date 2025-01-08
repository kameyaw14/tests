import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "../assets/data";
import { Link } from "react-router-dom";

const ResponsiveMenu = ({ open, setOpen }) => {
  return (
    <div>
      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
            className="absolute top-0 left-0 w-full h-screen z-30 bg-blue-95000/80 backdrop-blur-lg flex justify-center items-center"
          >
            <div className="w-11/12 max-w-md bg-black text-blue-500 rounded-3xl shadow-xl py-8 px-6">
              <ul className="flex flex-col items-center gap-6">
                {navLinks.map((item, index) => (
                  <li
                    key={index}
                    className="text-lg font-medium text-blue-500  transition-all relative group"
                  >
                    <Link
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className="block px-4 py-2 rounded-md "
                    >
                      {item.label}
                    </Link>
                    {/* Pseudo-element replacement */}
                    <span className="absolute left-0 bottom-0 h-[3px] w-0 bg-transparent transition-all duration-500 ease-in-out group-hover:w-full group-hover:bg-blue-500 glow-effect"></span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ResponsiveMenu;
