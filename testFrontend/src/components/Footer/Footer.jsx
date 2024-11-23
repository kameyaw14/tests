import React, { useState } from "react";
import "./Footer.css";
import { FaUser } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa6";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { toast } from "react-toastify";

const Footer = () => {
  const [email, setEmail] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    // Ensure email is not empty
    if (!email) {
      toast.error("Please enter a valid email");
      return;
    }

    const formData = new FormData(event.target);
    formData.append("access_key", "b516dc36-c946-4b73-9d45-b5ee7c950266");
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        toast.success("Thank you for subscribing");
        setEmail("");
      } else {
        toast.error("Failed to subscribe");
      }
    } catch (error) {
      toast.error("There was an error subscribing");
    }
  };

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
              Subscribe to stay updated with the latest information.
            </p>
          </div>

          <form action="" className="footerTopRight" onSubmit={onSubmit}>
            <div className="footerEmailInput">
              <FaUser />
              <input
                type="email"
                name="email" // Add name to capture form data
                placeholder="Enter your email"
                className="footerEmail"
                value={email} // Bind value to state
                onChange={(e) => setEmail(e.target.value)} // Update email state on change
              />
            </div>

            <button type="submit" className="footerSubscribe">
              Subscribe
            </button>
          </form>
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
