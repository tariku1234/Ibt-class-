// Calculate total credit or debit
export const totalByType = (txns, type) =>
    txns
        .filter((t) => t.type === type)
        .reduce((sum, { amount }) => sum + amount, 0);


// Create receipt strings using map + destructuring
export const createReceipts = (txns) =>
    txns.map(({ customer, amount }) =>
        `${customer} paid ${amount} ETB`
    );