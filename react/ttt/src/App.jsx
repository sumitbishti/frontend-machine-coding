import { useState } from "react";
import "./App.css";

const EMPTY = "";
const PLAYER_X = "X";
const PLAYER_O = "O";

const checkWinner = (board) => {
	const winningCombos = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8], // Rows
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8], // Columns
		[0, 4, 8],
		[2, 4, 6], // Diagonals
	];

	for (const combo of winningCombos) {
		const [a, b, c] = combo;
		if (board[a] && board[a] === board[b] && board[a] === board[c]) {
			return board[a];
		}
	}

	return board.includes(EMPTY) ? null : "Draw";
};

const App = () => {
	const [board, setBoard] = useState(Array(9).fill(EMPTY));
	const [currentPlayer, setCurrentPlayer] = useState(PLAYER_X);
	const [winner, setWinner] = useState(null);

	const handleCellClick = (index) => {
		if (winner || board[index] !== EMPTY) return;

		const newBoard = [...board];
		newBoard[index] = currentPlayer;
		setBoard(newBoard);

		const gameWinner = checkWinner(newBoard);
		if (gameWinner) {
			setWinner(gameWinner);
		} else {
			setCurrentPlayer(currentPlayer === PLAYER_X ? PLAYER_O : PLAYER_X);
		}
	};

	const handleRestart = () => {
		setBoard(Array(9).fill(EMPTY));
		setCurrentPlayer(PLAYER_X);
		setWinner(null);
	};

	return (
		<div className="app">
			<h1>Tic Tac Toe</h1>
			<div className="board">
				{board.map((cell, index) => (
					<div
						key={index}
						className={`cell ${cell}`}
						onClick={() => handleCellClick(index)}
					>
						{cell}
					</div>
				))}
			</div>
			{winner && (
				<div className="message">
					{winner === "Draw" ? "It's a draw!" : `Player ${winner} wins!`}
					<button onClick={handleRestart}>Restart</button>
				</div>
			)}
		</div>
	);
};

export default App;
