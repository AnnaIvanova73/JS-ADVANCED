function solve(param) {
    let digits = param.toString().split('');
    const realDigits = digits.map(Number)

    const allEqual = () => realDigits.every(v => v === realDigits[0])
    const allSum = () => realDigits.reduce((a, b) => a + b, 0)
    return `${allEqual()}\n${allSum()}`
}

console.log(solve(1234));