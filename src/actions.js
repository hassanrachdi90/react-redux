export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const FILTER_TASKS = 'FILTER_TASKS';
export const EDIT_TODO = 'EDIT_TODO';

export const addTodo = (id, description) => ({
  type: ADD_TODO,
  payload: { id, description }
}); //addTodo is an action creator function that returns an action object with the type ADD_TODO and a payload object containing the id and description of the todo item to be added.

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id }
});//toggleTodo is an action creator function that returns an action object with the type TOGGLE_TODO and a payload object containing the id of the todo item to be toggled.

export const filterTasks = (filter) => ({
  type: FILTER_TASKS,
  payload: { filter }
});//filterTasks is an action creator function that returns an action object with the type FILTER_TASKS and a payload object containing the filter value to be applied for filtering tasks.

export const editTodo = (id, description) => ({
  type: EDIT_TODO,
  payload: { id, description }
});//editTodo is an action creator function that returns an action object with the type EDIT_TODO and a payload object containing the id and description of the todo item to be edited.