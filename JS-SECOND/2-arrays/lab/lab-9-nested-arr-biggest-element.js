
function flatArrFindBiggest (matr){
return Math.max(...matr.flat())
}

function solve2(arr) {
    let flattened = [].concat(...arr);
    return Math.max(...flattened)
}

console.log(flatArrFindBiggest([[20, 50, 10],

    [8, 33,145]] ));
function solve(arr) {


// 1. --->    let flattened = [].concat(...arr);
//     return Math.max(...flattened)

    // 2. return [].concat(...arr).reduce(function(a, b) {
    //return Math.max(a, b);
    //});

    //3. return [].concat.apply([], arr).reduce(function(a, b) {
    //      return Math.max(a, b);
    //      });

    const reduce = arr.reduce((acc, curVal) => {
        return acc.concat(curVal)
    }, []);
    return  Math.max(...reduce);
}

function solve1(arr) {
    // let sdf = [].concat.apply([], arr);
    // console.log(sdf);

    return [].concat(...arr).reduce(function(a, b) {
        return Math.max(a, b);
    });

}
