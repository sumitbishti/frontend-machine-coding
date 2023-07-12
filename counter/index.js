let counter = 0;
let offset = 1;

const plusBtn = document.getElementById('plusBtn')
const minusBtn = document.getElementById('minusBtn')
const resetBtn = document.getElementById('resetBtn')
const input = document.getElementById('input')
const counterElement = document.getElementById('counter')   

input.addEventListener("change",(e)=>{
    offset = parseInt(e.target.value)
})

plusBtn.addEventListener("click", ()=>{
    counter += offset
    counterElement.innerText = counter
})
minusBtn.addEventListener("click", ()=>{
    if(counter - offset >= 0){
        counter -= offset
        counterElement.innerText = counter
    }
})
resetBtn.addEventListener("click", ()=>{
    counter = 0
    counterElement.innerText = counter
})

