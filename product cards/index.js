let data = []
let container = document.getElementById('container')


fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then((res) => {
        data = res
        console.log(container)
        
        data.forEach((card) => {
            container.innerHTML +=
                `<div class="card">
                    <div class="card-container">
                        <img class="image" src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="product">
                        <div class="card-details">
                            <h4>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h4>
                            <p>men's clothing</p>
                            <div class="">
                                <span class="star-filled">&#9733;</span>
                                <span class="star-filled">&#9733;</span>
                                <span class="star-filled">&#9733;</span>
                                <span class="star-filled">&#9733;</span>
                                <span>&#9734;</span>
                            </div>
                            <div class="rating-count">
                                Rating Count : <span>0</span>
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