Todo App
This is a Todo application built with React and Redux. It allows users to manage their tasks.

Features
Add tasks with descriptions
Toggle task completion status
Edit task descriptions
View a list of tasks
Set a filter for displaying tasks
Redux Store
The Redux store is used to manage the state of the Todo app. It includes the following reducers:

tasksReducer: Manages the state for the tasks in the Todo app
filterReducer: Manages the state for the filter in the Todo app
Rendering the Application
To render the Todo app, follow these steps:

Import the necessary dependencies:

React
ReactDOM
Provider from react-redux
store from ./store/store
App from ./App
Wrap the App component with the Provider component from react-redux. Pass the Redux store as a prop to the Provider component.

Use the ReactDOM.render() function to render the wrapped App component. Provide the root element in the HTML document where the app will be rendered (e.g., document.getElementById('root')).

Enjoy using the Todo app!