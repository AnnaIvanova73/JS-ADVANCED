function solve (p1,p2,operator){
let operations = {
    '**': function () { return p1 ** p2},
    '%': () =>{ return p1 % p2},
    '/': () =>{ return p1 / p2},
    '*': () =>{ return p1 * p2},
    '-': () =>{ return p1 - p2},
    '+': () =>{ return p1 + p2},
}
    return operations[operator]();
}
console.log(solve(5, 6, '+' ))