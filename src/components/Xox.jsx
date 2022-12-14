import React, { useState } from "react";
import Square from "./Square";
import EndGame from "./EndGame";

const INITIAL = "";
const X_PLAYER = "X";
const O_PLAYER = "O";
const winCombination = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function Xox() {
  const [grid, setGrid] = useState(Array(9).fill(INITIAL));
  const [player, setPlayer] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const [draw, setDraw] = useState(false);
  const [winCount, setWinCount] = useState({ X: 0, O: 0 });

  function isGameOver() {
    if (!gameFinished) {
      // X PLAYER WIN CHECK
      for (let i = 0; i < 8; i++) {
        if (
          grid[winCombination[i][0]] === X_PLAYER &&
          grid[winCombination[i][1]] === X_PLAYER &&
          grid[winCombination[i][2]] === X_PLAYER
        ) {
          setGameFinished(true);
          setWinCount({ ...winCount, X: winCount.X + 1 });
          return;
        }
      }

      // O PLAYER WIN CHECK
      for (let i = 0; i < 8; i++) {
        if (
          grid[winCombination[i][0]] === O_PLAYER &&
          grid[winCombination[i][1]] === O_PLAYER &&
          grid[winCombination[i][2]] === O_PLAYER
        ) {
          setGameFinished(true);
          setWinCount({ ...winCount, O: winCount.O + 1 });
          return;
        }
      }

      // DRAW CHECK
      if (!grid.includes(INITIAL)) {
        setDraw(true);
        setGameFinished(true);
      }
    }
  }

  function restartGame() {
    setGrid(Array(9).fill(INITIAL));
    setGameFinished(false);
    setDraw(false);
  }

  function clearHistory() {
    setWinCount({ X: 0, O: 0 });
    restartGame();
  }

  isGameOver();

  function handleClick(id) {
    setGrid(
      grid.map((item, index) => {
        if (index === id) {
          if (player) {
            return O_PLAYER;
          } else {
            return X_PLAYER;
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
      <div className="win-history2">
        X's Wins: {winCount.X}
        <br />
        O's Wins: {winCount.O}
      </div>
      {gameFinished && (
        <EndGame
          restartGame={restartGame}
          player={player}
          draw={draw}
          winCount={winCount}
          clearHistory={clearHistory}
        />
      )}
      <Square clickedArray={grid} handleClick={handleClick} />
    </div>
  );
}

export default Xox;
