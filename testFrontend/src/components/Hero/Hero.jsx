import React from "react";
import "./Hero.css";
import Assets from "../../assets/assets";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div id="hero" className="hero dd">
      <img src={Assets.heroChief2} alt="" className="heroImg" />
      <h1 className="heroH1">
        <span className="nameSpan">I'm Chief,</span> a Full Stack Developer
      </h1>
      <p className="heroDesc">
        A passionate Full Stack Developer skilled in React, Node.js/Express.js,
        MongoDb, with a flair for building dynamic web apps . I thrive on
        creating seamless user experiences and innovative solutions, blending
        creativity and code to bring ideas to life.
      </p>
      <div className="heroAction">
        <div className="heroConnect">
          <AnchorLink href="#contact" offset={80}>
            Connect with me
          </AnchorLink>
        </div>
        <Link to="/my-resume" className="heroResume">
          My Resume
        </Link>
      </div>
    </div>
  );
};

export default Hero;
