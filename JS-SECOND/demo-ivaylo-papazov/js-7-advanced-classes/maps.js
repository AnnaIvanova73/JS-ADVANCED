// Basic usage
let map = new Map();

map.set('name', 'Pesho');
map.set('age', 20);

console.log(map.get('name'));

if (map.has('name')) {
    map.delete('name');
}

map.clear();

// Itearate map
let people = new Map();
people.set(100, 'Pesho');
people.set(200, 'Gosho');
people.set(300, 'Stamat');
people.set(400, 'Mariyka');

let keys = people.keys();
console.log(keys);

let values = people.values();
console.log(values);

for (const name of people.values()) {
    console.log(name);
}

for (const number of people.keys()) {
    console.log(number);
    console.log(people.get(number));
}

for (const kvp of people.entries()) {
    console.log(`number ${kvp[0]} is associated with the name: ${kvp[1]}`);
}

// Boolean map
let boolMap = new Map();

boolMap.set(true, 'Pesho');
boolMap.set(false, 'Gosho');

console.log(boolMap);

// Map with object key

let firstEmployee = {name: 'pesho', age: 20};

let employeeMap = new Map(); // Use WeakMap to loose the reference to firstEmployee

employeeMap.set(firstEmployee, 'Programmer');
employeeMap.set({name: 'Ginka', age: 18}, 'Manager');

console.log(employeeMap);