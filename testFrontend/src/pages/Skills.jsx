import React from "react";
import { motion } from "framer-motion";
import { SlideLeft, SlideRight } from "../utils/animation";
import Typewriter from "../utils/TypingAnimation";
import { MySkills } from "../assets/assets";

const Skills = () => {
  const zIndex = "z-20";
  return (
    <section className="bg-black text-white min-h-screen flex items-center justify-center py-20 px-6">
      <motion.div
        variants={SlideLeft(0)}
        initial="hidden"
        whileInView="visible"
        className="max-w-4xl mx-auto mt-12"
      >
        <motion.div
          variants={SlideLeft(0)}
          initial="hidden"
          whileInView="visible"
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-blue-500 mb-4">My Skills</h2>
          <p className="text-lg font-mono text-gray-300">
            <Typewriter
              text="These are the tools and technologies I have experience with. "
              speed={0.1 * 0.7}
            />
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {/* Skill Item */}
          {MySkills.map((skill) => (
            <div
              key={skill}
              className={`${zIndex} bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:scale-105 transform transition duration-300`}
            >
              <p className="text-lg font-semibold text-blue-400">{skill}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
