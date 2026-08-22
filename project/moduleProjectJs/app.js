const searchInput = document.querySelector("#product-search");
const productContainer = document.querySelector("#product-container");
const cartCount = document.querySelector("#cart-count");
const cartButton = document.querySelector("#cart-button");
const cartDropdown = document.querySelector("#cart-dropdown");
const cartItemsContainer = document.querySelector("#cart-items");
const cartTotal = document.querySelector("#cart-total");
const floatingCart = document.querySelector("#floating-cart");
const floatingCount = document.querySelector("#floating-count");

// Store products globally for search

let productsData = [];

// Load cart from localStorage

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// DISPLAY CART

function displayCart() {
    cartItemsContainer.innerHTML = ""
    let total = 0;
    cart.forEach((item, index) => {
        total += item.price * item.quantity;
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div>
            <h4>${item.name}</h4>
            <p>
                Brand: ${item.brand}
            </p>
            <p>
                Size: ${item.size}
            </p>
            <p>
                ETB ${item.price * item.quantity}
            </p>
            <button 
            class="minus"
            data-index="${index}">
                -
            </button>
            <span>
                ${item.quantity}
            </span>
            <button 
            class="plus"
            data-index="${index}">
                +
            </button>
            <button
            class="remove-btn"
            data-index="${index}">
                Remove
            </button>
        </div>
        `;
        cartItemsContainer.appendChild(cartItem);
    });
    cartTotal.textContent = total;
    cartCount.textContent = cart.length;
    floatingCount.textContent = cart.length;
    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );
}

// OPEN / CLOSE CART


cartButton.addEventListener("click", () => {
    cartDropdown.classList.toggle("active");
});
floatingCart.addEventListener("click", () => {
    cartDropdown.classList.toggle("active");
});
// CART ACTIONS

cartItemsContainer.addEventListener("click", (e) => {
    const index = e.target.dataset.index;
    if (e.target.classList.contains("plus")) {
        cart[index].quantity++;
        displayCart();
    }
    if (e.target.classList.contains("minus")) {
        if (cart[index].quantity > 1) {
            cart[index].quantity--;
        }
        else {
            cart.splice(index, 1);
        }
        displayCart();
    }
    if (e.target.classList.contains("remove-btn")) {
        cart.splice(index, 1);
        displayCart();
    }
});

// LOAD PRODUCTS

async function loadProduct() {
    try {
        const response = await fetch("products.json");

        productsData = await response.json();
        productsData.forEach(product => {
            const productCard =
                document.createElement("div");
            productCard.classList.add(
                "product-card"
            );
            productCard.innerHTML = `
            <img src="${product.image}"
            alt="${product.name}">
            <h3>
                ${product.name}
            </h3>
            <p>
                Brand: ${product.brand}
            </p>
            <p>
                Price: ETB ${product.price}
            </p>
            <div class="sizes">
                <p>
                    Available Sizes:
                </p>
                ${product.sizes.map(size => `
                    <button class="size-btn">
                        ${size}
                    </button>
                `).join("")}
            </div>
            <button class="add-cart">
                Add to Cart
            </button>
            `;
            productContainer.appendChild(productCard);

            // SIZE SELECT

            let selectedSize = null;
            const sizeButtons =
                productCard.querySelectorAll(".size-btn");
            sizeButtons.forEach(button => {
                button.addEventListener("click", () => {
                    selectedSize =
                        button.textContent.trim();
                    sizeButtons.forEach(btn => {
                        btn.classList.remove(
                            "selected"
                        );
                    });
                    button.classList.add(
                        "selected"
                    );
                });
            });
            // ADD TO CART

            const addCartButton =
                productCard.querySelector(".add-cart");
            addCartButton.addEventListener("click", () => {
                if (selectedSize === null) {
                    alert(
                        "Please select a size"
                    );
                    return;
                }
                const existingProduct =
                    cart.find(item =>
                        item.id === product.id &&
                        item.size === selectedSize
                    );
                if (existingProduct) {
                    existingProduct.quantity++;
                }
                else {
                    cart.push({
                        id: product.id,
                        name: product.name,
                        brand: product.brand,
                        price: product.price,
                        image: product.image,
                        size: selectedSize,
                        quantity: 1
                    });
                }
                displayCart();
                addCartButton.textContent =
                    "✓ Added";
                addCartButton.classList.add(
                    "added"
                );
                setTimeout(() => {
                    addCartButton.textContent =
                        "Add to Cart";
                    addCartButton.classList.remove(
                        "added"
                    );
                }, 1500);
            });
        });
    }
    catch (error) {
        console.log(
            "Error loading products:",
            error
        );
    }
}
// SEARCH FUNCTION

searchInput.addEventListener("input", () => {
    const searchValue =
        searchInput.value.toLowerCase();
    const productCards =
        document.querySelectorAll(".product-card");
    productCards.forEach((card, index) => {
        const productName =
            productsData[index]
                .name
                .toLowerCase();
        const brand =
            productsData[index]
                .brand
                .toLowerCase();
        if (
            productName.includes(searchValue)
            ||
            brand.includes(searchValue)
        ) {
            card.style.display = "block";
        }
        else {
            card.style.display = "none";
        }
    });
});

// START APP

displayCart();
loadProduct();