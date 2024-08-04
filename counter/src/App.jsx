import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);

  const addValue = () => {
    if (count < 20) {
      setCount(count + 1);
    } else {
      alert("Counter cannot go above 20");
    }
  };

  const removeValue = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("Counter cannot go below 0");
    }
  };

  return (
    <>
      <h1>Counter Project</h1>
      <div class="container">
        <button class="buttons" id=" remove" onClick={removeValue}>
          -
        </button>
        <h2>{count}</h2>
        <button class="buttons" id="add" onClick={addValue}>
          +
        </button>
      </div>
    </>
  );
}

export default App;
