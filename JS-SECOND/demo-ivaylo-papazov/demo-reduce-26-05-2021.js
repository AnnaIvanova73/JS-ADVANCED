/* Условие: Всяко число на нечетна позиция да се умножи по две, да се върне масив от променените числа, които е обърнат
---> На един ред с масив
let numbers = [20,10,5,30,8]
function solve(arr){
return arr.filter((_,indx) => indx % 2 !== 0).reduce((acc,val) => [...acc,val*2] ,[]).reverse();
}
--> вместо
function solve1(arr){
    return arr.filter((_,indx) => indx % 2 !== 0).reduce((acc,val) => {
        let sum = val* 2;
        acc.push(sum)
        return acc},[]).reverse();
}
 */

let numbers = [20,10,5,30,8]

//Find Sum
//Изнесена
function sumNumbers (acc,curr){
    return acc + curr;
}

let sum = numbers.reduce(sumNumbers,0);

//Анонимна функция
let sum2 = numbers.reduce(function (acc,curr){
    return acc + curr;
},0);

//Arrow функция

let sum3 = numbers.reduce((acc,curr) => {
    return acc + curr;
},0)

let sum4 = numbers.reduce((acc,curr) => acc + curr,0)


//Find Avg (1+2+3+4)/4 || 1/4 + 2/4 + 3/4 + 4/4

// 1 first
let avg = numbers.reduce((acc,curr, currIndex, arrRef) => {
return acc + curr /arrRef.length;
},0);

// 2 first

// avg = numbers.reduce((acc,curr,index,array) =>{
//     acc += curr
//     return index === array.length -1 ? acc / array.length : acc;
// },0)

// Filter

let oddNumbers = numbers.reduce((acc,curr) => {
    if(curr % 2 === 0){
        acc.push(curr);
    }
    return acc
},[])

console.log(avg)