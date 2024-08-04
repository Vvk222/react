import React from "react";
import ReactDOM from "react-dom/client";
import './App.css';

const myArray = ["apple", "banana", "orange"];

const myList = myArray.map((item) => <p>{item}</p>);

function App() {
  return <div className="App">{myList}</div>;
}
export default App;