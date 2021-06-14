function solve (arr){
return arr.filter((el,indx) => indx % 2 ===0 ).join(' ')
}
console.log(solve(['20', '30', '40', '50', '60'] ))

//function solve(args) {
//     let evenArr = [];
//     for (let i = 0; i < args.length; i++) {
//         if (i % 2 === 0) {
//             evenArr.push(args[i])
//         }
//     }
//     return evenArr.join(' ')
// }