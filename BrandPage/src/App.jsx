import { useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <Hero />
    </>
  );
}

export default App;
