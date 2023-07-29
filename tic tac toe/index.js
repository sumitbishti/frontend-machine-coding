let table = document.getElementById('table')
let tableWrapper = document.getElementById('table-wrapper')
let resetBtn = document.getElementById('resetBtn')
let result = document.getElementById('result')
let hash = {}
let cross = true;
let allFilled = 0;


for (let i = 0; i < 3; i++) {
    let tr = document.createElement('tr')

    for (let j = 0; j < 3; j++) {
        let td = document.createElement('td')
        td.setAttribute("data-index", `${i}-${j}`)

        if ((i + j) % 2 == 0) {
            td.setAttribute('class', "red")
        }
        else {
            td.setAttribute('class', "black")
        }

        tr.appendChild(td)
    }
    table.appendChild(tr)
}

const check = () => {

    //row
    for (let i = 0; i < 3; i++) {
        let set = new Set()
        let player = ""

        for (let j = 0; j < 3; j++) {
            let key = `${i}-${j}`
            player = hash[key]
            set.add(player)
        }

        if (set.size === 1 && player) {
            return `Player '${player}' has Won!`
        }
    }

    //col
    for (let i = 0; i < 3; i++) {
        let set = new Set()
        let player = ""

        for (let j = 0; j < 3; j++) {
            let key = `${j}-${i}`
            player = hash[key]
            set.add(player)
        }

        if (set.size === 1 && player) {
            return `Player '${player}' has Won!`
        }
    }

    //diagonal
    let i = 0;
    let set = new Set()
    let player = "";

    while (i < 3) {
        let key = `${i}-${i}`
        player = hash[key]
        set.add(player)
        i++;
    }
    if (set.size === 1 && player) {
        return `Player '${player}' has Won!`
    }

    //anti-diagonal
    i = 0;
    let n = 2;
    set.clear()
    player = ""
    while (i < 3) {
        let key = `${i}-${n - i}`
        player = hash[key]
        set.add(player)
        i++;
    }
    if (set.size === 1 && player) {
        return `Player '${player}' has Won!`
    }

    return "Match Draw!!!"
}

table.addEventListener("click", (e) => {
    let str = e.target.dataset.index;
    if (!str || hash[str]) return;

    hash[str] = cross ? "X" : "O";
    allFilled++;

    let cellClass = e.target.classList[0]
    e.target.setAttribute("class", `${cellClass} ${cross ? 'cross' : 'zero'}`)
    cross = !cross

    let res = check()
    if (allFilled === 9 || res.includes('Won')) {
        result.textContent = res
        table.style.pointerEvents = 'none'
        tableWrapper.style.cursor = "not-allowed"
    }
})

resetBtn.addEventListener("click", (e) => {
    let crossCells = document.querySelectorAll('.cross')
    let zeroCells = document.querySelectorAll('.zero')

    crossCells.forEach((cell) => {
        cell.classList.remove('cross')
    })
    zeroCells.forEach((cell) => {
        cell.classList.remove('zero')
    })
    cross = true;
    hash = {}
    allFilled = 0
    result.textContent = ""
    table.style.pointerEvents = "auto"
    tableWrapper.style.cursor = "pointer"
})