const { makeReceiptMaker } = require("./eatery");

const receipt = makeReceiptMaker();

console.log(receipt(100, 50));
console.log(receipt(200, 100));
console.log(receipt(75, 25, 50));