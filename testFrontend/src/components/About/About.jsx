import React from "react";
import "./About.css";
import Title from "../Title/Title";
import Assets from "../../assets/assets";
import {
  Fa500Px,
  FaAffiliatetheme,
  FaAlignJustify,
  FaBoxes,
} from "react-icons/fa";

const About = () => {
  return (
    <div id="about" className="about bg-white px-14 rounded-lg ">
      <div className="aboutheading">
        <Title text1={"ABOUT"} text2={"ME"} />
      </div>

      <div className="aboutSections">
        <div className="aboutLeft">
          <img src={Assets.me2} alt="" />
        </div>

        <div className="aboutRight">
          <div className="aboutPara">
            <div className="aboutPara">
              <p>
                I'm a dedicated Full Stack Developer and Computer Science major
                at Kwame Nkrumah University of Science and Technology (KNUST),
                blending academic knowledge with hands-on experience to create
                impactful digital solutions.
              </p>
              <p>
                Currently, I work at the KsTU ICT Directorate, where I
                contribute to maintaining and improving IT systems while gaining
                practical insights into the tech industry. With a strong
                foundation in HTML, CSS, JavaScript,React,MongoDb and Node.js. I
                am driven to build web applications that solve real-world
                problems and deliver seamless user experiences.
              </p>
            </div>
          </div>

          <div className="aboutSkills">
            <div className="aboutSkill">
              <p className="skillName">HTML & CSS</p>
              <hr style={{ width: "50%" }} className="aboutLine" />
            </div>
            <div className="aboutSkill">
              <p className="skillName">JavaScript</p>
              <hr style={{ width: "60%" }} className="aboutLine" />
            </div>
            <div className="aboutSkill">
              <p className="skillName">React JS</p>
              <hr style={{ width: "55%" }} className="aboutLine" />
            </div>
            <div className="aboutSkill">
              <p className="skillName">Node/Express</p>
              <hr style={{ width: "30%" }} className="aboutLine" />
            </div>
            <div className="aboutSkill">
              <p className="skillName">MongoDb</p>
              <hr style={{ width: "25%" }} className="aboutLine" />
            </div>
          </div>
        </div>
      </div>
      <div className="aboutAchievements">
        <div className="aboutAchieve">
          <h1 className="achieveText1">40+</h1>
          <p className="achieveText2">Projects Completed</p>
        </div>
        <hr className="achieveLine" />
        <div className="aboutAchieve">
          <h1 className="achieveText1">15+</h1>
          <p className="achieveText2">Happy Clients</p>
        </div>
        <hr className="achieveLine" />
      </div>
    </div>
  );
};

export default About;
