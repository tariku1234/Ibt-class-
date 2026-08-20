const state = {

    fruits: [],
    selectedFruits: ""

};

const select = document.querySelector("#fruitSelect")
const status = document.querySelector("#status");
const quantityInput = document.querySelector("#quantity")
const button = document.querySelector("#calculate")
const result = document.querySelector("#result")

async function getFruits() {
    try {
        const response = await fetch("fruit.json")
        const data = await response.json()
        state.fruits = data
        status.textContent = ""
        render();

    }
    catch (error) {
        status.textContent = "can not reload data"
    }
    ;

}
getFruits()

function render() {
    select.innerHTML = state.fruits.map(
        fruits => {
            return `<option value = "${fruits.id}">${fruits.name}</option>`
        }
    )
        .join("")
}



button.addEventListener("click", () => {


    const fruitId = Number(select.value);


    const quantity = Number(quantityInput.value);



    const fruit = state.fruits.find(
        (f) => {
            return f.id === fruitId;
        }
    );



    const total = fruit.price * quantity;



    result.textContent =
        `${quantity} ${fruit.name} = ${total} Birr`;


});

