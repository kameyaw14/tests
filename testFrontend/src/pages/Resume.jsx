import React from "react";
import Assets from "../assets/assets";
import { motion } from "framer-motion";
import { SlideLeft, SlideRight } from "../utils/animation";
import Typewriter from "../utils/TypingAnimation";

const Resume = () => {
  const zIndex = "z-20";
  return (
    <section className=" bg-black text-white min-h-screen flex items-center justify-center py-20 px-6">
      <div className="mt-12 z-20 max-w-3xl mx-auto text-center">
        {/* Profile Image */}
        <motion.div
          variants={SlideLeft(0)}
          initial="hidden"
          whileInView="visible"
          className="flex justify-center mb-8"
        >
          <img
            src={Assets.me3} // Replace with your own image URL
            alt="Chief"
            className={`${zIndex} w-40 h-40 object-cover rounded-full border-4 border-blue-500 shadow-lg hover:scale-105 transform transition duration-300`}
          />
        </motion.div>

        {/* Introduction */}
        <motion.h2
          variants={SlideLeft(0)}
          initial="hidden"
          whileInView="visible"
          className="text-4xl font-bold text-blue-500 mb-4"
        >
          My Resume
        </motion.h2>
        {/* Resume Details */}
        <motion.div
          variants={SlideLeft(0)}
          initial="hidden"
          whileInView="visible"
          className="bg-gray-800 p-8 rounded-lg shadow-lg"
        >
          {/* <h3 className="text-2xl font-semibold text-blue-400 mb-4">
            Nana Kwadwo Kwakye-Ameyaw
          </h3> */}
          <p className="text-lg text-gray-400 mb-4">
            Full-Stack Web Developer | Passionate Problem Solver
          </p>
          <ul className="text-lg text-gray-400 list-disc list-inside mb-6">
            <li>Proficient in JavaScript, React, Node.js, and Django</li>
            <li>Experienced with MongoDB, Express, and Tailwind CSS</li>
            <li>Strong focus on frontend performance and user experience</li>
            <li>Passionate about building innovative solutions</li>
          </ul>
          <p className="text-gray-400">
            For more details about my skills, projects, and experience, feel
            free to download my resume below!
          </p>
        </motion.div>

        {/* Download Resume Button */}
        <motion.div
          variants={SlideLeft(0)}
          initial="hidden"
          whileInView="visible"
        >
          <motion.a
            href={Assets.resume}
            download={"my resume"}
            className={`${zIndex} inline-block py-3 px-8 mt-5  bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-400 transition duration-300`}
          >
            Download My Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
