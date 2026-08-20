const productContainer = document.querySelector("#product-container")


async function loadProduct() {
    try {

        const response = await fetch("products.json");

        const products = await response.json();


        products.forEach(product => {

            const productCard = document.createElement("div");

            productCard.classList.add("product-card");


            productCard.innerHTML = `

                <img src="${product.image}" alt="${product.name}">

                <h3>${product.name}</h3>

                <p>Brand: ${product.brand}</p>

                <p>Price: $${product.price}</p>


                <div class="sizes">

                    <p>Available Sizes:</p>

                    ${product.sizes.map(size =>
                `<button>${size}</button>`
            ).join("")}

                </div>


                <button class="add-cart">
                    Add to Cart
                </button>

            `;


            productContainer.appendChild(productCard);

        });


    } catch (error) {

        console.log("Error loading products:", error);

    }
}


loadProduct()