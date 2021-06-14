function sortArray(...params) {
    let [arr, arg] = params;
    let sorting = (sortType) => {
       return  sortType === 'asc' ? arr.sort((a,b) => a-b) : arr.sort((a,b) => b-a)
    }
   return sorting(arg);
}

console.log(sortArray([14, 7, 17, 6, 8], 'asc'));
console.log(sortArray([14, 7, 17, 6, 8], 'desc' ));

function solve(array,sortParameters) {
    return sortParameters === 'asc' ? array.sort((a,b) => a-b) : array.sort((a,b) => b-a);
}
