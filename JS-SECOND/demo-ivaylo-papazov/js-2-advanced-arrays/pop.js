let numbers = [10, 20, 30, 40];

console.log(numbers);
console.log(numbers.length);

// let lastElement = numbers.pop();
let lastElement = poop(numbers);

console.log(numbers);
console.log(numbers.length);

console.log(lastElement);


function poop(arr) {
    let lastElement = arr[arr.length - 1];

    arr.length = arr.length - 1;

    return lastElement;
}
