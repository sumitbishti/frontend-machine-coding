const boxContainer = document.getElementById('box-container')
const boxes = document.querySelectorAll('.box')
const queue = []

boxContainer.addEventListener("click", (e) => {
    const index = e.target.dataset.index

    if (index !== undefined && !queue.includes(index)) {
        queue.push(index);
        boxes[index].classList.add("green")
    }

    if (queue.length == 7) {
        let cnt = 0;

        while (queue.length > 0) {
            cnt++;
            let idx = queue.shift()

            setTimeout(() => {
                boxes[idx].classList.remove("green")
            }, cnt * 1000);
        }
    }
})