function solve(arr) {
    return arr.sort((a,b) => a.localeCompare(b)).map((el,ind)=> `${ind+1}.${el}`).join('\n');
}

console.log(solve(["John", "Bob", "Christina", "Ema"] ));