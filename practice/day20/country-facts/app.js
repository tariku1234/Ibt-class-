const form = document.querySelector("#search-form");
const input = document.querySelector("#country-input");
const facts = document.querySelector("#facts");
function renderFact(title, value) {
    const p = document.createElement("p");
    p.classList.add("fact");
    p.textContent = `${title}: ${value}`;
    facts.append(p);
}

async function showCountry(countryName) {
    facts.textContent = "Loading...";
    try {
        const res = await fetch(
            `https://restcountries.com/v3.1/name/${encodeURIComponent(countryName)}`
        );
        if (!res.ok) {
            throw new Error(
                "Country not found"
            );
        }
        const data = await res.json();
        const country = data[0];
        facts.innerHTML = "";
        const capital =
            country.capital
                ? country.capital[0]
                : "No capital information";
        renderFact(
            "Capital",
            capital
        );
        renderFact(
            "Population",
            country.population.toLocaleString()
        );
        renderFact(
            "Region",
            country.region
        );
        let currencyText = "No currency information";
        if (country.currencies) {
            currencyText =
                Object.values(country.currencies)
                    .map(currency => {
                        return currency.name;
                    })
                    .join(", ");
        }
        renderFact(
            "Currency",
            currencyText
        );
        if (country.flags?.png) {
            const flag =
                document.createElement("img");
            flag.src =
                country.flags.png;
            flag.alt =
                `${country.name.common} flag`;
            flag.classList.add("flag");
            facts.append(flag);
        }
    } catch (error) {
        facts.textContent =
            error.message;
    }
}
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const countryName =
        input.value.trim();
    if (!countryName) {
        facts.textContent =
            "Please enter a country name.";
        return;
    }
    showCountry(countryName);
});
showCountry("ethiopia");