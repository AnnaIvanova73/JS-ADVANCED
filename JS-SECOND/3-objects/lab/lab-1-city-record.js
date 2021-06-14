function solve1(...arr) {

    return {
        name: arr[0],
        population: arr[1],
        treasury: arr[2],
    }

}
function solve2(...arr) {
let [name,population,treasury] = [...arr];
    return {
        name: name,
        population: population,
        treasury: treasury,
    }

}
function solve(...arr) {
    let [name,population,treasury] = [...arr];
    return { name,population,treasury,}
}

console.log(solve('Tortuga',

    7000,

    15000))