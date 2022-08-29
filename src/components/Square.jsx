import React from "react";

function Square({ clickedArray }) {
  return (
    <div className="board">
      {clickedArray.map((item, index) => {
        return <div key={index} className="square"></div>;
      })}
    </div>
  );
}

export default Square;
