import React from 'react';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';
import './styles.css';

// The main component of the application
const App = () => {
  return (
    <div className='all'>
      {/* Render the heading */}
      <h1>To Do</h1>
      
      {/* Render the AddTask component */}
      <AddTask />
      
      {/* Render the ListTask component */}
      <ListTask />
    </div>
  );
};

export default App;
