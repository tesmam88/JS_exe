function contagem(n) {
    console.log(n);
    return n > 0 ? contagem(n - 1) : console.log("Lançar!");
}

contagem(5);