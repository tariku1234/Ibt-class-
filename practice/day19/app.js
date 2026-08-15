const form = document.querySelector("#add-form");
const nameInput = document.querySelector("#name");
const priceInput = document.querySelector("#price");
const list = document.querySelector("#list");
const totalEl = document.querySelector("#total");

let total = 0;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = nameInput.value.trim();
    const price = Number(priceInput.value);

    if (!name || !price) {
        return;
    }
    addItem(name, price);
    form.reset();

});

function addItem(name, price) {

    const li = document.createElement("li");
    li.textContent = `${name} - ${price} ETB`;
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("del");
    li.append(deleteBtn);
    list.append(li);
    total += price;
    totalEl.textContent = total + " ETB";

}

list.addEventListener("click", (e) => {
    if (e.target.matches(".del")) {
        const li = e.target.closest("li");
        const price = Number(li.dataset.price);
        li.remove();
    }
    else if (e.target.matches("li")) {
        e.target.classList.toggle("bought");
    }

});