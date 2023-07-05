import { useState } from 'react';

function AddTodo({ onAdd }) {
  const [todo, setTodo] = useState('');

  return (
    <>
      <input value={todo} onChange={(e) => setTodo(e.target.value)} placeHolder="Add Todo" />
      <button
        onClick={() => {
          onAdd(todo);
          setTodo('');
        }}
      >
        Add
      </button>
    </>
  );
}

export default AddTodo;
