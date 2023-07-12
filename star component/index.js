const starContainer = document.getElementById('star-container')
const starRating = document.getElementById('rating')
const stars = document.querySelectorAll('.star')
let filled = 0;


starContainer.addEventListener("click", (e)=>{
    const clickedIndex = e.target.dataset.index

    for(let i=0; i<filled; i++){
        stars[i].classList.remove('filled')
    }
    for(let i=0; i<clickedIndex; i++){
        stars[i].classList.add('filled')
    }

    starRating.innerText = `Rating: ${clickedIndex}`
    
    filled = clickedIndex   
})










































// let starContainer = document.getElementById('star-container')
// let stars = document.querySelectorAll('.star')
// let filled = 0;

// starContainer.addEventListener("click", (e) => {
//     let currentClicked = e.target.dataset.index

//     for(let i=0; i<filled; i++){
//         stars[i].classList.remove("star-filled")
//     }
//     for(let i=0; i<currentClicked; i++){
//         stars[i].classList.add("star-filled")
//     }

//     document.getElementById("rating").innerText = `Rating: ${currentClicked}`

//     filled = currentClicked
// })

// starContainer.addEventListener("mouseover", (e)=>{
//     let currentClicked = e.target.dataset.index

//     for(let i=0; i<5; i++){
//         stars[i].classList.remove("star-filled")
//     }
//     for(let i=0; i<currentClicked; i++){
//         stars[i].classList.add("star-filled")
//     }
// })

// starContainer.addEventListener("mouseleave", (e)=>{
//     let currentClicked = e.target.dataset.index

//     for(let i=0; i<5; i++){
//         stars[i].classList.remove("star-filled")
//     }
//     for(let i=0; i<filled; i++){
//         stars[i].classList.add("star-filled")
//     }
// })