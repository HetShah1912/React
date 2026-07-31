import { useEffect, useState } from "react";
import Het from "./Het";

function App() {
  const userName = "Shah";
  return (
    <>
      <h1>Hello {userName/*evaluated expressions*/ }</h1>
      <Het></Het>
    </>
  );
}
export default App;
