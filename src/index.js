import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './App';

// Render the React application
ReactDOM.render(
  // Wrap the App component with the Provider component from react-redux
  <Provider store={store}>
    {/* Render the App component */}
    <App />
  </Provider>,
  document.getElementById('root')
);
