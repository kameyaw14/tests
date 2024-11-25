import React from "react";
import "./MyWork.css";
import Title from "../Title/Title";
import mywork_data from "../../assets/images/mywork_data";
import Assets from "../../assets/assets";
import { FaArrowRight } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

const MyWork = () => {
  const navigate = useNavigate();

  return (
    <div id="projects" className="myWork">
      <div className="latestworkTitle">
        <Title text1={"MY"} text2={"PROJECTS"} />
      </div>
      <div className="myWorkCont">
        {mywork_data.slice(0, 4).map((item, index) => {
          return (
            <Link to={`/projects/${item.w_no}`} key={item.w_no}>
              <img src={item.w_img} alt={item.w_name} className="myWorkImg" />
            </Link>
          );
        })}
      </div>

      <div
        className="myWorkShowMore"
        onClick={() => {
          navigate("/all-projects");
          scrollTo(0, 0);
        }}
      >
        <p className="showText">Show More</p>
        <FaArrowRight size={30} />
      </div>
    </div>
  );
};

export default MyWork;
