import React from "react";
import { useAppStore } from "../store/AppStore";
import Typewriter from "../utils/TypingAnimation";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SlideLeft, SlideRight } from "../utils/animation";

const Home = () => {
  const zIndex = "z-20";

  return (
    <section className=" bg-black flex flex-col items-center justify-center min-h-screen">
      <div className=" md:text-left text-center">
        <h1 className="text-3xl md:text-5xl font-courier">
          <Typewriter text="Hello, I'm Chief" speed={0.13 * 0.2} />
          <Typewriter text="Full Stack Developer" speed={0.15 * 0.2} />
        </h1>

        {/* CTA */}
        <motion.div
          variants={SlideLeft(0.2)}
          initial="hidden"
          whileInView="visible"
          className="flex space-x-4 mt-8"
        >
          <Link
            to={"portfolio"}
            offset={80}
            className={`${zIndex}  text-white bg-blue-500 py-2 px-6 text-xl font-bold hover:bg-white hover:text-black transition-all duration-300 cursor-pointer`}
          >
            My Projects
          </Link>
          <Link
            to="/resume"
            className={`${zIndex} text-white bg-gradient-to-r from-blue-500 to-white py-2 px-6 text-xl font-bold hover:bg-gradient-to-l  transition-all duration-300 cursor-pointer`}
          >
            My Resume
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
