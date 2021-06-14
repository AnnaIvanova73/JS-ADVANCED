function solve(data) {
    data = data.map(e => e.split('|'))
        .map(arr => arr.filter(el => el.length !== 0))
        .map(arr => arr.map(el => el.trim()));

    let fixAndParse = (el) =>  Number(Number(el).toFixed(2));
    let [t, lat, long] = data[0];

    data = data.slice(1).reduce((acc, arr) => {
        let obj = ({[t]: arr[0], [lat]:fixAndParse(arr[1]), [long]: fixAndParse(arr[2])});
        acc.push(obj)
        return acc
    },[])
    return JSON.stringify(data)
}

function solve1(input){
    let [columns, ...table] = input.map(splitLine);

    function splitLine(input){
        return input.split('|').filter(x => x !== '')
            .map(x => x.trim()).map(x => isNaN(x) ? x : Number(Number(x).toFixed(2)))
    }

    return JSON.stringify(table.map(entry =>{
        return columns.reduce((acc, curr, index) => {
            acc[curr] = entry[index];
            return acc;
        }, {})
    }))

}

console.log(solve(['| Town | Latitude | Longitude |',

    '| Sofia | 42.696552 | 23.32601 |',

    '| Beijing | 39.913818 | 116.363625 |'] ))

function solve1(data) {
    data = data.map(e => e.split('|'))
        .map(arr => arr.filter(el => el.length !== 0))
        .map(arr => arr.map(el => el.trim()));


    let [t, lat, long] = data[0];

    data = data.slice(1).reduce((acc, arr) => {
        let num1 =Number( Number(arr[1]).toFixed(2))
        let num2 = Number(Number(arr[2]).toFixed(2))
        let obj = ({[t]: arr[0], [lat]:num1, [long]: num2 })
        acc.push(obj)
        return acc
    }, [])
    return JSON.stringify(data)
}

