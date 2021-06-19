let cat = { name: 'Tom', age: 5 };

console.log(Object.getOwnPropertyDescriptors(cat));

Object.freeze(cat);

console.log(Object.getOwnPropertyDescriptors(cat));


// Object seal
console.log('Object Seal');
let person = {
    name: 'Pesho',
    age: 20,
    hobby: 'football',
};

console.log(Object.getOwnPropertyDescriptors(person));
Object.seal(person)
console.log(Object.getOwnPropertyDescriptors(person));
