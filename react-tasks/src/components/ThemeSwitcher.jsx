import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import Button from './Button';

const ThemeSwitcher = () => {
  // Our custom hook makes getting theme data clean and easy.
  const { theme, toggleTheme } = useTheme();

  return (
    <Button onClick={toggleTheme} variant="secondary">
      {/* Show a different icon based on the current theme */}
      {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
    </Button>
  );
};

export default ThemeSwitcher;
