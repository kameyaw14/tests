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
            className="absolute top-0 left-0 w-full h-screen z-30 bg-black/80 backdrop-blur-lg flex justify-center items-center"
          >
            <div className="w-11/12 max-w-md bg-white text-gray-800 rounded-3xl shadow-xl py-8 px-6">
              <ul className="flex flex-col items-center gap-6">
                {navLinks.map((item, index) => (
                  <li
                    key={index}
                    className="text-lg font-medium text-gray-700 hover:text-green-700 transition-all"
                  >
                    <Link
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className="block px-4 py-2 rounded-md hover:bg-green-100"
                    >
                      {item.label}
                    </Link>
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
