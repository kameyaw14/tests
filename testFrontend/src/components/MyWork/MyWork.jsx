import React from "react";
import "./MyWork.css";
import Title from "../Title/Title";
import mywork_data from "../../assets/images/mywork_data";
import Assets from "../../assets/assets";
import { FaArrowRight } from "react-icons/fa6";

const MyWork = () => {
  return (
    <div id="projects" className="myWork">
      <div className="latestworkTitle">
        <Title text1={"MY"} text2={"PROJECTS"} />
      </div>
      <div className="myWorkCont">
        {mywork_data.map((item, index) => {
          return (
            <img src={item.w_img} alt="" key={index} className="myWorkImg" />
          );
        })}
      </div>

      <div className="myWorkShowMore">
        <p className="showText">Show More</p>
        <FaArrowRight size={30} />
      </div>
    </div>
  );
};

export default MyWork;
