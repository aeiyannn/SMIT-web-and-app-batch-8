import { useState } from "react";
export default function Todo() {
  const [input, setInput] = useState("lelel");
  const [todo, setTodo] = useState([]);
  const [index, setIndex] = useState();
// edit item ke index ko save bhi karhi hai
// ui per add/update ki condition bhi check karhi hai 

  //
  function AddTodo() {
    const cloneTodo = [...todo];
    cloneTodo.push(input);
    setTodo(cloneTodo);
    setInput("");
    console.log(todo);
  }

  function updateTodo(){
      const cloneTodo = [...todo];
      cloneTodo[index]=input
      setTodo(cloneTodo)
      setIndex("")
      
  }

  function editTodo(index) {
    const cloneTodo = [...todo];
    const value = cloneTodo[index];
    console.log(value);
    setInput(value);
    setIndex(index)
  }
  function OnTyping(e) {
    console.log(e.target.value);
    setInput(e.target.value);
  }
  function deleteTodo(index) {
    const cloneTodo = [...todo];
    cloneTodo.splice(index, 1);
    setTodo(cloneTodo);
  }
  return (
    <div className="container">
      <h1>Todo App</h1>
      <div className="todo-input">
        <input value={input} onChange={OnTyping} type="text" />
        {index ? (
          <button onClick={updateTodo}>update</button>
        ) : (
          <button onClick={AddTodo}>Add+</button>
        )}
      </div>
      <ul className="todo-list">
        {todo.map((v, index) => {
          return (
            <li>
             
              {v} <button onClick={() => deleteTodo(index)}>Delete</button>
              <button onClick={() => editTodo(index)}>Edit</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
