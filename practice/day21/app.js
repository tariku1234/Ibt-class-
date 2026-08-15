
const form = document.querySelector("#signup-form");
const nameInput = document.querySelector("#name");
const phoneInput = document.querySelector("#phone");
const error = document.querySelector("#error");
const count = document.querySelector("#count");
const usersList = document.querySelector("#users");
const PHONE = /^(?:\+251|0)9\d{8}$/;
function save(users) {
    try {
        localStorage.setItem(
            "users",
            JSON.stringify(users)
        );
    } catch (error) {
        console.log(
            "Saving error:",
            error
        );
    }
}

function load() {
    try {
        const data =
            localStorage.getItem("users");
        if (!data) {
            return [];
        }
        return JSON.parse(data);
    } catch (error) {
        console.log(
            "Loading error:",
            error
        );
        return [];
    }
}
function validate(name, phone) {
    if (name.trim().length < 2) {
        return "Enter your full name.";
    }
    if (!PHONE.test(phone)) {
        return "Enter a valid Ethiopian phone number.";
    }
    return "";
}
function renderUsers() {
    const users = load();
    usersList.innerHTML = "";
    users.forEach(user => {
        const li =
            document.createElement("li");
        li.textContent =
            `${user.name} - ${user.phone}`;
        usersList.append(li);
    });
    count.textContent =
        users.length;
}
form.addEventListener(
    "submit",
    (event) => {
        event.preventDefault();
        const name =
            nameInput.value.trim();
        const phone =
            phoneInput.value.trim();
        const message =
            validate(name, phone);
        if (message) {
            error.textContent =
                message;
            return;
        }
        error.textContent = "";
        const users =
            load();
        users.push({
            name: name,
            phone: phone
        });
        save(users);
        form.reset();
        renderUsers();
    });

renderUsers();