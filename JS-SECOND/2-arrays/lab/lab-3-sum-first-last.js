function solve (arr){
    //let result = Number(arr.shift()) + Number(arr.pop());

    return arr.map(Number).fill(0,1,arr.length -1).reduce((acc,val) => acc + val)
}
console.log(solve(['20', '30','40'] ))
console.log(solve(['5', '10']  ))