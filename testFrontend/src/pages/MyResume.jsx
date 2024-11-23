import React from "react";
import resumeFile from "../assets/resume.pdf"; // Path to your resume file
import Assets from "../assets/assets"; // Import assets (image)

const MyResume = () => {
  return (
    <div className="bg-gray-800 py-20 sm:py-24 lg:py-32">
      <div className="container mx-auto px-6 md:px-12 text-center text-white">
        <h1 className="text-4xl sm:text-5xl font-bold mb-8 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
          My Resume
        </h1>

        <div className="flex flex-col items-center justify-center mb-12 md:space-x-12">
          {/* Profile Image Section */}
          <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-gray-600 mb-6 shadow-lg">
            <img
              src={Assets.me3}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Resume Description and Download Button */}
          <div className="max-w-xl text-lg sm:text-xl text-gray-200">
            <p className="mb-6">
              I'm a dedicated full-stack developer skilled in React, Node.js,
              and MongoDB, passionate about building scalable, efficient
              applications. Download my resume below to learn more about my work
              and experience.
            </p>
            <a
              href={resumeFile}
              download
              className="inline-block px-8 py-3 bg-gray-900 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-gray-700 transition-all"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Resume Additional Info (Optional Section) */}
        <div className="text-gray-300">
          <p className="mb-6 text-xl font-light">
            Feel free to reach out if you'd like to discuss opportunities or
            collaborations!
          </p>
          <div className="flex justify-center space-x-8">
            <a
              href="mailto:kameyaw14@gmail.com"
              className="text-lg text-gray-400 hover:text-gray-300 transition duration-300"
            >
              Email Me
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-gray-400 hover:text-gray-300 transition duration-300"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/kameyaw14"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-gray-400 hover:text-gray-300 transition duration-300"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyResume;
