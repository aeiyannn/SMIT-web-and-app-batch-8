import { useState } from "react";
export default function Todo() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([
    {
      value: "Mango",
      isCompleted: false,
    },
    {
      value: "Meat",
      isCompleted: false,
    },
     {
      value: "Mango",
      isCompleted: false,
    },
  ]);
  //
  function AddTodo() {
    console.log(todo)
    console.log(input);
  }

  function OnTyping(e) {
    console.log("Typing", e.target.value);
    setInput(e.target.value);
  }
  return (
    <div className="container">
      <h1>Todo App</h1>
      <div className="todo-input">
        <input onChange={OnTyping} type="text" />
        <button onClick={AddTodo}>Add+</button>
      </div>
      <ul className="todo-list">
        {
           todo.map((v,i)=>{
        return (
            <li>Hello</li>
        )
           }) 
        }
      </ul>
    </div>
  );
}
