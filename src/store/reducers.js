// Initial state for the Redux store
const initialState = {
  tasks: [],
  filter: 'all',
};

// Reducer for managing the tasks state
const tasksReducer = (state = initialState.tasks, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      // Add a new task to the state
      return [
        ...state,
        {
          id: action.payload.id,
          description: action.payload.description,
          isDone: false,
        },
      ];
    case 'TOGGLE_TASK':
      // Toggle the isDone property of a task
      return state.map((task) =>
        task.id === action.payload ? { ...task, isDone: !task.isDone } : task
      );
    case 'EDIT_TASK':
      // Edit the description of a task
      return state.map((task) =>
        task.id === action.payload.taskId
          ? { ...task, description: action.payload.description }
          : task
      );
    default:
      return state;
  }
};

// Reducer for managing the filter state
const filterReducer = (state = initialState.filter, action) => {
  switch (action.type) {
    case 'SET_FILTER':
      // Set the filter value
      return action.payload;
    default:
      return state;
  }
};

// Root reducer combining multiple reducers
const rootReducer = (state = initialState, action) => ({
  tasks: tasksReducer(state.tasks, action),
  filter: filterReducer(state.filter, action),
});

export default rootReducer;
