import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoReducer from './reducers';
import AddTask from './AddTask';
import ListTask from './ListTask';

const store = createStore(todoReducer);

const App = () => {
  return (
    <Provider store={store}>
      <div style={{ textAlign: 'center', marginTop: '50px' }}> {/* Inline style for outer div */}
        <h1 style={{ color: 'blue' }}>ToDo App</h1> {/* Inline style for h1 element */}
        <AddTask />
        <ListTask />
      </div>
    </Provider>
  );
};

export default App;
