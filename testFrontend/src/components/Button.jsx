import React from 'react';

const Button = ({ label }) => {
  return (
    <button className="px-6 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 transition duration-300">
      {label}
    </button>
  );
};

Button.defaultProps = {
  label: 'Click Me',
};

export default Button;
