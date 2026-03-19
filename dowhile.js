let isOver = false;
let count = 1;

do {
    isOver = !confirm(`[${count++}] Continue the loop? `);

}while(!isOver);

