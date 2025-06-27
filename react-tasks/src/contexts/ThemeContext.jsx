import React, { createContext, useContext, useState, useEffect } from 'react';

// 1. Create the context object
const ThemeContext = createContext();

// 2. Create a custom hook for easy access to the context
export const useTheme = () => useContext(ThemeContext);

// 3. Create the Provider component that will wrap our app
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  // This effect runs whenever the theme changes to update the app's appearance.
  useEffect(() => {
    const root = window.document.documentElement; // The <html> tag
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
