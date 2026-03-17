//Using condition if with prompt

let unitPrice = 10;
let pieces = prompt("How many pieces do you order?", 0);
if (pieces > 0) {
    let total = unitPrice * pieces;
    console.log(`Total of pieces you order: ${total}`);
};
