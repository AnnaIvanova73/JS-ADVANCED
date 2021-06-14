let squareOfStars = (count = 5) =>{
    const row =  '* '.repeat(count).trim();
    return `${row}\n`.repeat(count).trim()
}
function print (param){
    let s = '';
    for (let i = 0; i < param ; i++) {
        s += "* ".repeat(param).trim()
        s += "\n";
        // console.log("* ".repeat(param));
    }
    console.log(s);
}
function print1 (param){

    for (let i = 0; i < param ; i++) {
        console.log("* ".repeat(param));
    }
}

console.log(squareOfStars())
console.log(squareOfStars(2))