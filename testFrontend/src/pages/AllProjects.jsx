import React, { useContext } from "react";
import Title from "../components/Title/Title";
import mywork_data from "../assets/images/mywork_data";
import { AppContext } from "../contexts/AppContext";

const AllProjects = () => {
  const { navigate } = useContext(AppContext);

  return (
    <div className="allProjects overflow-x-hidden text-neutral-300 antialiased selection:bg-yellow-400 selection:text-black">
      {/* Background */}
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 h-screen w-screen bg-black bg-[radial-gradient(circle,rgba(255,255,255,0.2)_1px,rgba(0,9,29,1)_1px)] bg-[size:20px_20px]"></div>
      </div>

      {/* Title Section */}
      <div className="text-center py-10">
        <Title text1={"MY"} text2={"PROJECTS"} />
        <p className="text-lg mt-4">Browse through my projects</p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 px-4 sm:px-10 md:px-20 lg:grid-cols-2 xl:grid-cols-3">
        {mywork_data.map((item, id) => (
          <div
            key={id}
            onClick={() => {
              navigate(`/projects/${item.w_no}`);
            }}
            className="group bg-neutral-900 p-5 rounded-lg shadow-md transition-transform hover:scale-105 hover:shadow-xl"
          >
            <img
              src={item.w_img}
              alt={item.w_name}
              className="h-48 w-full object-cover rounded-md"
            />
            <p className="mt-4 text-center text-lg font-semibold text-white group-hover:text-yellow-400">
              {item.w_name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProjects;
