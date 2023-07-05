import { useState } from 'react';

function Todo({ todo, onChangeTodo, onDelete }) {
  const [isEdit, setEdit] = useState(false);
  let textContent;
  if (isEdit) {
    textContent = (
      <>
        <input
          value={todo.title}
          onChange={(e) => onChangeTodo({ ...todo, title: e.target.value })}
        />
        <button onClick={() => setEdit(false)}>save</button>
      </>
    );
  } else {
    textContent = (
      <>
        {todo.title}
        <button onClick={() => setEdit(true)}>Edit</button>
      </>
    );
  }

  return (
    <>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={(e) => onChangeTodo({ ...todo, done: e.target.checked })}
      />
      {textContent}
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </>
  );
}

export default Todo;
