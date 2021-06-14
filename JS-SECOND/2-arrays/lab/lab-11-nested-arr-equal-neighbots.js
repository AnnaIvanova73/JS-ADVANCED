function solve(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === arr[i][j + 1]) {
                count++;
            }
        }
    }
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i].forEach((_, j) => {
            let num1 = arr[i][j];
            let num = arr[i + 1][j];
            if (arr[i][j] === arr[i + 1][j]) {
                count += 1
            }
        })
//сравняваме 2 и 4, после 2 и 0, тоест ред нула с ред едно, после ред едно с ред две
    }
    return count
}

console.log(solve([
    ['2', '2', '5', '7', '4'],

    ['4', '0', '5', '3', '4'],

    ['2', '5', '5', '4', '2'],
]))
