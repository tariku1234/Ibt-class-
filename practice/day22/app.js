const state = {
    base: "ETB",
    rates: {},
    watchlist: [],
    amount: 100,
    currency: "USD"
};
const status = document.querySelector("#status");
const select = document.querySelector("#currency");
const form = document.querySelector("#convert-form");
const amountInput = document.querySelector("#amount");
const result = document.querySelector("#result");
const watchlist = document.querySelector("#watchlist");

async function loadRates() {
    status.textContent = "Loading rates...";
    try {
        const response = await fetch(
            "https://open.er-api.com/v6/latest/ETB"
        );
        if (!response.ok) {
            throw new Error("API Error");
        }
        const data = await response.json();
        state.rates = data.rates;
        status.textContent = "";
        render();
    }
    catch (error) {
        console.log(error);
        status.textContent = "Could not load rates";
    }
}
function render() {
    const currencies = Object.keys(state.rates);
    select.innerHTML = currencies
        .map(currency => {
            return `<option>${currency}</option>`
        })
        .join("");
}
loadRates();
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const amount = Number(amountInput.value);
    if (amount <= 0) {
        result.textContent = "Enter valid amount";
        return;
    }
    const currency = select.value;
    const rate = state.rates[currency];
    const converted = amount * rate;
    result.textContent =
        `${amount} ETB = ${converted.toFixed(2)} ${currency}`;
});