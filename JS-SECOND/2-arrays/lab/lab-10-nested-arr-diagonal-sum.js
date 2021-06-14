function solve(arr) {
let sum1 = 0;
let sum2 = 0;

    for (let row = 0; row < arr.length; row++) {
        for (let col = 0; col < arr[row].length; col++) {
            if (row === col) {
             sum1+=arr[row][col];
            }
        }
    }
    for (let row = 0; row < arr.length; row++) {
        for (let col = 0; col < arr[row].length; col++) {
            if ((row+col) === arr.length -1) {
                sum2+=arr[row][col];
            }
        }
    }
    return sum1 + ' ' + sum2;
}
function solve1(arg) {
    let sum = [0, 0];
    for (let i = 0; i < arg.length; i++) {
        sum[0] += arg[i][i]
        sum[1] += arg[arg.length - i - 1][i]
    }
    return sum.join(' ')
}

console.log(solve([[20, 40],

    [10, 60]] ));