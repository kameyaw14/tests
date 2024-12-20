import React from "react";
import "./Services.css";
import Title from "../Title/Title";
import Services_Data from "../../assets/images/services_data";
import Assets from "../../assets/assets";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Services = () => {
  const LimitDescription = (desc) => {
    const words = desc.split(" ");
    return words.slice(0, 10).join(" ") + (words.length > 10 ? "..." : "");
  };

  return (
    <div id="services" className="services">
      <div className="servicesTitle">
        <Title text1={"MY"} text2={"SERVICES"} />
      </div>

      <div className="servicesCont">
        {Services_Data.map((item, index) => {
          return (
            <Link to={`/services/${item.s_no}`}>
              <div className="servicesFormat" key={index}>
                <h3 className="servicesH3">{item.s_no}</h3>
                <h2 className="servicesH2">{item.s_name}</h2>
                <p className="servicesP">{LimitDescription(item.s_desc)}</p>
                <div className="servicesReadmore">
                  <p>Read More</p>
                  <div className="readMoreArrow">
                    <FaArrowRight size={30} />
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
