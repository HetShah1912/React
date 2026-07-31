import { useState } from "react";
import "./App.css";
import Card from "./Components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="h-screen w-screen flex flex-row justify-center items-center gap-5">
        <Card text="Het" obj={{ name: "GM" }} arr={[4, 5, 6]} btnText="Click Me"/>
        <Card text="Shah" obj={{ name: "Hello" }} arr={[1, 2, 3]} />

        {/* <Card text="Het"></Card> */}
      </div>
    </>
  );
}

export default App;
