import React from "react";
import mywork_data from "../assets/images/mywork_data";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Project One",
      description: "A modern web app built with React and Tailwind CSS.",
      image: "https://via.placeholder.com/300", // Replace with your project image URL
      demoLink: "https://example.com/demo1",
      repoLink: "https://github.com/your-repo/project-one",
    },
    {
      id: 2,
      title: "Project Two",
      description: "A REST API built with Node.js and MongoDB.",
      image: "https://via.placeholder.com/300", // Replace with your project image URL
      demoLink: "https://example.com/demo2",
      repoLink: "https://github.com/your-repo/project-two",
    },
    {
      id: 3,
      title: "Project Three",
      description:
        "A dynamic portfolio website designed with HTML, CSS, and JavaScript.",
      image: "https://via.placeholder.com/300", // Replace with your project image URL
      demoLink: "https://example.com/demo3",
      repoLink: "https://github.com/your-repo/project-three",
    },
  ];

  return (
    <section className="bg-black text-white py-20 px-6 min-h-screen">
      <div className="mt-20 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-500 mb-4">Portfolio</h2>
          <p className="text-lg text-gray-300">
            Explore some of my projects showcasing my skills and experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {mywork_data.map((project) => (
            <div
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
