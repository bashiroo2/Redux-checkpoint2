import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addTask } from '../store/actions';
import './AddTask.css';

const AddTask = () => {
  // Get the dispatch function from the Redux store
  const dispatch = useDispatch();
  
  // Define the taskDescription state and its setter function
  const [taskDescription, setTaskDescription] = useState('');

  // Event handler for input change
  const handleInputChange = (event) => {
    // Update the taskDescription state with the input value
    setTaskDescription(event.target.value);
    // Clear any custom validation messages
    event.target.setCustomValidity('');
  };

  // Event handler for adding a task
  const handleAddTask = () => {
    // Check if the task description is empty
    if (taskDescription.trim() === '') {
      // Set a custom validation message for the input field
      const input = document.getElementById('taskInput');
      input.setCustomValidity('Please enter a task description');
      input.reportValidity();
      return;
    }

    // Create a new task object with a unique ID, description, and initial isDone status
    const task = {
      id: uuidv4(),
      description: taskDescription,
      isDone: false,
    };

    // Dispatch the addTask action with the new task object
    dispatch(addTask(task));
    
    // Reset the taskDescription state to an empty string
    setTaskDescription('');
  };

  // Render the AddTask component
  return (
    <div className="add-task-container">
      {/* Input field for entering task description */}
      <input
        id="taskInput"
        type="text"
        placeholder="Enter task description"
        value={taskDescription}
        onChange={handleInputChange}
        className="task-input"
        required
      />
      
      {/* Button for adding a task */}
      <button onClick={handleAddTask} className="add-task-button">
        Add Task
      </button>
    </div>
  );
};

export default AddTask;
