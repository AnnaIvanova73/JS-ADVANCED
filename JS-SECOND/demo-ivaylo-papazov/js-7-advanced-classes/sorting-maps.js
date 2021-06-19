let map = new Map();                                               

map.set("one", 1);                                                   
map.set("eight", 8);
map.set("two", 2);


// Convert map to array of arrays
let mapEntries = map.entries();
let numbers = Array.from(mapEntries);// first way

let numbersDestructured = [...map.entries()];// second way

// Sort array of arrays
numbers
    .sort((a, b) => a[1] - b[1])
    .forEach(x => {
        console.log(`${x[0]} -- ${x[1]}`);
    });

// Convert to map again
let orderdMap = new Map(numbers);

console.log(orderdMap);