function solve1(arr) {
    const first = arr.map(row => row.reduce((a, v) => a + v, 0));

    const sec = arr.reduce((acc, val, i) => {

        acc.push( arr.reduce((a, v) => {
            console.log(v[i])
            return a + v[i]
        },0) );

        return acc
    }, []);

    return first.concat(sec).every(x => x === first[0])

}

console.log(solve1(
    [[4, 5, 6],

        [6, 5, 4],

        [5, 5, 5]] ));