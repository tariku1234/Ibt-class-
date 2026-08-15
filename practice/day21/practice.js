localStorage.setItem("lang", "am", "en", "fr")
const lang = localStorage.getItem("lang");

const select = document.querySelector("#lang");




// 1. restore the saved choice on load
//const saved = localStorage.getItem("lang");
//if (saved) select.value = saved;
// 2. save whenever it changes
select.addEventListener("change", () => {
    localStorage.setItem("lang", select.value);
});

let cart = ["Doro Wat", "Tibs", 12, "enjera"];
// SAVE — stringify first
localStorage.setItem("cart",
    JSON.stringify(cart));
// LOAD — parse back (guard the null)
const raw = localStorage.getItem("cart");
cart = raw ? JSON.parse(raw) : [];


const user = {
    "name": "Almaz",
    "city": "Addis Ababa",
    "cart": ["Doro Wat", "Shiro"],
    "total": 360,
    "member": true
}

const order = { name: "Almaz", total: 360 };

localStorage.setItem("user", JSON.stringify(user))

function loadCart() {
    try {
        const raw = localStorage.getItem("cart");
        return raw ? JSON.parse(raw) : [];
    } catch (err) {
        return []; // corrupt — start fresh
    }
}



// 1. Select the form and input elements
const form = document.querySelector("#signup");
const nameInput = document.querySelector("#name");
const phoneInput = document.querySelector("#phone");

// 2. Listen for the form submission
form.addEventListener("submit", (e) => {
    e.preventDefault(); // Stop the page from reloading

    // Read and trim the input values inside the submit event
    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();

    // Validate that inputs are not empty
    if (!name || !phone) {
        console.log("Please fill out both fields.");
        return;
    }

    // Combine user data into an object
    const userData = { name, phone };

    // 3. Save to localStorage (convert object to string first)
    localStorage.setItem("signup", JSON.stringify(userData));

    // 4. Retrieve from localStorage and log to the console
    const storedData = localStorage.getItem("signup");
    console.log("Stored in localStorage:", JSON.parse(storedData));
});