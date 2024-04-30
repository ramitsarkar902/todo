import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, toggleTodo } from '../features/todosSlice';
import TodoItem from './TodoItem';

function TodoApp() {
  const [input, setInput] = useState('');
  const [search, setSearch] = useState('');
  const todos = useSelector((state) => state.todos);
  const [initialLoad, setInitialLoad] = useState(true);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (input) {
      dispatch(addTodo(input));
      setInput('');
      setInitialLoad(false);
    }
  };

  const handleSearch = () => {
    setSearch(input);
  };

  const visibleTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="TodoApp-container">
      <h1 className="TodoApp-header">Dashboard - To-Do List</h1>
      <div className="TodoApp-search">
        <input
          className="TodoApp-search-input"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search tasks"
        />
        <button className="TodoApp-search-button" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="TodoApp-inputs">
        <input
          className="TodoApp-input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add new task"
        />
        <button className="TodoApp-button" onClick={handleAddTodo}>
          Add Task
        </button>
      </div>

      <div className="TodoApp-todos">
        {visibleTodos.length > 0 ? (
          visibleTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onDelete={() => dispatch(deleteTodo(todo.id))}
              onToggle={() => dispatch(toggleTodo(todo.id))}
            />
          ))
        ) : (
          <p className="TodoApp-no-match">
            {initialLoad ? 'Add an item' : 'No match'}
          </p>
        )}
      </div>
    </div>
  );
}

export default TodoApp;
