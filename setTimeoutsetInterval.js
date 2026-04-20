let id = setInterval(function(){
    console.log("repeir 1 vez")
},1000)

setTimeout(function(){
    clearInterval(id);
    console.log("termina a função")
},5500);