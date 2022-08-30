import React from "react";

function EndGame({ restartGame }) {
  return (
    <div>
      <button className="btn" onClick={restartGame}>
        RESTART GAME
      </button>
    </div>
  );
}

export default EndGame;
