function subSum(arr, n1, n2) {
    let returnValue = NaN;

    const predicate = (val) => val !== val;
    const checkElements = (arr) => arr.map(Number).some(predicate);

    if (Array.isArray(arr) && !checkElements(arr)) {
        let startIndex = Number(n1) < 0 ? 0 : Number(n1);
        let endIdxIndInclusive = Number(n2) < 0 ? 0 : Number(n2) + 1;
        returnValue = arr.slice(startIndex, endIdxIndInclusive).reduce((acc, el) => acc + el, 0);
    }

    return returnValue;
}

console.log(subSum([10, 20, 30, 40, 50, 60], 3, 300))
console.log(subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1))
console.log(subSum([10, 'twenty', 30, 40], 0, 2))
console.log(subSum([], 1, 2))
console.log(subSum('text', 0, 2))
