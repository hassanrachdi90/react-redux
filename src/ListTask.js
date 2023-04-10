import React from 'react';
import { connect } from 'react-redux';
import Task from './Task';
import { filterTasks } from './actions';

const ListTask = ({ todos, filter, filterTasks }) => {
  const handleFilterChange = (e) => {
    filterTasks(e.target.value);
  };

  const filteredTodos = filter === 'all'
    ? todos
    : filter === 'done'
      ? todos.filter(todo => todo.isDone)
      : todos.filter(todo => !todo.isDone);

  return (
    <div style={{ margin: '10px' }}> {/* Inline style for outer div */}
      <div>
        <label>
          Filter Tasks:
          <select value={filter} onChange={handleFilterChange} style={{ marginLeft: '10px' }}> {/* Inline style for select element */}
            <option value="all">All</option>
            <option value="done">Done</option>
            <option value="not-done">Not Done</option>
          </select>
        </label>
      </div>
      <div style={{ marginTop: '10px', paddingLeft: '20px' }}> {/* Inline style for ul element */}
        {filteredTodos.map(todo => (
          <Task key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  todos: state.todos,
  filter: state.filter
});

export default connect(mapStateToProps, { filterTasks })(ListTask);
