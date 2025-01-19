import React, { useState, useEffect } from "react";
import { generateWinningPatterns } from "../utils.js/winningPattern";

const TicTaeToe = ({ count = 3 }) => {
  const [winningPattern, setWinningPattern] = useState(
    generateWinningPatterns(count)
  );
  const [isXTerm, setIsXterm] = useState(true);
  const [board, setBoard] = useState([]);
  const [winner, setWinner] = useState(null); // State to track the winner

  useEffect(() => {
    setBoard(Array(count * count).fill(null));
    setWinningPattern(generateWinningPatterns(count));
    setWinner(null); // Reset winner when count changes
    setIsXterm(true);
  }, [count]);

  // Function to check the winner
  const checkWinner = (board, winningPatterns) => {
    for (const pattern of winningPatterns) {
      const [first, ...rest] = pattern;
      if (
        board[first] &&
        rest.every((index) => board[index] === board[first])
      ) {
        return board[first]; // Return "X" or "O" as the winner
      }
    }
    return null; // No winner yet
  };

  const handleClick = (index) => {
    const winner = checkWinner(board, winningPattern);
    if (board[index] !== null || winner) return; // Ignore if cell is filled or winner is already declared

    const newBoard = [...board];
    newBoard[index] = isXTerm ? "X" : "O";
    setBoard(newBoard);
    setIsXterm(!isXTerm);
  };
  const getMessage = () => {
    const newWinner = checkWinner(board, winningPattern);
    if (newWinner) {
      return `${newWinner} wins!`; // Alert the winner
    } else if (!board.includes(null)) {
      return "It's a Draw!";
    } else {
      return isXTerm ? "it is X's turn" : "it is O's turn";
    }
  };
  const handleReset = () => {
    setBoard(Array(count * count).fill(null));
    setWinner(null);
    setIsXterm(true);
  };
  return (
    <div>
      <div className="flex justify-between items-center mx-2 px-2 mt-4">
        <h1 className="mb-2  text-white text-[20px]">{getMessage()}</h1>
        <button
          className="mb-2 px-2 h-8 border border-black bg-gray-300 rounded-xl"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
      <div
        className="grid gap-0"
        style={{
          gridTemplateColumns: `repeat(${count}, 1fr)`,
          width: `${count * 80}px`, // Dynamically set grid width
          height: `${count * 80}px`, // Dynamically set grid height
          minWidth: "300px", // Prevent shrinking too much
          minHeight: "300px", // Ensure the grid has a minimum size
        }}
      >
        {board.map((item, index) => (
          <button
            disabled={item != null || winner != null} // Disable if cell is filled or winner exists
            onClick={() => handleClick(index)}
            key={index}
            className="w-full h-full bg-slate-200 flex justify-center items-center border border-blue-50"
          >
            {item || ""}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TicTaeToe;
