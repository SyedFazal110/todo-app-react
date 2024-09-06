import { useState, useRef } from 'react';
import './App.css';

function App() {
  const [todo, setTodo] = useState([]);
  const inputValue = useRef();

  const addTodo = (event) => {
    event.preventDefault();
    const newTodo = inputValue.current.value;
    if (newTodo) {
      setTodo([...todo, newTodo]); // Properly updating the state
      inputValue.current.value = ''; // Clear the input field
    } else {
      alert('Please enter a todo');
    }
  };

  const deleteTodo = (i) => {
    setTodo(todo.filter((_, index) => index !== i));
  };

  const editTodo = (i) => {
    const editTodoValue = prompt('Enter new value', todo[i]);
    if (editTodoValue !== null) {
      setTodo(todo.map((item, index) => (index === i ? editTodoValue : item)));
    }
  };

  return (
    <div className="container">
      <form onSubmit={addTodo} className="todo-form">
        <input
          type="text"
          placeholder="Add a todo"
          ref={inputValue}
          className="todo-input"
        />
        <button type="submit" className="todo-button">
          Add
        </button>
      </form>
      <ul className="todo-list">
        {todo.map((item, index) => (
          <li key={index} className="todo-item">
            {item}
            <div className="todo-actions">
              <button onClick={() => editTodo(index)} className="action-button edit-button">
                Edit
              </button>
              <button onClick={() => deleteTodo(index)} className="action-button delete-button">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
