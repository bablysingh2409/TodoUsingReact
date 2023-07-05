import { useState } from 'react';
import AddTodo from './AddTodo';

const initialTodo = [
  { id: 0, title: 'cow Milk', done: false },
  { id: 1, title: 'eat Tacos', done: false },
  { id: 2, title: 'brew Tea', done: false },
];
let index = 3;

function TodoContainer() {
  const [todo, setTodo] = useState(initialTodo);

  function handleAddTodo(title) {
    setTodo([...todo, { id: index++, title, done: false }]);
  }

  function handleChangeTodo(task) {
    setTodo(
      todo.map((ele) => {
        if (ele.id == task.id) {
          return task;
        } else {
          return ele;
        }
      })
    );
  }

  function handleDeleteTodo(task) {
    setTodo(todo.filter((ele) => ele.id != task.id));
  }

  return <div>{<AddTodo onAdd={handleAddTodo} />}</div>;
}

export default TodoContainer;
