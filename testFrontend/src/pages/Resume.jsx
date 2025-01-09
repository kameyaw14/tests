import React from "react";

const Resume = () => {
  return (
    <section className="bg-black text-white min-h-screen flex items-center justify-center py-20 px-6">
      <div className="max-w-4xl mx-auto text-center mt-12">
        <h2 className="text-4xl font-bold text-blue-500 mb-6">My Resume</h2>
        <p className="text-lg text-gray-300 font-mono mb-12">
          Here’s a quick overview of my qualifications and experiences. You can
          download my full resume and picture below.
        </p>

        {/* Resume Details */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-blue-400 mb-4">
            Nana Kwadwo Kwakye-Ameyaw
          </h3>
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

        {/* Download Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/path-to-resume.pdf" // Replace with the actual path to your resume file
            download="Nana_Kwakye-Ameyaw_Resume.pdf"
            className="inline-block py-3 px-8 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-400 transition duration-300"
          >
            Download Resume
          </a>
          <a
            href="/path-to-picture.jpg" // Replace with the actual path to your picture file
            download="Nana_Kwakye-Ameyaw_Picture.jpg"
            className="inline-block py-3 px-8 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-400 transition duration-300"
          >
            Download Picture
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
