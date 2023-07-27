let table = document.getElementById('table')


for (let r = 0; r < 8; r++) {
    let tr = document.createElement('tr')

    for (let c = 0; c < 8; c++) {
        let td = document.createElement('td')
        td.setAttribute("class", "box")
        td.setAttribute("data-index", `${r}-${c}`)

        if ((r + c) % 2 == 0) {
            td.setAttribute("class", "black")
        }
        tr.appendChild(td)
    }
    table.appendChild(tr)
}

const findTopLeft = (row, col, hash) => {
    for (let r = row, c = col; r >= 0 && c >= 0; r--, c--) {
        let str = `${r}-${c}`
        hash[str] = true
    }
    return hash
}
const findTopRight = (row, col, hash) => {
    for (let r = row, c = col; r >= 0 && c < 8; r--, c++) {
        let str = `${r}-${c}`
        hash[str] = true
    }
    return hash
}
const findBottomLeft = (row, col, hash) => {
    for (let r = row, c = col; r < 8 && c >= 0; r++, c--) {
        let str = `${r}-${c}`
        hash[str] = true
    }
    return hash
}
const findBottomRight = (row, col, hash) => {
    for (let r = row, c = col; r < 8 && c < 8; r++, c++) {
        let str = `${r}-${c}`
        hash[str] = true
    }
    return hash
}

table.addEventListener("mouseover", (e) => {
    let coordinates = e.target.dataset.index.split('-').map(val => parseInt(val))
    let row = coordinates[0], col = coordinates[1]

    let hash = {}
    let str = `${row}-${col}`
    hash[str] = true;

    hash = findTopLeft(row, col, hash)
    hash = findTopRight(row, col, hash)
    hash = findBottomLeft(row, col, hash)
    hash = findBottomRight(row, col, hash)

    let cells = document.querySelectorAll('td')
    let blueCells = document.querySelectorAll('.blue')

    blueCells.forEach(cell => {
        cell.classList.remove("blue")
    });

    for (let i = 0; i < cells.length; i++) {
        str = `${cells[i].closest('tr').rowIndex}-${cells[i].cellIndex}`
        if (hash[str]) {
            cells[i].classList.add('blue')
        }
    }
})

table.addEventListener("mouseleave", () => {
    let blueCells = document.querySelectorAll('.blue')

    blueCells.forEach(cell => {
        cell.classList.remove("blue")
    });
})