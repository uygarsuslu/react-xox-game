import React, { useState } from "react";
import Square from "./Square";

const INITIAL = "";
const X_PLAYER = "X";
const O_PLAYER = "O";

function Xox() {
  const [grid, setGrid] = useState(Array(9).fill(INITIAL));

  return (
    <div>
      <Square clickedArray={grid} />
    </div>
  );
}

export default Xox;
