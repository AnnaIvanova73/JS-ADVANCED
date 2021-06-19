// Complex object example
let person = {
    name: 'Pesho',
    age: 20,
    isMale: true,
    grades: [ 2, 4, 2, 6],
    cat: {
        name: 'Sisa',
        age: 20,
        toys: [ 
            { name: 'Mouse', color: 'Yellow'},
            { name: 'Ball', color: 'Blue'},
        ]
    },
    sayHello: function() {
        console.log('Hello');
    }
}

// Accessing nested property
console.log(person.cat.toys[0].name);

// Object composition naive way
const canPrint = function()  {
    console.log(`${this.name} can print!`);
}

const canScan = function()  {
    console.log(`${this.name} can scan!`);
}

const printer = {
    name: 'Xerox',
    print: canPrint,
};

const scanner = {
    name: 'HP',
    scan: canScan,
};

const copier = {
    name: 'Lexmark',
    print: canPrint,
    scan: canScan,
}

printer.print();
copier.print();
copier.scan();
scanner.scan();