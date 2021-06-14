function solve1(arr) {
    let sortArr = [];

    arr.sort((a, b) => a - b);
    let num = arr.length;
    for (let i = 0; i < num; i++) {
        let min = arr.shift()
        let max = arr.pop()
        sortArr.push(min)
        sortArr.push(max)
    }
    return sortArr.filter(a => typeof a !== 'undefined')
}
function solve2(arr) {
    let sortArr = []

    arr.sort((a, b) => a - b);

    let num = arr.length

    while(num > 0){
        let min = arr.shift()
        let max = arr.pop()
        sortArr.push(min,max)
        num-=2
    }

    return sortArr
}
function solve3(arg) {
    return arg.sort((a, b) => a - b).map(Number).reduce((acc) => {
        acc.push(arg.shift(),arg.pop())
        return acc
    }, []).filter(e => e !== undefined)
}
console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));