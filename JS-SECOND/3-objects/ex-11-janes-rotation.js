function solve(data) {

    const operations = {
        '+': (num1, num2) => {
            return num1 + num2
        },
        '-': (num1, num2) => {
            return num1 - num2
        },
        '*': (num1, num2) => {
            return num1 * num2
        },
        '/': (num1, num2) => {
            return num1 / num2
        },
    }
    let msg = 'Error: too many operands!'
    data =  data.reduce((acc, el) => {
        if (!isNaN(el)) {
            acc.push(Number(el));
        } else {
            const lastNumber = acc.pop();
            const secondToLastNumber = acc.pop();
            let result = operations[el](secondToLastNumber, lastNumber);
            if (isNaN(result)) {
                msg =  'Error: not enough operands!';
                return msg;
            }
            acc.push(Number(result))
        }
        return acc
    }, [])

    return data.length === 1 ? data[0] : msg;
}

console.log(solve(['-1',
    '1',
    '+',
    '101',
    '*',
    '18',
    '+',
    '3',
    ])) // 9

console.log(solve([3,

    4,

    '+'])) // 9

console.log(solve([7,

    33,

    8,

    '-'])) // 9
console.log(solve([15,

    '/'])) // 9
