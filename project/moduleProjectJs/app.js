const productContainer = document.querySelector("#product-container");

const cartCount = document.querySelector("#cart-count");

const cartButton = document.querySelector("#cart-button");

const cartDropdown = document.querySelector("#cart-dropdown");

const cartItemsContainer = document.querySelector("#cart-items");

const cartTotal = document.querySelector("#cart-total");
const floatingCart = document.querySelector("#floating-cart");

const floatingCount = document.querySelector("#floating-count");

// Load cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];


// ===============================
// DISPLAY CART
// ===============================

function displayCart() {


    cartItemsContainer.innerHTML = "";


    let total = 0;


    cart.forEach((item, index) => {


        total += item.price * item.quantity;



        const cartItem = document.createElement("div");


        cartItem.classList.add("cart-item");



        cartItem.innerHTML = `


            <img src="${item.image}" alt="${item.name}">


            <div>


                <h4>${item.name}</h4>


                <p>Brand: ${item.brand}</p>


                <p>Size: ${item.size}</p>


                <p>
                    $${item.price * item.quantity}
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



    // Save cart

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );


}



// ===============================
// CART BUTTON OPEN/CLOSE
// ===============================


cartButton.addEventListener("click", () => {


    cartDropdown.classList.toggle("active");


});


floatingCart.addEventListener("click", () => {

    cartDropdown.classList.toggle("active");

});

// ===============================
// CART ACTIONS (+ - REMOVE)
// ===============================


cartItemsContainer.addEventListener("click", (e) => {



    const index = e.target.dataset.index;



    // Increase quantity

    if (e.target.classList.contains("plus")) {


        cart[index].quantity++;


        displayCart();


    }



    // Decrease quantity

    if (e.target.classList.contains("minus")) {


        if (cart[index].quantity > 1) {


            cart[index].quantity--;


        }

        else {


            cart.splice(index, 1);


        }


        displayCart();


    }



    // Remove item completely

    if (e.target.classList.contains("remove-btn")) {


        cart.splice(index, 1);


        displayCart();


    }



});




// ===============================
// LOAD PRODUCTS
// ===============================


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


                <p>
                    Brand: ${product.brand}
                </p>


                <p>
                    Price: $${product.price}
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




            // ===============================
            // SIZE SELECT
            // ===============================


            let selectedSize = null;



            const sizeButtons =
                productCard.querySelectorAll(".size-btn");



            sizeButtons.forEach(button => {



                button.addEventListener("click", () => {


                    selectedSize =
                        button.textContent.trim();



                    sizeButtons.forEach(btn => {

                        btn.classList.remove("selected");

                    });



                    button.classList.add("selected");



                });



            });





            // ===============================
            // ADD CART
            // ===============================


            const addCartButton =
                productCard.querySelector(".add-cart");




            addCartButton.addEventListener("click", () => {



                if (selectedSize === null) {


                    alert("Please select a size");


                    return;


                }




                // Check existing product

                const existingProduct = cart.find(item =>

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

                // Button feedback

                addCartButton.textContent = "✓ Added";


                addCartButton.classList.add("added");



                setTimeout(() => {

                    addCartButton.textContent = "Add to Cart";

                    addCartButton.classList.remove("added");


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



// Display saved cart when page loads

displayCart();


// Load products

loadProduct();