import React, { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import Button from './Button';
import Card from './Card';

const TaskManager = () => {
  // Our custom hook handles all the localStorage logic automatically.
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  // Local state for the input field and the current filter.
  const [taskText, setTaskText] = useState('');
  const [filter, setFilter] = useState('all');

  const handleAddTask = (e) => {
    e.preventDefault();
    if (taskText.trim() === '') return;
    const newTask = { id: Date.now(), text: taskText, completed: false };
    setTasks([...tasks, newTask]);
    setTaskText('');
  };

  const handleToggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Filter the tasks based on the current filter state before rendering.
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'all') return true;
    if (filter === 'completed') return task.completed;
    if (filter === 'active') return !task.completed;
    return true;
  });

  return (
    <Card className="max-w-2xl mx-auto">
      <form onSubmit={handleAddTask} className="flex gap-2 mb-6">
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="Add a new task..."
          className="flex-grow p-2 border rounded-md bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Button type="submit" variant="primary">Add Task</Button>
      </form>

      <div className="flex justify-center gap-4 mb-6">
        <Button onClick={() => setFilter('all')} variant={filter === 'all' ? 'primary' : 'secondary'}>All</Button>
        <Button onClick={() => setFilter('active')} variant={filter === 'active' ? 'primary' : 'secondary'}>Active</Button>
        <Button onClick={() => setFilter('completed')} variant={filter === 'completed' ? 'primary' : 'secondary'}>Completed</Button>
      </div>

      <ul className="space-y-3">
        {filteredTasks.map((task) => (
          <li
            key={task.id}
            className="flex items-center justify-between p-3 bg-gray-100 dark:bg-gray-700 rounded-md"
          >
            <span
              onClick={() => handleToggleTask(task.id)}
              className={`cursor-pointer ${task.completed ? 'line-through text-gray-500' : ''}`}
            >
              {task.text}
            </span>
            <Button onClick={() => handleDeleteTask(task.id)} variant="danger">
              Delete
            </Button>
          </li>
        ))}
      </ul>
      {filteredTasks.length === 0 && <p className="text-center text-gray-500 mt-4">No tasks found. Add one above!</p>}
    </Card>
  );
};

export default TaskManager;
