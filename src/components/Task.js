import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, editTask } from '../store/actions';
import './task.css'; // Import the CSS file

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [taskDescription, setTaskDescription] = useState(task.description);

  const handleToggleTask = () => {
    dispatch(toggleTask(task.id)); // Dispatches the toggleTask action with the task ID
  };

  const handleEditTask = () => {
    dispatch(editTask(task.id, taskDescription)); // Dispatches the editTask action with the task ID and updated task description
    setIsEditing(false); // Sets isEditing to false, exiting edit mode
  };

  return (
    <div className="checkbox-container">
      <input
        type="checkbox"
        className="checkbox-input"
        checked={task.isDone}
        onChange={handleToggleTask}
      />
      {isEditing ? (
        <>
          {/* Input field for editing the task description */}
          <input
            type="text"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
          />
          {/* Save button to update the task */}
          <button onClick={handleEditTask}>Save</button>
        </>
      ) : (
        <>
          {/* Display the task description */}
          <span className="checkbox-label">{task.description}</span>
          {/* Edit button to enter edit mode */}
          <button className='editbtn' onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
    </div>
  );
};

export default Task;
