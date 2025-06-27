import React from 'react';

// A flexible, reusable button component with different visual "variants".
const Button = ({ children, onClick, variant = 'primary', className = '', ...props }) => {
  // Base styles that all buttons will share.
  const baseStyles = 'px-4 py-2 rounded-md font-semibold text-white focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-300';

  // Different styles for each variant.
  const variants = {
    primary: 'bg-blue-500 hover:bg-blue-600 focus:ring-blue-500',
    secondary: 'bg-gray-500 hover:bg-gray-600 focus:ring-gray-500',
    danger: 'bg-red-500 hover:bg-red-600 focus:ring-red-500',
  };

  return (
    <button
      onClick={onClick}
      // Combine base styles, variant styles, and any extra classes passed in.
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props} // Pass down other props like 'disabled' or 'type'.
    >
      {children} {/* The text or icon inside the button. */}
    </button>
  );
};

export default Button;
