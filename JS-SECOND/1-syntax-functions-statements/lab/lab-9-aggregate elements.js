function solve(param) {
    let elements = param.map(Number);
    let func = [() => {return elements.reduce((a, b) => a + b, 0)},
        () => {return elements.reduce((a,b) => a + 1 / b,0)},
        () => {return elements.reduce((a,b) => String(a) + b,'')}
    ]
    return `${func[0]()}\n${func[1]()}\n${func[2]()}`
}



function agr(arr) {

    let sumOfElements = 0;
    let sumInverseValue = 0;
    let concatElements = '';

    for (const arrElement of arr) {
        sumOfElements += arrElement;
        concatElements += arrElement
        sumInverseValue += 1 / arrElement
    }
    console.log(sumOfElements + "\n" + sumInverseValue + "\n" + concatElements)
}
console.log(solve([2, 4, 8, 16] ))