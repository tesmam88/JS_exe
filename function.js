let temperature;
let sum;
let meanTemp;

function getMeanTemp(){
    sum = 0;
    for(let i=0; i < temperature.length; i++){
        sum += temperature[i];
    }
    meanTemp = sum/temperature.length
}

temperature = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
getMeanTemp();
console.log(`meanTemp: ${meanTemp}`);
temperature = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16]
getMeanTemp();
console.log(`meanTemp: ${meanTemp}`);