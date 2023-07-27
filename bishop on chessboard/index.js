let table = document.getElementById('table')


for (let r = 0; r < 8; r++) {
    let row = document.createElement('tr')

    for (let c = 0; c < 8; c++) {
        let colCell = document.createElement('td')
        colCell.setAttribute("class", "box")
        colCell.setAttribute("data-index", `${r}-${c}`)


        if ((r + c) % 2 == 0) {
            colCell.setAttribute("class", "black")
        }
        row.appendChild(colCell)
    }

    table.appendChild(row)
}

const findTopLeft = (r, c, hash) => {
    for (let row = r, col = c; row >= 0 && col >= 0; row--, col--) {
        let str = `${row}-${col}`
        hash[str] = true
    }
    return hash
}
const findTopRight = (r, c, hash) => {
    for (let row = r, col = c; row >= 0 && col < 8; row--, col++) {
        let str = `${row}-${col}`
        hash[str] = true
    }
    return hash
}
const findBottomRight = (r, c, hash) => {
    for (let row = r, col = c; row < 8 && col < 8; row++, col++) {
        let str = `${row}-${col}`
        hash[str] = true
    }
    return hash
}
const findBottomLeft = (r, c, hash) => {
    for (let row = r, col = c; row < 8 && col >= 0; row++, col--) {
        let str = `${row}-${col}`
        hash[str] = true
    }
    return hash
}

table.addEventListener("mouseover", (e) => {
    let coordinates = e.target.dataset.index.split("-").map(val => parseInt(val))
    let r = coordinates[0], c = coordinates[1]
    let str = `${r}-${c}`

    let hash = {}
    hash[str] = true;

    hash = findTopLeft(r, c, hash)
    hash = findTopRight(r, c, hash)
    hash = findBottomLeft(r, c, hash)
    hash = findBottomRight(r, c, hash)

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
    const cells = document.querySelectorAll('td')

    cells.forEach((cell) => {
        cell.classList.remove('blue')
    })
})