import React from "react";
import "./Services.css";
import Title from "../Title/Title";
import Services_Data from "../../assets/images/services_data";
import Assets from "../../assets/assets";
import { FaArrowRight } from "react-icons/fa6";

const Services = () => {
  return (
    <div id="services" className="services">
      <div className="servicesTitle">
        <Title text1={"MY"} text2={"SERVICES"} />
      </div>

      <div className="servicesCont">
        {Services_Data.map((item, index) => {
          return (
            <div className="servicesFormat" key={index}>
              <h3 className="servicesH3">{item.s_no}</h3>
              <h2 className="servicesH2">{item.s_name}</h2>
              <p className="servicesP">{item.s_desc}</p>
              <div className="servicesReadmore">
                <p>Read More</p>
                <div className="readMoreArrow">
                  <FaArrowRight size={30} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
