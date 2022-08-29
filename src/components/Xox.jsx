import React, { useState } from "react";
import Square from "./Square";

const INITIAL = "";
const X_PLAYER = "X";
const O_PLAYER = "O";

function Xox() {
  const [grid, setGrid] = useState(Array(9).fill(INITIAL));
  const [player, setPlayer] = useState(false);

  function handleClick(id) {
    console.log("inside handleClick");
    setGrid(
      grid.map((item, index) => {
        if (index === id) {
          if (player) {
            return X_PLAYER;
          } else {
            return O_PLAYER;
          }
        } else {
          return item;
        }
      })
    );
    setPlayer(!player);
  }

  return (
    <div>
      <Square clickedArray={grid} handleClick={handleClick} />
    </div>
  );
}

export default Xox;
