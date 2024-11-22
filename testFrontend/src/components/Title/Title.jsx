import React from "react";
import "./Title.css";

const Title = ({ text1, text2 }) => {
  return (
    <div className="title">
      <h1 className="text1">
        {text1} <span className="text2">{text2}</span>
      </h1>
    </div>
  );
};

export default Title;
