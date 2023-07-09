const openBtn = document.getElementById('openBtn')
const closeBtn = document.getElementById('closeBtn')
const modal = document.getElementById('modal')
const modalContainer = document.getElementById('modal-container')

openBtn.addEventListener("click", () => {
    modal.style.display = "block"
})

closeBtn.addEventListener("click", () => {
    modal.style.display = "none"
})

window.addEventListener("click", (e) => {
    if (e.target == modalContainer) {
        modal.style.display = "none"
    }
})