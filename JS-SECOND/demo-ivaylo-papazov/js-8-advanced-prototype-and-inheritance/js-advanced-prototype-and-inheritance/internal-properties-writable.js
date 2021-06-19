let person = {
    name: 'Pesho',
    age: 20,
    hobby: 'football',
};

// Add readonly property
Object.defineProperty(person, 'name', {
    writable: false
});

console.log(person);
person.name = 'Gosho';
console.log(person);
