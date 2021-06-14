function solve(k, n) {
    let el = [1]
    for (let i = 1; i < k; i++) {
        let sum = 0;

        let startIndex = Math.max(0, i - n);
        for (let j = startIndex; j < i; j++) {
            sum += el[j]
        }
        el[i] = sum;
    }
    return el
}

function solve1(k,n) {
    const arr = [1];
    for (let i =1; i < k; i++) {
        arr.push(arr.slice(-n).reduce((a, v) => a + v, 0))
    }
    return arr
}

//console.log(i)
//         console.log(arr.slice(-n))
//console.log(solve(6, 3))
console.log(solve1(6, 3))