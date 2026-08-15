const title = document.querySelector("#title");
const button = document.querySelector("#changeBtn");

button.addEventListener("click", () => {
    title.textContent = "Welcome to Addis Market";

    title.classList.toggle("highlight");
});

const cities = [
    "Addis Ababa",
    "Adama",
    "Jimma"
];
const cityList = document.querySelector("#cityList");

cities.forEach(city => {

    const li = document.createElement("li");

    li.textContent = city;

    cityList.append(li);

});


const container = document.querySelector("#container");
const btn = document.querySelector("#btn");


btn.addEventListener("click", (event) => {

    console.log("Button clicked");
    console.log(event.target);

});


container.addEventListener("click", () => {

    console.log("Div clicked");

});


const list = document.querySelector("#list");


list.addEventListener("click", (e) => {

    if (e.target.classList.contains("del")) {

        e.target.closest("li").remove();

    }

});


const form = document.querySelector("#form");

const input = document.querySelector("#item");

const items = document.querySelector("#items");


form.addEventListener("submit", (e) => {

    e.preventDefault();


    const value = input.value.trim();


    if (value === "") return;


    const li = document.createElement("li");

    li.textContent = value;


    items.append(li);


    input.value = "";

});