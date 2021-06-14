function solve (p1,p2){
    const start = Number(p1);
    const end = Number(p2);
    let result = 0;
    for (let i = start; i <= end ; i++) {
        result += i;
    }
    return result;
}
console.log(solve('-8','20'))