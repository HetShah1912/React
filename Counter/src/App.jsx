import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    // counter = counter + 1;
    // setCounter(counter + 1);
    // console.log("clicked", counter);
     if (counter >= 20) {
      console.log(counter);
      setCounter(counter);
    } 
    else {
      setCounter(counter + 1);
    }
  };

  const removeValue = () => {
    if (counter <= 0) {
      console.log(counter);
      setCounter(counter);
    } 
    else {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <div>
        <h1>Hello</h1>
        <h2>Counter Value : {counter}</h2>
        <button onClick={addValue}>Add Value : {counter} </button>
        <br />
        <button onClick={removeValue}>Remove Value : {counter}</button>
      </div>
    </>
  );
}

export default App;
