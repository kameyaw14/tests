import React from "react";
import Assets from "../assets/assets";
import { motion } from "framer-motion";
import { SlideLeft, SlideRight } from "../utils/animation";
import Typewriter from "../utils/TypingAnimation";
import NavButtons from "../components/NavigationBTNs";

const AboutMe = () => {
  const zIndex = "z-20";
  return (
    <section className="bg-black text-white min-h-screen flex items-center justify-center py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={SlideLeft(0)}
          initial="hidden"
          whileInView="visible"
          className="text-center mb-12 mt-12"
        >
          <h2 className="text-4xl font-bold text-blue-500 mb-4">About Me</h2>
          <p className={`${zIndex}text-lg font-mono text-gray-300`}>
            <Typewriter
              text=" Hi, I'm Chief, a full-stack web developer with a passion for coding,
            problem-solving, and creating innovative solutions."
              speed={0.1 * 0.2}
            />
          </p>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          variants={SlideLeft(0)}
          initial="hidden"
          whileInView="visible"
          className="flex justify-center mb-12"
        >
          <img
            src={Assets.heroChief2}
            URL
            alt="Profile"
            className={`${zIndex} w-40 h-40 rounded-full border-4 border-blue-500 shadow-lg transition-transform duration-300 hover:scale-110`}
          />
        </motion.div>

        {/* Responsive Grid Layout */}
        <motion.div
          variants={SlideLeft(0)}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-16"
        >
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-blue-400">Who Am I?</h3>
            <p className="mt-4 text-lg text-gray-400">
              I’m a self-taught programmer who loves to learn new technologies
              and push boundaries. I specialize in building full-stack web
              applications with a strong focus on frontend performance and user
              experience. I’m always seeking new challenges to refine my skills.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-semibold text-blue-400">Skills</h3>
            <ul className="mt-4 space-y-2 text-lg text-gray-400">
              <li className="flex items-center space-x-2">
                <span className="font-mono">✔</span>
                <span>JavaScript / React / Node.js</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="font-mono">✔</span>
                <span>MongoDB / Express</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="font-mono">✔</span>
                <span>HTML / CSS / Tailwind CSS</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="font-mono">✔</span>
                <span>Python / Django</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold text-green-400">Contact</h3>
          <p className="mt-4 text-lg text-gray-400">
            If you're interested in collaborating or just want to chat about
            tech, feel free to reach out!
          </p>
          <a
            href="mailto:chief@example.com"
            className="inline-block mt-6 py-3 px-8 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-400 transition duration-300"
          >
            Send Me An Email
          </a>
        </div> */}
      </div>
      {/* NavButtons */}
      <div className="">
        <NavButtons leftTo={"/"} rightTo={"/skills"} />
      </div>
    </section>
  );
};

export default AboutMe;
