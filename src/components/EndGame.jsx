import React from "react";

function EndGame({ restartGame, player, draw, winCount, clearHistory }) {
  return (
    <div className="end-game-screen">
      {!draw && <span className="win-text">{player ? "X WON" : "O WON"}</span>}
      {draw && <span className="win-text">DRAW</span>}

      <span className="win-history1">
        X's Wins: {winCount.X}
        <br />
        O's Wins: {winCount.O}
      </span>

      <button className="btn" onClick={restartGame}>
        RESTART GAME
      </button>
      <button className="btn" onClick={clearHistory}>
        CLEAR HISTORY
      </button>
    </div>
  );
}

export default EndGame;
