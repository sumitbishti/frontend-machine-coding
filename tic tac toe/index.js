let table = document.getElementById('table')
let resetBtn = document.getElementById('resetBtn')
let hash = {}


for (let i = 0; i < 3; i++) {
    let tr = document.createElement('tr')

    for (let j = 0; j < 3; j++) {
        let td = document.createElement('td')
        td.setAttribute("data-index", `${i}-${j}`)

        if ((i + j) % 2 == 0) {
            td.setAttribute('class', "yellow")
        }
        else {
            td.setAttribute('class', "green")
        }

        tr.appendChild(td)
    }
    table.appendChild(tr)
}

let cross = true;

const check = (cellClass, row, col, dx, dy) => {
    let cells = document.querySelectorAll('td')

    if (dx === 0 || dy === 0) {
        let cnt = 0;
        for (let i = row; i < 3 && i >= 0; i += dx) {
            for (let j = col; j < 3 && j >= 0; j += dy) {

            }
        }
    }
    else {

    }
}

const check2 = () => {
    // let cells = document.querySelectorAll('td')
    // console.log(cells)

}

table.addEventListener("click", (e) => {
    let cellClass = e.target.classList[0]
    e.target.setAttribute("class", `${cellClass} ${cross ? 'cross' : 'zero'}`)
    cross = !cross

    const [row, col] = e.target.dataset.index.split('-').map(val => parseInt(val))
    // if(check(cellClass, row, col, 1, 0)) {}

    for (let i = 0; i < 3; i++) {
        let set = new Set();
        let player = "";
        for (let j = 0; j < 3; j++) {
            let key = `${i}-${j}`;
            set.add(hash[key]);
            player = hash[key];
        }

        console.log(set)

        if (set.size == 1 && player) {
            return `Player ${player} Win`;
        }
    }

    // check2()
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
})