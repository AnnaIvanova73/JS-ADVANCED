function solve(...params) {
    let types = {};
    let elements = [];
    params.forEach(el => {
        let type = typeof el;

        if (!types[type]) {
            types[type] = 0;
        }
        types[type] += 1;
        let obj = {[type]: el};
        elements.push(obj);
    });

    elements.forEach(e => {
        console.log(`${Object.keys(e)[0]}: ${Object.values(e)[0]}`);
    })
    Object.entries(types)
        .sort(([, a], [, b]) => b - a).forEach(([key, value]) => {
        console.log(`${key} = ${value}`);
    })
}

console.log(solve({name: 'bob'}, 3.333, 9.999))

// // Mock the console
// var oldConsole = console.log;
// var output = [];
// console.log = function (input) {
//     output.push(input);
// };
// result({ name: 'bob'}, 3.333, 9.999);
//
// console.log = oldConsole;
//
// var expectedOutput = [
//     'object:',
//     'number: 3.333',
//     'number: 9.999',
//     'number = 2',
//     'object = 1'
// ];
//
// expect(output.length).to.equal(expectedOutput.length, "Incorrect number of arguments parsed.");
// for (var i = 0; i < output.length; i++) {
//     var current = output[i];
//     expect(current).to.contains(expectedOutput[i], "Incorrect number of arguments parsed.");
// }