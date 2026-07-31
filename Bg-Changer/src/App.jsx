import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">

        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">

          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor : "red"}} onClick={() => setColor("red")}>Red</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor : "green"}} onClick={() => setColor("green")}>Green</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor : "blue"}} onClick={() => setColor("blue")}>Blue</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor : "brown"}} onClick={() => setColor("brown")}>Brown</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor : "orange"}} onClick={() => setColor("orange")}>Orange</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor : "magenta"}} onClick={() => setColor("magenta")}>Magenta</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor : "black"}} onClick={() => setColor("black")}>Black</button>
          <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor : "yellow"}} onClick={() => setColor("yellow")}>Yellow</button>
          <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor : "aqua"}} onClick={() => setColor("aqua")}>Aqua</button>
          <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor : "lime"}} onClick={() => setColor("lime")}>Lime</button>

        </div>
        
      </div>
    </div>
  );
}

export default App;
