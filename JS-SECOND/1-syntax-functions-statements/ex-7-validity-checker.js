function solved(x1, y1, x2, y2) {
    let first = calculate(x1, y1, 0, 0)
    let second = calculate(x2, y2, 0, 0)
    let third = calculate(x1, y1, x2, y2)

    function calculate(x1, y1, x2, y2) {
        const result = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)//d=√((x1-x2)2+(y1-y2)2) Pythagoras Theorem
        let msg = Number.isInteger(result) ? 'valid' : 'invalid';
        return `{${x1}, ${y1}} to {${x2}, ${y2}} is ${msg}`;
    }
    return `${first}\n${second}\n${third}\n`
}

console.log(solved(2, 1, 1, 1  ))