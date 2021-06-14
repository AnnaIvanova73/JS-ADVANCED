function solve1(arr) {
    let startNum = arr[0]
    return arr.reduce((acc, el) => {
        if (startNum <= el) {
            acc.push(el)
            startNum = el
        }
        return acc
    }, [])
}


function solve(){


    function aggregate (reducerFunc,initialValue){

    }
}
console.log(solve([1,

    3,

    8,

    4,

    10,

    12,

    3,

    2,

    24]));