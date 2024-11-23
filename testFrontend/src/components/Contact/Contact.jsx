import React, { useState, useEffect } from "react";
import "./Contact.css";
import Title from "../Title/Title";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { toast } from "react-toastify";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [iconSize, setIconSize] = useState(40);

  // Adjust icon size based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 460) {
        setIconSize(25);
      } else if (window.innerWidth <= 520) {
        setIconSize(30);
      } else {
        setIconSize(40);
      }
    };

    handleResize(); // Set initial size
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "b516dc36-c946-4b73-9d45-b5ee7c950266");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      toast.success(res.message);
      setName("");
      setEmail("");
      setMessage("");
    } else {
      toast.error("Message failed to send");
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contactTitle">
        <Title text1={"GET IN"} text2={"TOUCH"} />
      </div>
      <div className="contactSections">
        {/* Left Section */}
        <div className="left">
          <h1 className="leftH1">Let’s Connect</h1>
          <p className="leftP">
            Have a question or want to collaborate? Feel free to reach out!
          </p>
          <div className="contactDetails">
            <div className="contDet">
              <IoIosMail size={iconSize} />
              <p>chiefdev7755@gmail.com</p>
            </div>
            <div className="contDet">
              <FaPhoneAlt size={iconSize} />
              <p>+233 20 080 5961</p>
            </div>
            <div className="contDet">
              <FaLocationDot size={iconSize} />
              <p>KNUST, TEK Credit Union Hostel</p>
            </div>
          </div>
        </div>
        {/* Right Section */}
        <form className="contactRight" onSubmit={onSubmit}>
          <label htmlFor="" className="contactLabel">
            Your Name
          </label>
          <input
            type="text"
            placeholder="Enter Your Name ..."
            name="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="contactInput"
          />

          <label htmlFor="" className="contactLabel">
            Your Email
          </label>
          <input
            type="email"
            placeholder="Enter Your Email ..."
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="contactInput"
          />

          <label htmlFor="" className="contactLabel">
            Write your message here...
          </label>
          <textarea
            name="message"
            rows={8}
            placeholder="Enter your message"
            className="contactTextArea"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          ></textarea>

          <button className="cantactSubmit" type="submit">
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
