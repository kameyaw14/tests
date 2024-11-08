import React from 'react';

const Alert = ({ type, message }) => {
  const alertColors = {
    success: 'bg-green-100 text-green-700',
    error: 'bg-red-100 text-red-700',
    warning: 'bg-yellow-100 text-yellow-700',
  };

  return (
    <div className={`p-4 mb-4 rounded ${alertColors[type]}`}>
      <p>{message}</p>
    </div>
  );
};

Alert.defaultProps = {
  type: 'success',
  message: 'This is a default alert message.',
};

export default Alert;
