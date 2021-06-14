// function solve(p1,p2,p3){
//     let sumLength = p1.length + p2.length + p3.length;
//     let avgLength = Math.floor(sumLength /3);
//     return `${sumLength}\n${avgLength}`
// }
let b = (...arg) => {
            let sumLength = arg[0].length + arg[1].length + arg[2].length;
            let avgLength = Math.floor(sumLength / arg.length);
            return `${sumLength}\n${avgLength}`
         }
console.log(b('chocolate', 'ice cream', 'cake'))