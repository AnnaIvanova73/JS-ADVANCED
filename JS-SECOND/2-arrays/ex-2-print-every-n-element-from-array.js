function solve1(arr,step){
    let output = []
    for (let i = 0; i < arr.length; i+=step) {
        output.push(arr[i])
    }
    return output
}
function solve(arr,step){
    return arr.filter((_,indx) => indx % step === 0)
}

console.log(solve( ['5',

        '20',

        '31',

        '4',

        '20'],

    2 ));
console.log(solve( ['dsa',

        'asd',

        'test',

        'tset'],

    2  ));
console.log(solve( ['1',

        '2',

        '3',

        '4',

        '5'],

    6   ));