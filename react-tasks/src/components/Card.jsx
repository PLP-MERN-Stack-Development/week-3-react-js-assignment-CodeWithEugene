import React from 'react';

// A simple styled container to wrap content sections consistently.
const Card = ({ children, className = '' }) => {
  return (
    <div className={`bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 ${className}`}>
      {children}
    </div>
  );
};

export default Card;
