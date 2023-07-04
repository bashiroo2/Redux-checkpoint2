// Action creator for adding a task
export const addTask = (task) => ({
  type: 'ADD_TASK',
  payload: task,
});

// Action creator for toggling a task
export const toggleTask = (taskId) => ({
  type: 'TOGGLE_TASK',
  payload: taskId,
});

// Action creator for editing a task
export const editTask = (taskId, description) => ({
  type: 'EDIT_TASK',
  payload: { taskId, description },
});

// Action creator for setting a filter
export const setFilter = (filter) => ({
  type: 'SET_FILTER',
  payload: filter,
});
