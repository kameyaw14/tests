import React from "react";

// Card component
const Card = ({ title, cardType }) => (
  <div className="border border-gray-300 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200">
    <h2 className="text-xl font-semibold text-gray-700">{title}</h2>
    <p className="text-gray-500 text-sm">{cardType}</p>
  </div>
);

export default Card;
