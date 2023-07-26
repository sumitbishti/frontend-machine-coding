let container = document.getElementById('container')
let data = []

fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then((res) => {
        data = res;


        data.forEach((card) => {
            let filledStars = parseInt(card.rating.rate)
            let unFilledStars = 5 - filledStars;
            let starContainer = document.createElement('div')
            let tmpDiv = document.createElement('div')
            starContainer.setAttribute("class", "star-container")

            for (let i = 0; i < filledStars; i++) {
                starContainer.innerHTML += `<span class="star_filled">&#9733;</span>`
            }
            for (let i = 0; i < unFilledStars; i++) {
                starContainer.innerHTML += `<span">&#9734;</span>`
            }
            
            tmpDiv.appendChild(starContainer)

            container.innerHTML += ` <div class="card">
            <img class="image" src="${card.image}" alt="image">
            <div class="card-details">
                <h3>${card.title}</h3>
                <p>${card.category}</p>

                ${tmpDiv.innerHTML}
                <p> Rating Count: <span>${card.rating.count}</span> </p>
            </div>
            <button class="buy-btn">Buy Now</button>
        </div>
    </div>`

        })
    })