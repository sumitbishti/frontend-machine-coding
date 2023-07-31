let table = document.getElementById('table')
let resetBtn = document.getElementById('resetBtn')
let result = document.getElementById('result')
let cursor = document.getElementById('cursor')

let cross = true;
let hash = {};
let allFilled = 0;

for (let i = 0; i < 3; i++) {
    let tr = document.createElement('tr')

    for (let j = 0; j < 3; j++) {
        let td = document.createElement('td')
        td.setAttribute("data-index", `${i}-${j}`)

        if ((i + j) % 2) td.setAttribute("class", "black")
        else td.setAttribute("class", "red")

        tr.appendChild(td)
    }
    table.appendChild(tr)
}

table.addEventListener("click", (e) => {
    let indexStr = e.target.dataset.index
    if (hash[indexStr] || !indexStr) return

    hash[indexStr] = cross ? "X" : 'O';
    allFilled++;

    e.target.classList.add(cross ? "cross" : "zero")
    cross = !cross

    let res = checkWin()
    if (allFilled === 9 || res.includes('Won')) {
        result.innerHTML = res
        table.style.pointerEvents = "none"
        cursor.style.cursor = "not-allowed"

    }
})

const checkWin = () => {
    //row
    for (let i = 0; i < 3; i++) {
        let set = new Set();
        let player = ""
        for (let j = 0; j < 3; j++) {
            let str = `${i}-${j}`
            player = hash[str]
            set.add(player)
        }

        if (set.size === 1 && player) {
            return `Player ${player} has Won!`
        }
    }

    //column
    for (let i = 0; i < 3; i++) {
        let set = new Set();
        let player = ""
        for (let j = 0; j < 3; j++) {
            let str = `${j}-${i}`
            player = hash[str]
            set.add(player) 
        }

        if (set.size === 1 && player) {
            return `Player ${player} has Won!`
        }
    }

    //diagonal
    let i = 0, player = "";
    let set = new Set()
    while (i < 3) {
        let str = `${i}-${i}`
        player = hash[str];
        set.add(player)
        i++;
    }
    if (set.size === 1 && player) {
        return `Player ${player} has Won!`
    }

    //anti-diagonal
    i = 0, player = "";
    set.clear();
    let n = 2;
    while (i < 3) {
        let str = `${i}-${n - i}`
        player = hash[str];
        set.add(player)
        i++;
    }
    if (set.size === 1 && player) {
        return `Player ${player} has Won!`
    }
    return 'Match Draw!!!'
}

resetBtn.addEventListener("click", () => {
    let crossCells = document.querySelectorAll(".cross")
    let zeroCells = document.querySelectorAll(".zero")

    crossCells.forEach((cell) => {
        cell.classList.remove("cross")
    })
    zeroCells.forEach((cell) => {
        cell.classList.remove("zero")
    })

    hash = {}
    cross = true
    allFilled = 0
    table.style.pointerEvents = "auto"
    cursor.style.cursor = "pointer"
})