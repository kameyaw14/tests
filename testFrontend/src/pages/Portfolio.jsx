import React, { useState } from "react";
import mywork_data from "../assets/images/mywork_data";
import { motion } from "framer-motion";
import { SlideLeft } from "../utils/animation";
import Typewriter from "../utils/TypingAnimation";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Full Stack", "Game", "Frontend"];

  const filteredProjects =
    activeCategory === "All"
      ? mywork_data
      : mywork_data.filter((project) =>
          project.category.includes(activeCategory)
        );

  return (
    <section className="bg-black text-white py-20 px-6 min-h-screen">
      <div className="mt-20 max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          variants={SlideLeft(0)}
          initial="hidden"
          whileInView="visible"
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-blue-500 mb-4">Portfolio</h2>
          <p className="text-lg text-gray-300 font-courier">
            <Typewriter
              text="Explore some of my projects showcasing my skills and experience."
              speed={0.1 * 0.5}
            />
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          variants={SlideLeft(0)}
          initial="hidden"
          whileInView="visible"
          className=" flex justify-center gap-4 mb-8"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`z-20 px-4 py-2 rounded-lg font-semibold ${
                activeCategory === category
                  ? "bg-blue-500 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-blue-400 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <motion.div
          variants={SlideLeft(0)}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {[...filteredProjects].reverse().map((project) => (
            <motion.div
              key={project.w_no}
              className="z-20 bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <img
                src={project.w_img}
                alt={project.w_name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-blue-400 mb-2">
                  {project.w_name}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex justify-between">
                  <a
                    href={project.website_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 py-2 px-4 text-white font-semibold rounded-lg hover:bg-blue-400"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 py-2 px-4 text-white font-semibold rounded-lg hover:bg-gray-600"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
