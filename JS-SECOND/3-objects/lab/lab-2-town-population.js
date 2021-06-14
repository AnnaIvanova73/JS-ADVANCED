function solve1(arr) {

    let obj = arr.reduce((acc, curr) => {
        let [name, population] = curr.split(' <-> ');
        population = Number(population)
        if (acc.hasOwnProperty(name)) {
            population += acc[name];
        }
        acc[name] = population;

        return acc;
    }, {});


    function printKeyAndValue(param) {
        console.log(`${param[0]} : ${param[1]}`)
    }
    return obj
}

function solve(arr) {

    let arrEntries = arr.map(curr => curr.split(' <-> '))
    const objFromEntries = Object.fromEntries(arrEntries) // Презаписва стойността на ключа
    console.log(objFromEntries)

}

console.log(solve1(['Istanbul <-> 100000',

    'Honk Kong <-> 2100004',

    'Jerusalem <-> 2352344',

    'Mexico City <-> 23401925',

    'Istanbul <-> 1000']))
/*

    Object.entries(obj).map(printKeyAndValue);
    // ------------- expr
    let ownPropertyNames = Object.getOwnPropertyNames(obj);
    let ownPropertyNamess = Object.is(null,null
);
    //console.log(ownPropertyNamess)
 */