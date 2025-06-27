import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import TasksPage from './pages/TasksPage';
import ApiPage from './pages/ApiPage';

function App() {
  return (
    // The `Routes` component defines all our possible URL paths.
    <Routes>
      {/* This "layout route" provides the <Layout> component for all nested routes. */}
      <Route path="/" element={<Layout />}>
        {/* The `index` route is the default page for the parent's path ('/'). */}
        <Route index element={<HomePage />} />
        <Route path="tasks" element={<TasksPage />} />
        <Route path="api" element={<ApiPage />} />
      </Route>
    </Routes>
  );
}

export default App;
