// Using conditional with ternary aplication

let price = {};
price.user = Number(prompt("What's the price?",0));
let shippingCost = price.user > 50 ? 0 : 5;
console.log (`price: ${price.user} shippingCost : ${shippingCost}`);