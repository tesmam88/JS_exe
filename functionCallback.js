let adicionarQueijo = function(){
    console.log("Adicionar Queijo");
}

let fazerLanche = function(callback){
    console.log("1. Pegar o pão");
    console.log("2. Colocar o hamburguer");
    callback();                         
    console.log("4. Lanche pronto!");
}

console.log("Fazendo o Lanche")
fazerLanche(adicionarQueijo)
console.log("Bom Apetite!!")
