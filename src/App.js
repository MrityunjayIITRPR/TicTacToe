import { useState } from "react";
import TicTacToe from "./components/TicTacToe";
import "./index.css";

function App() {
  const [count, setCount] = useState(3); // Default to 3x3 grid
  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value >= 3) {
      setCount(Number(value));
    }
  };
  return (
    <div className="flex flex-col items-center h-screen bg-slate-500">
      <h1 className="text-center mt-6 text-[24px] font-bold">Tic Tac Toe</h1>
      <input
        className="mt-4 p-2 border border-black rounded-xl"
        type="number"
        value={count}
        onChange={handleInputChange}
      />
      <div className="flex justify-center w-full">
        <TicTacToe count={count} />
      </div>
    </div>
  );
}

export default App;
