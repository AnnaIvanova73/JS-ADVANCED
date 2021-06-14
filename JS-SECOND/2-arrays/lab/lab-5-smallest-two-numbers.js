function solve(arr){
return arr.sort((a,b) => a-b).slice(0,2).join(" ").trim()
}
console.log(solve([30, 15, 50, 5] ));

function solve1(arr) {

    function dr(arr) {
        let arr2 = [];
        for (let i = 0; i < 2 ; i++) {
            let number = Math.min(...arr);
            const index = arr.indexOf(number);
            arr.splice(index,index+1)
            arr2.push(number)
        }

        return arr2

    }

    return dr(arr)
}