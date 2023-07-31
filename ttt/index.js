let board = document.querySelector('.board')
let cursor = document.querySelector('.cursor')
let cells = document.querySelectorAll('.cell')
let resetBtn = document.querySelector('.resetBtn')
let result = document.querySelector('.result')
let gameBoard = ["", "", "", "", "", "", "", "", ""]
let winningCombo = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [2, 4, 6], [0, 4, 8]]
let player = "X"

board.addEventListener("click", (e) => {
    let index = e.target.dataset.index

    if (!index || gameBoard[index]) return;

    gameBoard[index] = player
    e.target.textContent = player

    if (checkWin()) {
        result.textContent = `Player ${player} won the game.`
        board.style.pointerEvents = "none"
        cursor.style.cursor = "not-allowed"
    }
    else if (checkDraw()) {
        result.textContent = `Match Draw!!!`
        board.style.pointerEvents = "none"
        cursor.style.cursor = "not-allowed"
    }

    player = player === "X" ? "O" : "X"
})

const checkWin = () => {
    for (const combo of winningCombo) {
        const [a, b, c] = combo

        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            return true;
        }
    }
}

const checkDraw = () => {
    return gameBoard.every(cell => cell !== "")
}

resetBtn.addEventListener("click", () => {
    gameBoard = ["", "", "", "", "", "", "", "", ""]
    player = "X"

    cells.forEach((cell) => {
        cell.textContent = ""
    })

    board.style.pointerEvents = "auto"
    cursor.style.cursor = "pointer"
})






























// // Wait for the DOM to load before attaching event listeners
// document.addEventListener("DOMContentLoaded", () => {
//     const board = document.querySelector(".board");
//     const cells = document.querySelectorAll(".cell");
//     let currentPlayer = "X";
//     let gameBoard = ["", "", "", "", "", "", "", "", ""];

//     function checkWinner() {
//         const winningCombos = [
//             [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
//             [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
//             [0, 4, 8], [2, 4, 6] // Diagonals
//         ];

//         for (const combo of winningCombos) {
//             const [a, b, c] = combo;
//             if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
//                 return true;
//             }
//         }
//         return false;
//     }

//     function checkDraw() {
//         return gameBoard.every(cell => cell !== "");
//     }

//     function handleCellClick(event) {
//         if(!event.target.dataset.index) return ;

//         const cell = event.target;
//         const index = cell.getAttribute("data-index");

//         if (gameBoard[index] === "") {
//             gameBoard[index] = currentPlayer;
//             cell.textContent = currentPlayer;

//             if (checkWinner()) {
//                 setTimeout(() => {
//                     alert(`Player ${currentPlayer} wins!`);
//                     resetGame();
//                 }, 100);
//             } else if (checkDraw()) {
//                 setTimeout(() => {
//                     alert("It's a draw!");
//                     resetGame();
//                 }, 100);
//             } else {
//                 currentPlayer = currentPlayer === "X" ? "O" : "X";
//             }
//         }
//     }

//     function resetGame() {
//         gameBoard = ["", "", "", "", "", "", "", "", ""];
//         currentPlayer = "X";
//         cells.forEach(cell => cell.textContent = "");
//     }

//     board.addEventListener("click", handleCellClick)
//     // cells.forEach(cell => cell.addEventListener("click", handleCellClick));
// });
