function solve1(args) {
    let heroes = [];
    args.map(el => el.split(' / ')).
    map(el => heroes.push({name: el[0], level: Number(el[1]),
        items: typeof el[2] !== 'undefined' ? el[2].split(', '):[]}))
    return JSON.stringify(heroes)
}


function solve(args) {
    let data = args.map(el => el.split(' / '));

    let result = data.reduce((acc, el) => {
        let [name, level, ...items] = el;
        level = Number(level);
        items = items.length > 0  ? items[0].split(', '):[];
        acc.push({name, level, items});
        return acc
    }, [])
    return JSON.stringify(result)
}
console.log(solve1(['Isacc / 25  ',

    'Derek / 12 / BarrelVest, DestructionSword',

    'Hes / 1 / Desolator, Sentinel, Antara']))