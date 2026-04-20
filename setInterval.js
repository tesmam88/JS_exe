let counter = 5

let id = setInterval(function(){
    console.log("Contador: " + counter);
    counter --;

    if (counter===0){
        clearInterval(id) // função de stop para o intervalo quando chega no zero
        console.log("Finalizado!!")
    }
},1000)