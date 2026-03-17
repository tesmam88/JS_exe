//more using if & prompt examples

let user = {};

// 1. Pergunta e já salva direto no objeto (convertendo para número)
user.age = Number(prompt("Quantos anos você tem?", "0"));
user.points = Number(prompt("Quantos pontos você tem?", "0"));
user.cartValue = Number(prompt("Qual o valor do carrinho?", "0"));

// 2. Verifica se algum valor é inválido
if (isNaN(user.age) || isNaN(user.points) || isNaN(user.cartValue)) {
    console.log("Por favor, digite apenas números válidos.");
} else {
    // 3. Calcula o frete usando as propriedades do objeto
    let shippingCost;

    if (user.age > 21) {
        if (user.cartValue >= 100 || user.points >= 300) {
            shippingCost = 0;
        } else {
            shippingCost = 10;
        }
    } else {
        shippingCost = 5;
    }

    console.log(`Seu frete é: R$ ${shippingCost.toFixed(2)}`);
    // Ou se quiser guardar no objeto também:
    // user.shippingCost = shippingCost;
}