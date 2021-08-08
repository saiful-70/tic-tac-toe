import React from "react";
import Board from "./Board";
import { useState } from "react";
import calculateWinner from "../calculateWinner";
import { ButtonRestart, ButtonReset } from "./ButtonRes";

//squares icon
import { GiCrossMark } from "react-icons/gi";
import { BiCircle } from "react-icons/bi";

//logo
import logo from "../images/logo.png";

//store score for game
const score = {
  player1: 0,
  player2: 0,
};

const Game = () => {
  const [player1, setPlayer1] = useState("player_1");
  const [player2, setPlayer2] = useState("player_2");
  const [data, setData] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(data);
  const xOrO = xIsNext ? "X" : "O";

  //winner selection and rendering
  if (winner === "X") {
    console.log(winner);
    score["player1"]++;
    localStorage.setItem("player1", Math.ceil(score["player1"]));
  } else if (winner === "O") {
    score["player2"]++;
    localStorage.setItem("player2", Math.ceil(score["player2"]));
  }

  // restart button
  const handleRestart = () => {
    setData(Array(9).fill(null));
    setXIsNext(true);
  };

  // reset button
  const handleReset = () => {
    setData(Array(9).fill(null));
    setXIsNext(true);
    score["player1"] = 0;
    score["player2"] = 0;
    localStorage.removeItem("player1");
    localStorage.removeItem("player2");
  };

  //Clicking the square
  const handleClick = (index) => {
    const squares = [...data];

    if (winner || squares[index]) return;

    squares[index] = xOrO;

    setData(squares);
    setXIsNext(!xIsNext);
  };

  return (
    <div className="game">
      {/* logo */}
      <img className="logo" src={logo} alt="tic-tac-toe-logo" />
      {/* title */}
      <h2 className="heading">Tic Tac Toe</h2>

      {/* winner name */}
      <h2 className="drawn">
        {!data.includes(null) && !winner ? `It's drawn` : null}
      </h2>

      {/* player and playing info area with playground */}
      <div className="player">
        <div className="player__info">
          <GiCrossMark className="icon icon--player" />
          <input
            type="text"
            className={xIsNext ? "player__name active" : "player__name"}
            value={player1}
            onChange={(e) => setPlayer1(e.target.value)}
          />
          <h3 className="player__score">
            Score : {localStorage.getItem("player1")}
          </h3>
          <h3 className="winner-name">{winner === "X" ? "Winner!" : null}</h3>
        </div>

        {/* Game board */}
        <Board squares={data} onClick={handleClick}></Board>

        <div className="player__info">
          <BiCircle className="icon icon--player" />
          <input
            type="text"
            className={!xIsNext ? "player__name active" : "player__name"}
            value={player2}
            onChange={(e) => setPlayer2(e.target.value)}
          />
          <h3 className="player__score">
            Score : {localStorage.getItem("player2")}
          </h3>
          <h3 className="winner-name">{winner === "O" ? "Winner!" : null}</h3>
        </div>
      </div>

      {/* buttone restart and reset */}
      <ButtonRestart handleRestart={handleRestart} />
      <ButtonReset handleReset={handleReset} />

      <footer className="footer">
        Created by &copy; <a href="https://github.com/saiful-70" style={{color: "white", borderBottom: "1px solid #fff", textDecoration: "none"}}>Saiful Islam</a> , {new Date().getFullYear()}
      </footer>
    </div>
  );
};

export default Game;
