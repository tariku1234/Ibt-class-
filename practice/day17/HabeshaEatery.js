function subtotal(...prices) {
    return prices.reduce(function(total, prices){
        return total + prices
    }, 0)
}

function discountBy( subtotal, rate = 0.10){
    return subtotal * rate

}
const discountBy = (rate) => (subtotal) => subtotal * rate;

function withVat(subtotal, vatRate = 0.15) {
    return subtotal + (subtotal * vatRate);
}

function toETB(amount) {
    return `${amount.toFixed(2)} ETB`;
}

function makeReceiptMaker() {
    let orderNumber = 0;

    return () => {
        orderNumber++;

        return `#${orderNumber}`;
    };
}

function makeReceiptMaker() {
    let orderNumber = 0;

    return (...prices) => {
        orderNumber++;

        const total = toETB(
            withVat(
                memberDiscount(
                    subtotal(...prices)
                )
            )
        );

        return `#${orderNumber}: ${total}`;
    };
}


module.exports = {
    subtotal,
    discountBy,
    withVat,
    toETB,
    makeReceiptMaker
};


