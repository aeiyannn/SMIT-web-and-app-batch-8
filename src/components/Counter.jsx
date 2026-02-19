import { useState } from "react";
export default function Counter() {
    const [count,setCount] = useState(0)
 function AddCounter(){
    setCount(count +1)
 }
 
    return (
    <>
      <div style={{ fontSize: "50px", textAlign: "center" }}>Counter {count}</div>
      <div style={{textAlign:"center"}}>
      <button
      onClick={AddCounter}
        style={{
          fontSize: "30px",
          padding: "8px 30px",
          backgroundColor: "green",
          borderRadius: "10px",
          color: "white",
        }}
      >
        Add
      </button>
      </div>
    </>
  );
}
