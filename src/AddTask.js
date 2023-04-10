import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from './actions';

const AddTask = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };//AddTask is a functional component that represents a form for adding new tasks

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      const id = new Date().getTime();
      addTodo(id, inputValue);
      setInputValue('');
    }
  };//The handleFormSubmit function is a callback function that is called when the form is submitted. It prevents the default form submission behavior using e.preventDefault() to prevent the page from refreshing

  return (
    <form onSubmit={handleFormSubmit} style={{ marginBottom: '10px' }}> {/* Inline style for form element */}
      <input
        type="text"
        placeholder="Add task..."
        value={inputValue}
        onChange={handleInputChange}
        style={{ marginRight: '10px' }} // Inline style for input element
      />
      <button type="submit" style={{ padding: '5px 10px' }}>Add</button> {/* Inline style for submit button */}
    </form>
  );
};

export default connect(null, { addTodo })(AddTask);
