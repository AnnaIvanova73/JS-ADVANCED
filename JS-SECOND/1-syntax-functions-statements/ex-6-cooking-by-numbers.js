function solve(num, ...listOperation) {
    let operations = {
        'chop': function () {
            return num /= 2
        },
        'dice': () => {
            return num = Math.sqrt(num)
        },
        'spice': () => {
            return num += 1
        },
        'bake': () => {
            return num *= 3
        },
        'fillet': () => {
            return num -= num * 0.20
        },
    }
    return listOperation.reduce((arr,op) =>{
        let value = operations[op]();
        arr.push(String(value))
        return arr
    },[]).join('\n')
    //  listOperation.forEach(op => console.log(operations[op]()))
}
console.log(solve('32', 'chop', 'chop', 'chop', 'chop', 'chop' ))