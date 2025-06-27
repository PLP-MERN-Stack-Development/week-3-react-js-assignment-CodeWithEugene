import React from 'react';
import TaskManager from '../components/TaskManager';

const TasksPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-center">Task Management</h1>
      <TaskManager />
    </div>
  );
};

export default TasksPage;
