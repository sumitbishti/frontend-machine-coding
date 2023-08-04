import { useState } from "react"
import './App.css'

const App = () => {
    const [board, setBoard] = useState(Array(9).fill(""))
    const [player, setPlayer] = useState("X")
    const [winner, setWinner] = useState(null)

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

    const checkWin = () => {
        for (const combo of winningCombos) {
            const [a, b, c] = combo

            if (board[a] && board[a] === board[b] && board[b] === board[c]) {
                return true
            }
        }
    }
    const checkDraw = () => {
        return board.every(cell => cell !== "")
    }

    const handleCellClick = (index) => {
        if (board[index] || winner) return

        board[index] = player

        if (checkWin()) {
            setWinner(`Player ${player} Win`)
        }
        else if (checkDraw()) {
            setWinner("It's a Draw!!")
        }

        setPlayer(player == "X" ? "O" : "X")
    }

    const handleReset = () => {
        const newBoard = Array(9).fill("")
        setBoard(newBoard)
        setWinner(null)
    }

    return (
        <div className="container">
            <h1>TTT</h1>

            <div className={`board ${winner && 'cursor-notallowed'}`}>
                {board.map((cell, index) => {
                    return <div
                        className="cell"
                        onClick={() => handleCellClick(index)}
                        key={index}
                    >
                        {cell}
                    </div>
                })}
            </div>

            <button className={`resetBtn`} onClick={() => handleReset()}>RESET</button>
            {winner && <div>{winner}</div>}
        </div>
    )
}

export default App