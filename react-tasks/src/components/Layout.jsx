import React from 'react';
// Outlet is a placeholder from React Router where child route content will be rendered.
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ThemeSwitcher from './ThemeSwitcher';

const Layout = () => {
  return (
    // This div creates a "sticky footer" layout.
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navbar>
        <ThemeSwitcher />
      </Navbar>
      {/* `flex-grow` makes this main section take up all available vertical space. */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <Outlet /> {/* Page content goes here */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
