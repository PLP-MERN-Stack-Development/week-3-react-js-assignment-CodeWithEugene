import React from 'react';

// A simple footer for the bottom of every page.
const Footer = () => {
  return (
    // `mt-auto` pushes the footer to the bottom in a flex column layout.
    <footer className="bg-white dark:bg-gray-800 shadow-inner mt-auto">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 text-center text-gray-500 dark:text-gray-400">
        <p>© {new Date().getFullYear()} React Task Manager. All rights reserved.</p>
        <p>Built with React, Tailwind CSS, and Vite.</p>
      </div>
    </footer>
  );
};

export default Footer;
