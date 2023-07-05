import { useState } from 'react';
import Todo from './Todo';

function TodoList({ todos, onChangeTodo, onDelete }) {
  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Todo todo={todo} onChangeTodo={onChangeTodo} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
