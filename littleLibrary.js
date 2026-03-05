//small library example with object and array
let littleLibrary = [
    {
        title: "Speaking JavaScript",
        author: "Axel Rauschmayer",
        numberofpages : 460
    },
    {
        title: "Programming JavaScript Applications",
        author: "Eric Elliott",
        numberofpages : 254
    },
    {
        title: "Understanding ECMAScript 6",
        author: "Nicholas C. Zakas",
        numberofpages : 352
    },
];

littleLibrary[3] = {
        title: "Learning JavaScript Design Patterns",
        author: "Addy Osmani",
        numberofpages : 254
}    
let sum = littleLibrary[0].numberofpages + littleLibrary[1].numberofpages +
          littleLibrary[2].numberofpages + littleLibrary[3].numberofpages  

console.log(littleLibrary);
console.log(sum)
