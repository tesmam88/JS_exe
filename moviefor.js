let movies = [];

while(true){
let title = prompt("Movie's Title: ");
if (title === null || title.trim() === "") break;
let imbd = prompt("Ratimg from IMDB: ")
if (imbd === null || imbd.trim() === "") break;
    
let rating = Number(imbd)   
if (rating > 7) break; 
    movies.push({
            title:title,
            imbd:rating
        });
    
}
console.log("All with rating unde 7: ");
for (let movie of movies){
    if(movie.imbd<7){
        console.log(`${movie.title} (${movie.imbd})`)
    }
}
console.log("All with ratings over 7:");
for (let movie of movies) {
    if (movie.imbd >= 7) {
        console.log(`${movie.title} (${movie.imbd})`)
    }
}