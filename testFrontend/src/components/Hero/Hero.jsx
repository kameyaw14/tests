import React from "react";
import "./Hero.css";
import Assets from "../../assets/assets";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="hero" className="hero ">
      <img src={Assets.heroChief2} alt="" className="heroImg" />
      <h1 className="heroH1">
        <span className="nameSpan">I'm Chief,</span> a Full Stack Developer
      </h1>
      <p className="heroDesc">
        Description about me Lorem ipsum dolor sit amet consectetur adipisicing
        elit.
      </p>
      <div className="heroAction">
        <div className="heroConnect">
          <AnchorLink href="#contact" offset={80}>
            Connect with me
          </AnchorLink>
        </div>
        <div className="heroResume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
