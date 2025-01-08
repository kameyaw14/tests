import React from "react";
import { useAppStore } from "../store/AppStore";
import Typewriter from "../utils/TypingAnimation";
import { Link } from "react-router-dom";

const Home = () => {
  const zIndex = "z-20";

  return (
    <section className=" bg-black flex flex-col items-center justify-center min-h-screen">
      <div className="md:mb-[40%] lg:mb-[20%] mb-[80%] md:text-left text-center">
        <h1 className="text-3xl md:text-5xl font-courier">
          <Typewriter text="Hello, I'm Chief" speed={0.13} />
          <Typewriter text="Full Stack Developer" speed={0.15} />
        </h1>

        {/* CTA */}
        <div className="flex space-x-4 mt-8">
          <Link
            href="#contact"
            offset={80}
            className={`${zIndex}  text-white bg-blue-500 py-2 px-6 text-xl font-bold hover:bg-white hover:text-black transition-all duration-300 cursor-pointer`}
          >
            My Projects
          </Link>
          <Link
            to="/my-resume"
            className={`${zIndex} text-white bg-gradient-to-r from-blue-500 to-white py-2 px-6 text-xl font-bold hover:bg-gradient-to-l  transition-all duration-300 cursor-pointer`}
          >
            My Resume
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
