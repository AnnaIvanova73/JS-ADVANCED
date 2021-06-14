function solve(arr) {
    let myArr = [];
    let commands = {
        'add': (num) => {
            myArr.push(num);
        },
        'remove': () => {
            myArr.pop();
        }
    }
    let num = 0;
    arr.forEach((cmd) => {
        num++;
        commands[cmd](num)

    });
    return myArr.length === 0 ? 'Empty':myArr.join('\n');
}

console.log(solve(['add',

    'add',

    'add',

    'add']));
console.log(solve(['add',

    'add',

    'remove',

    'add',

    'add']));
console.log(solve(['remove',

    'remove',

    'remove']));