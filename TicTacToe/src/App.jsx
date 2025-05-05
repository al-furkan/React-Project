import React, { useState } from "react";

export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (index) => {
    if (board[index] || winner) return;
    const newBoard = board.slice();
    newBoard[index] = xIsNext ? "X" : "O";
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  const renderSquare = (index) => (
    <button
      onClick={() => handleClick(index)}
      className="w-24 h-24 flex items-center justify-center border border-white text-3xl font-bold hover:bg-gray-800 text-white bg-black"
    >
      {board[index]}
    </button>
  );

  const restartGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-3xl font-bold mb-6">Tic Tac Toe</h1>
      <div className="grid grid-cols-3 gap-2">
        {board.map((_, index) => renderSquare(index))}
      </div>
      <div className="mt-6 text-xl">
        {winner
          ? `Winner: ${winner}`
          : board.every(Boolean)
          ? "It's a Draw!"
          : `Next Player: ${xIsNext ? "X" : "O"}`}
      </div>
      <button
        onClick={restartGame}
        className="mt-4 px-4 py-2 bg-white text-black rounded hover:bg-gray-300"
      >
        Restart Game
      </button>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
