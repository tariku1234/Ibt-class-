console.log(vat(100))

function vat(amount){
    return amount * 0.15
}
vat(500)
console.log(vat(600))
function totalAmount(vat, amount){
    return vat + amount
}
console.log(totalAmount(vat(500), 500))

//console.log(name())
const name = function(){
    return "tarikun"
}
console.log(name())

function newTips(amount, rate = 0.10){
    return amount * rate
}
console.log(newTips(200))
console.log(newTips(1000, 0.15))


function totalBill(...prices){
    sum = 0
    for( p of prices){
        sum += p
    }
    return sum


}
console.log(totalBill(100, 500,600,300,50,50,10))


const newVat = (amount) => amount * 0.15
console.log(newVat(100))



const arrowTotalBils = (...pricess) => {
    sums = 0 
        for ( s of pricess){
            sums += s
        }
    return sums   
    }
console.log(arrowTotalBils(20,30,40,50,60))


function BirthPlace(city){
    return function (name){
        return `selam ${name} the birth place is ${city}` 
    }
}
const child = BirthPlace("addisAbaba")
console.log(child("tarikuNegash"));


