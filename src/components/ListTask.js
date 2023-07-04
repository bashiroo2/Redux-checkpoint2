import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';
import './ListTask.css';

const ListTask = () => {
  // Retrieve tasks from the Redux store
  const tasks = useSelector((state) => state.tasks);

  return (
    <div className='nex'>
      {/* Render each task using the Task component */}
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default ListTask;
