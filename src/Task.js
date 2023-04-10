import React, { useState } from 'react';
import { connect } from 'react-redux';
import { toggleTodo, editTodo } from './actions';

const Task = ({ todo, toggleTodo, editTodo }) => {
  const [editing, setEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(todo.description);

  const handleToggle = () => {
    toggleTodo(todo.id);
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleInputChange = (e) => {
    setEditedDescription(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (editedDescription.trim() !== '') {
      editTodo(todo.id, editedDescription);
      setEditing(false);
    }
  };

  const handleCancelEdit = () => {
    setEditing(false);
    setEditedDescription(todo.description);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={todo.isDone}
        onChange={handleToggle}
        style={{ marginRight: '10px' }} // Inline style for checkbox input element
      />
      {!editing ? (
        <>
          <span>{todo.description}</span>
          <button onClick={handleEdit} style={{ marginLeft: '10px' }}>Edit</button> {/* Inline style for Edit button */}
        </>
      ) : (
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            value={editedDescription}
            onChange={handleInputChange}
            style={{ marginRight: '10px' }} // Inline style for text input element
          />
          <button type="submit" style={{ marginRight: '10px' }}>Save</button> {/* Inline style for Save button */}
          <button type="button" onClick={handleCancelEdit}>Cancel</button> {/* Inline style for Cancel button */}
        </form>
      )}
    </div>
  );
};

export default connect(null, { toggleTodo, editTodo })(Task);
