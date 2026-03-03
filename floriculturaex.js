//Let's play florist. Declare six variables, remembering to name them according to their purpose:

//the price of a single rose (8) and the number of roses you have (70)
//the price of a single lily (10) and the number of lilies you have (50)
//the price of a single tulip (2) and the number of tulips you have (120)

//Now declare three variables, one each for the roses, lilies, and tulips you have, 
// in which you place their total price. 
// Insert the corresponding values into the variables using the variables declared 
// in the previous step. Finally, declare a variable in which you store the price of all your flowers (again, use the previous variables for initialization). 
// Display all inventory information in the console in the following form:

const rose_price = 8;
const lily_price = 10;
const tulip_price = 2;

let number_roses = 70;
let number_lilies= 50;
let number_tulip = 120;

function values(){
    const values_rose = rose_price * number_roses;
    console.log(`The rose's value is: ${values_rose}`);

    const values_lily = lily_price * number_lilies;
    console.log(`the lily's value is: ${values_lily}`);

    const values_tulip = tulip_price * number_tulip;
    console.log(`the tulip's value is ${values_tulip}`)

    const total_values = values_rose + values_lily + values_tulip;
    console.log(`the Total's value is: ${total_values}`);
}

values()


