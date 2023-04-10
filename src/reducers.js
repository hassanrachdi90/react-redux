import { ADD_TODO, TOGGLE_TODO, FILTER_TASKS, EDIT_TODO } from './actions';

const initialState = {
  todos: [],
  filter: 'all'
};
//todoReducer is a Redux reducer function that handles various actions related to managing todos.
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: action.payload.id, description: action.payload.description, isDone: false }
        ]
      }; //For the ADD_TODO action, the reducer returns a new state object that includes the existing state spread using the spread operator
      //For the TOGGLE_TODO action, the reducer returns a new state object that includes the existing state spread using the spread operator
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload.id) {
            return { ...todo, isDone: !todo.isDone };
          }
          return todo;
        })
      };
      //For the FILTER_TASKS action, the reducer returns a new state object that includes the existing state spread using the spread operator
    case FILTER_TASKS:
      return { ...state, filter: action.payload.filter };
    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload.id) {
            return { ...todo, description: action.payload.description };
          }
          return todo;
        })
      };//For the EDIT_TODO action, the reducer returns a new state object that includes the existing state spread using the spread operator
    default:
      return state;
  }
};
//If none of the action types match in the switch statement, the reducer returns the current state object unchanged as the default case.
export default todoReducer;