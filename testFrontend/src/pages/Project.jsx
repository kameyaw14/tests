import React from "react";
import { useParams } from "react-router-dom";
import mywork_data from "../assets/images/mywork_data";
import Title from "../components/Title/Title";

const Project = () => {
  const { projectId } = useParams(); // Get the projectId from the URL
  const project = mywork_data.find((item) => item.w_no === parseInt(projectId)); // Find the project based on ID

  if (!project) {
    return <div>Project not found</div>; // Handle case when project is not found
  }

  return (
    <div className="container mx-auto p-6">
      {/* Original Background */}
      <div className="absolute inset-0 z-[-2] bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>

      <div className="projectTitle text-center mb-8">
        <Title text1={project.w_name} />
      </div>

      {/* Project Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
        <img
          src={project.w_img}
          alt={project.w_name}
          className="rounded-lg shadow-lg"
        />
        <img
          src={project.w_img2}
          alt={`${project.w_name} img2`}
          className="rounded-lg shadow-lg"
        />
        <img
          src={project.w_img3}
          alt={`${project.w_name} img3`}
          className="rounded-lg shadow-lg"
        />
        <img
          src={project.w_img4}
          alt={`${project.w_name} img4`}
          className="rounded-lg shadow-lg"
        />
        <img
          src={project.w_img5}
          alt={`${project.w_name} img5`}
          className="rounded-lg shadow-lg"
        />
        <img
          src={project.w_img6}
          alt={`${project.w_name} img6`}
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Project Description and Tech Stack */}
      <div className="text-center mb-8">
        <p className="text-lg text-gray-700">{project.description}</p>
        <p className="mt-4 text-sm text-gray-500">
          <strong>Tech Stack:</strong> {project.tech_stack}
        </p>
      </div>

      {/* View Website Button */}
      <div className="text-center mt-6">
        <a href={project.website_url} target="_blank" rel="noopener noreferrer">
          <button className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300">
            View Website
          </button>
        </a>
      </div>
    </div>
  );
};

export default Project;
