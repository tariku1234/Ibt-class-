import { addVat, VAT } from "./money.js";
import { transactions } from "./transactions.js";
import { totalByType, createReceipts } from "./report.js";

const price = [2000,300,8000,500,400,900]

//const pricesWithVAT = price.map((pr)  => pr * 1.15)
const pricesWithVAT = price.map((pr) => addVat(pr));
console.log(pricesWithVAT)

const filterd = pricesWithVAT.filter((p) => p <= 1000)
console.log(filterd)

const total = pricesWithVAT.reduce((sum, p) => 
    sum += p , 0)
console.log(total)

const customer = {
    name: "tariku",
    city: "addis ababa",
    balance: 2000000
}
for (const [key, value] of Object.entries(customer)) {
    console.log(key, value);
}


const { name, city } = customer;
console.log(name);
console.log(city);
function greet({ name }) {
    console.log(`Hello, ${name}!`);
}

greet(customer);

const updatedCustomer = {
    ...customer,
    city: "Adama",
    phone: "0961141361"
};

console.log(customer);
console.log(updatedCustomer);




const credits = transactions.filter(
    (t) => t.type === "credit"
);

const debits = transactions.filter(
    (t) => t.type === "debit"
);


console.log("Credits:", credits);
console.log("Debits:", debits);


console.log(
    "Total Credit:",
    totalByType(transactions, "credit"),
    "ETB"
);

console.log(
    "Total Debit:",
    totalByType(transactions, "debit"),
    "ETB"
);

const receipts = createReceipts(transactions);

console.log(receipts);


const updatedTransaction = {
    ...transactions[0],
    amount: 400
};


console.log("Original:", transactions[0]);

console.log("Updated:", updatedTransaction);




