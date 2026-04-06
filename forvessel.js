let vessel = {
    latitude: 40.07288,
    longitude: 154.48535,
    course: 285.6,
    speed: 14.0,
    imo: 9175717,
    name: "MARENO"
}
for (let key in vessel){
    if (key === "latitude"){
        console.log(`LATITUDE: ${vessel[key]}`)
    }
    else if(key === "longitude"){
         console.log(`LONGITUDE: ${vessel[key]}`)    
        }
    else if(key === "course"){
         console.log(`COURSE: ${vessel[key]}`)    
        }
    else if(key === "speed"){
         console.log(`VELOCIDADE: ${vessel[key]}`)    
        }
    else if(key === "imo"){
         console.log(`IMO: ${vessel[key]}`)    
        } 
    else if(key === "name"){
         console.log(`NOME: ${vessel[key]}`)    
        }       
}