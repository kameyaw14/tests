import React from "react";

const Heading = ({ text }) => {
  return (
    <div className="flex">
      <div >
        <h1 className="text-2xl pb-1 font-poppins ">{text}</h1>
        <hr className="border-none outline-none h-0.5 bg-blue-900 w-3/5 m-auto " />
      </div>
    </div>
  );
};

Heading.defaultProps = {
  text: "Default Heading Text",
};

export default Heading;
