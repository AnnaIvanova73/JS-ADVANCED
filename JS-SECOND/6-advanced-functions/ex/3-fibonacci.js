function getFibonator() {
    let number = 0;
    let nextNumber = 1;
    return () => {
        if (number === 0) {
            number = 1;
            return number;
        }
        let fib = nextNumber;
        nextNumber = nextNumber + number
        number = fib
        return number
    }
}

let fib = getFibonator();

console.log(fib()); // 1

console.log(fib()); // 1

console.log(fib()); // 2

console.log(fib()); // 3

console.log(fib()); // 5

console.log(fib()); // 8

console.log(fib()); //13