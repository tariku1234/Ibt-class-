
const rateBtn = document.querySelector("#rate-btn");
const rateResult = document.querySelector("#rate-result");
async function getUsdToEtbRate() {
    try {
        const res = await fetch(
            "https://open.er-api.com/v6/latest/USD"
        );
        if (!res.ok) {
            throw new Error("Could not get exchange rate");
        }
        const data = await res.json();
        const rate = data.rates.ETB;
        return rate;
    } catch (error) {
        throw error;
    }
}
rateBtn.addEventListener("click", async () => {
    try {
        const rate = await getUsdToEtbRate();
        rateResult.textContent =
            `1 USD = ${rate} ETB`;
    } catch (error) {
        rateResult.textContent =
            error.message;
    }
});
const renderBtn = document.querySelector("#render-btn");
const todoResult = document.querySelector("#todo-result");
async function loadTodo() {
    try {
        const res = await fetch(
            "https://jsonplaceholder.typicode.com/todos/1"
        );
        if (!res.ok) {
            throw new Error("Failed to fetch todo");
        }
        const data = await res.json();
        todoResult.textContent =
            data.title;
    } catch (error) {
        todoResult.textContent =
            error.message;
    }
}
renderBtn.addEventListener("click", loadTodo);
const wrongUrlBtn =
    document.querySelector("#wrong-url-btn");
const notFoundBtn =
    document.querySelector("#404-btn");
const errorResult =
    document.querySelector("#error-result");
wrongUrlBtn.addEventListener("click", async () => {
    try {
        const res = await fetch(
            "https://this-is-a-wrong-api-example.com"
        );
        if (!res.ok) {
            throw new Error("HTTP error");
        }
    } catch (error) {
        errorResult.textContent =
            "Catch ran: Network error.";
        console.log(error);
    }
});
notFoundBtn.addEventListener("click", async () => {
    try {
        const res = await fetch(
            "https://jsonplaceholder.typicode.com/todos/999999"
        );
        console.log("res.ok:", res.ok);
        console.log("status:", res.status);
        if (!res.ok) {
            throw new Error(
                `HTTP error: ${res.status}`
            );
        }
        const data = await res.json();
        console.log(data);
    } catch (error) {
        errorResult.textContent =
            `Catch ran: ${error.message}`;
        console.log(error);
    }
});
const parallelBtn =
    document.querySelector("#parallel-btn");
const parallelList =
    document.querySelector("#parallel-list");
parallelBtn.addEventListener("click", async () => {
    try {
        const ids = [1, 2];
        const requests = ids.map(id => {
            return fetch(
                `https://jsonplaceholder.typicode.com/todos/${id}`
            );
        });
        const responses =
            await Promise.all(requests);
        responses.forEach(res => {
            if (!res.ok) {
                throw new Error("One request failed");
            }

        });
        const todos = await Promise.all(
            responses.map(res => res.json())
        );
        parallelList.innerHTML = "";
        todos.forEach(todo => {
            const li =
                document.createElement("li");

            li.textContent =
                `${todo.id}: ${todo.title}`;
            parallelList.append(li);
        });
    } catch (error) {
        parallelList.textContent =
            error.message;
    }
});
const loadingBtn =
    document.querySelector("#loading-btn");
const status =
    document.querySelector("#status");
loadingBtn.addEventListener("click", async () => {
    status.textContent = "Loading...";
    try {
        const res = await fetch(
            "https://jsonplaceholder.typicode.com/todos/1"
        );
        if (!res.ok) {
            throw new Error("Could not load data");
        }
        const data = await res.json();
        status.textContent =
            `Success: ${data.title}`;
    } catch (error) {
        status.textContent =
            `Error: ${error.message}`;
    }
});