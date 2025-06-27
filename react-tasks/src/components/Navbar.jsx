import React from 'react';
// NavLink is special: it knows when it's the "active" link and can be styled differently.
import { NavLink } from 'react-router-dom';

const Navbar = ({ children }) => {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="font-bold text-xl text-blue-500 dark:text-blue-400">ReactTasks</span>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <NavLink 
                  to="/" 
                  className={({ isActive }) => 
                    `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-gray-900 dark:bg-gray-700 text-white' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}`
                  }
                >
                  Home
                </NavLink>
                <NavLink 
                  to="/tasks" 
                  className={({ isActive }) => 
                    `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-gray-900 dark:bg-gray-700 text-white' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}`
                  }
                >
                  Task Manager
                </NavLink>
                <NavLink 
                  to="/api" 
                  className={({ isActive }) => 
                    `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-gray-900 dark:bg-gray-700 text-white' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}`
                  }
                >
                  API Data
                </NavLink>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            {children} {/* Placeholder for our ThemeSwitcher button */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
