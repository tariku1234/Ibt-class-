const API = "https://open.er-api.com/v6/latest/ETB";
const status = document.querySelector("#status");
async function loadRates() {
    status.textContent = "Loading rates...";
    try {
        const res = await fetch(API);
        if (!res.ok) throw new Error("HTTP " + res.status);
        const data = await res.json();
        state.rates = data.rates; // into state
        status.textContent = "";
        render();
    } catch (err) {
        status.textContent = "Could not load rates.";
    }
}

