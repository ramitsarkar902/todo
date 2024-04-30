
import React from 'react';

function TodoItem({ todo, onDelete, onToggle }) {
  return (
    <div style={{ backgroundColor: todo.done ? 'green' : 'white' }}>
      <p>{todo.text}</p>
      <button onClick={onToggle}>{todo.done ? 'Undo' : 'Mark as Done'}</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default TodoItem;
