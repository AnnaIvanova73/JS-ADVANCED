let uniqueNumbers = new Set();

uniqueNumbers.add(2);
uniqueNumbers.add(10);
uniqueNumbers.add(2);
uniqueNumbers.add(4);

for (const num of uniqueNumbers) {
    console.log(num);
}

let numbersArray = [...uniqueNumbers];

console.log(numbersArray);