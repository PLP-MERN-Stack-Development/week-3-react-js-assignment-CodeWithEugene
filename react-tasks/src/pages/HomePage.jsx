import React from 'react';
import Card from '../components/Card';

const HomePage = () => {
  return (
    <Card>
      <h1 className="text-3xl font-bold mb-4">Welcome to the React Task Manager</h1>
      <p className="text-lg">This application demonstrates key React concepts including:</p>
      <ul className="list-disc list-inside mt-4 space-y-2">
        <li>Component-based architecture</li>
        <li>State management with `useState`, `useEffect`, and `useContext`</li>
        <li>A custom hook (`useLocalStorage`) for data persistence</li>
        <li>API integration with loading, error, and pagination states</li>
        <li>Responsive styling with Tailwind CSS and a dark mode theme</li>
      </ul>
      <p className="mt-6">Use the navigation bar to explore the different sections.</p>
    </Card>
  );
};

export default HomePage;
