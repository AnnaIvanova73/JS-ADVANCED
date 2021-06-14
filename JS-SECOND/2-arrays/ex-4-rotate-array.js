function solve(arr, num) {
    let rotations = num % arr.length
    let index = 0;
    while (index < rotations) {
        let num = arr.pop()
        arr.unshift(num)
        index++;
    }
    return arr.join(' ');
}

function solve1(arr, rotate) {
    let realRotations = rotate % arr.length;
    let elements = arr.splice(arr.length - realRotations,realRotations)
    arr.splice(0,0,...elements);
    return arr
}
//let asd = 'asd'.repeat(12333232)
console.log(solve(['1',

        '2',

        '3',

        '4'],

    9233323288888888888888))
console.log(solve(['Banana',

        'Orange',

        'Coconut',

        'Apple'],

    15))