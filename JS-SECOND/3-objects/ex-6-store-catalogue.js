function solve(products) {
    let data = products.map(product => product.split(' : '))
        .reduce((acc, val) => [...acc, [val[0], Number(val[1])]], [])
        .sort((a, b) => (a[0]).localeCompare(b[0]))

    let letter = '';
    return data.reduce((acc, e) => {
        let currLetter = e[0].charAt(0);
        if (letter !== currLetter) {
            acc.push(currLetter);
            letter = currLetter;
        }
        acc.push(`  ${e[0]}: ${e[1]}`)
        return acc
    }, []).join('\n')
}

console.log(solve(['Appricot : 20.4',

    'Fridge : 1500',

    'TV : 1499',

    'Deodorant : 10',

    'Boiler : 300',

    'Apple : 1.25',

    'Anti-Bug Spray : 15',

    'T-Shirt : 10']))

//function solve(products) {
//     let splitData = products.map(product => product.split(' : '))
//         .reduce((acc, val) => [...acc, [val[0], Number(val[1])]], []);
//
//
//     let objectOfProducts = Object.fromEntries(splitData);// към обект
//
//     let sorted = Object.entries(objectOfProducts)
//         .sort((a, b) => (a[0]).localeCompare(b[0])); // сортиране връща масив
//
//     let firstLetterInObject = sorted[Object.keys(sorted)[0]][0].charAt(0)
//let firstLetterInObject = sorted[Object.keys(sorted)[0]][0].charAt(0)

function solve2(products) {
    let data = products.map(product => product.split(' : '))
        .reduce((acc, val) => [...acc, [val[0], Number(val[1])]], [])
        .sort((a, b) => (a[0]).localeCompare(b[0]))

    let letter = data[0][0].charAt(0)

    let output = [letter];

    data.forEach(e => {
        let currLetter = e[0].charAt(0)
        if (letter === currLetter) {
            output.push(`  ${e[0]}: ${e[1]}`)
        } else {
            output.push(currLetter)
            output.push(`  ${e[0]}: ${e[1]}`)
            letter = currLetter
        }
    })
    return output.join('\n')

}

function solve1(products) {
    let data = products.map(product => product.split(' : '))
        .reduce((acc, val) => [...acc, [val[0], Number(val[1])]], [])
        .sort((a, b) => (a[0]).localeCompare(b[0]))

    let letter = data[0][0].charAt(0)
    let output = [letter];

    data.forEach(e => {
        let currLetter = e[0].charAt(0);

        if (letter !== currLetter) {
            output.push(currLetter);
            letter = currLetter;
        }
        output.push(`  ${e[0]}: ${e[1]}`)
    });
    return output.join('\n')
}