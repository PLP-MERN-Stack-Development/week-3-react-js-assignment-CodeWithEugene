/** @type {import('tailwindcss').Config} */
export default {
  // The 'content' array tells Tailwind to scan these files for class names.
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // We're enabling dark mode and setting its strategy to 'class'.
  // This means dark mode is applied whenever the <html> tag has a 'dark' class.
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
}
