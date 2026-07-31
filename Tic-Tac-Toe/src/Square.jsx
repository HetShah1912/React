import React, { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <button
      className="h-13 w-13 border-2 flex justify-center items-center rounded-2xl bg-amber-300 text-cyan-950 border-amber-950"
      onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default Square;
