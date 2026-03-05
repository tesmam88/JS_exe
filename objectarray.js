//exe. with array and object together

let world_cup = [{
    year : 1994,
    country : "united statse of america",
    num_teams: 24,
    champion: "Brazil",
    scn_place: "Italia",
},

{
    year : 1970,
    country : "Mexico",
    num_teams: 16,
    champion: "Brazil",
    scn_place: "Italia" 
},
{
    year : 1998,
    country : "France",
    num_teams: 32,
    champion: "France",
    scn_place: "Brazil" 
},
{
    year : 2002,
    country : "Japan-South Korea",
    num_teams: 32,
    champion: "Brazil",
    scn_place: "Germany" 
}
] 
console.log(world_cup[1].num_teams);
console.log(world_cup[0].champion);
console.log(world_cup[2].country);
console.log(world_cup[3].year);
console.log(world_cup[1].scn_place);
console.log(world_cup[1]);

// add an object in array
world_cup[4] = {
    year : 1966,
    country : "England",
    num_teams: 16,
    champion: "England",
    scn_place: "West Germany" 
};
console.log(world_cup[4]);
console.log(world_cup);