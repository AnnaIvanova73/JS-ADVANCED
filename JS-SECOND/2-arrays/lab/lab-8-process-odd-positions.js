function solve(arr){
return arr.filter((_,indx) => indx % 2 !== 0).reduce((acc,val) => [...acc,val*2] ,[]).reverse();
}
function solve1(arr){
    return arr.filter((_,indx) => indx % 2 !== 0).reduce((acc,val) => {
        let sum = val* 2;
        acc.push(sum)
        return acc},[]).reverse();
}

//function solve(arr) {
//     return arr
//         .filter((_, i) => i % 2 !== 0)
//         .map(x => x * 2)
//         .reverse()
// }
console.log(solve([10, 15, 20, 25]))