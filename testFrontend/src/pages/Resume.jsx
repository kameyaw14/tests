import React from "react";
import Assets from "../assets/assets";

const Resume = () => {
  return (
    <section className="bg-black text-white min-h-screen flex items-center justify-center py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* Profile Image */}
        <div className="flex justify-center mb-8">
          <img
            src={Assets.me3} // Replace with your own image URL
            alt="Chief"
            className="w-40 h-40 object-cover rounded-full border-4 border-blue-500 shadow-lg"
          />
        </div>

        {/* Introduction */}
        <h2 className="text-4xl font-bold text-blue-500 mb-4">My Resume</h2>
        {/* Resume Details */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
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
        </div>

        {/* Download Resume Button */}
        <a
          href="/path-to-resume.pdf" // Replace with the actual path to your resume
          download="Chief_Resume.pdf"
          className="inline-block py-3 px-8 mt-5  bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-400 transition duration-300"
        >
          Download My Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;
