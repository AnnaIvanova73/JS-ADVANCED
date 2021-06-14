function solve(input) {
    let result = [];

    for (const num of input) {
        if (num < 0) {
            result.unshift(num);
        } else {
            result.push(num);
        }
    }

    for (let i = 0; i < result.length; i++) {
        console.log(result[i]);
    }
} 

solve([7, -2, 8, 9]);