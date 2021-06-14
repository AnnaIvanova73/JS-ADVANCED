function solve (arr){
 return arr.reduce((acc,el,indx,array) =>{
     indx % 2 !== 0 ? acc[array[indx -1]] = Number(el) : acc // dont work direct return
     return acc
    },{})
}
//     // if(indx % 2 !== 0){
//      //     acc[array[indx -1]] = el
//      // }
//
//     // return acc;
console.log(solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'] ))