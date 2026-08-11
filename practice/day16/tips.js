let billsize = ""
let partysize = 0
let bill = Number(billsize)

bill = prompt("what is your bill size?")
partysize = prompt("how many people are in your party?")
const totalamount = bill * partysize

if (totalamount > 300){
    total = totalamount * 0.1

}else if (totalamount <= 300){
    total = totalamount * 0.05
}

const totalbill = totalamount + total
console.log(`your total bill is ${totalbill}`)
const perPerson = totalbill / partysize
console.log(`each person should pay ${perPerson}`)



let feeCategory;

if (totalBill <= 50) {
    feeCategory = 1;
} else if (totalBill < 100) {
    feeCategory = 2;
} else {
    feeCategory = 3;
}



let telebirrFee = 0
switch (feeCategory) {

    case 1:
        telebirrFee = totalBill * 0.01;
        break;

    case 2:
        telebirrFee = totalBill * 0.02;
        break;

    case 3:
        telebirrFee = totalBill * 0.03;
        break;
}

console.log(`Your TeleBirr fee is ${telebirrFee}`);