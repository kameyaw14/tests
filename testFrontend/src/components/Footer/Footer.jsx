import React from "react";
import "./Footer.css";
import Assets from "../../assets/assets";
import { FaUser } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa6";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Footer = () => {
  return (
    <div id="footer" className="bg-[white] pt-5 pb-5">
      <div className="footer">
        <div className="footerTop">
          <div className="footerTopLeft">
            <AnchorLink href="#hero">
              <p className="font-semibold text-left text-4xl italic ml-5 cursor-pointer pb-5">
                ChieF
              </p>
            </AnchorLink>

            <p className="ftlText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              necessitatibus tempora illu
            </p>
          </div>

          <div className="footerTopRight">
            <div className="footerEmailInput">
              <FaUser />
              <input
                type="text"
                placeholder="Enter you email"
                className="footerEmail"
              />
            </div>

            <div className="footerSubscribe">Subscribe</div>
          </div>
        </div>
        <hr className="footerHr border-none h-1 bg-black" />

        <div className="footerBottom">
          <div className="footerBLeft">
            <FaCopyright /> 2024 ChiefDev. All rights reserved.
          </div>
          <div className="footerBRight">
            <p className="FBRText">Term of Services</p>
            <p className="FBRText">Privacy Policy</p>
            <p className="FBRText">Connect with me</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
