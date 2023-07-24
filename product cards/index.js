let data = []
let container = document.getElementById('container')


fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then((res) => {
        data = res

        data.forEach((card) => {
            let coloredStars = parseInt(card.rating.rate)
            let uncoloredStars = 5 - coloredStars

            let allStarsDiv = document.createElement('div')
            allStarsDiv.setAttribute("class", "all_star")

            let allStarsDivContainer = document.createElement('div')

            for (let i = 0; i < coloredStars; i++) {
                allStarsDiv.innerHTML += `<span class="star-filled">&#9733;</span>`
            }
            for (let i = 0; i < uncoloredStars; i++) {
                allStarsDiv.innerHTML += `<span >&#9734;</span>`
            }

            allStarsDivContainer.appendChild(allStarsDiv)

            container.innerHTML +=
                `<div class="card">
                    <div class="card-container">
                        <img class="image" src=${card.image} alt="product">
                        <div class="card-details">
                            <h4>${card.title}</h4>
                            <p>${card.category}</p>
                            ${allStarsDivContainer.innerHTML}
                            <div class="rating-count">
                                Rating Count : <span>${card.rating.count}</span>
                            </div>
                        </div>
                    </div>
                    <div class="btn">
                        <button class="buy-btn">
                            Buy Now
                        </button>
                    </div>
                </div>`
        })
    })