import Square from "./Square";
import React from 'react'


const Board = ({squares, onClick}) => {
  return (
    <div className="board">
      {squares.map((square, index) => (
        <Square key={index}
         value={square}
          onClick={() => onClick(index)}/>
      ))}
    </div>
  )
}

export default Board

