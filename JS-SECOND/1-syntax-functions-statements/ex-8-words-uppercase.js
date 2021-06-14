function solve(param){
    //66 ot 100 greshno
    let arr = param.toUpperCase().split("")
    let word =  arr.reduce((arr1,op) =>{
        let flag = op.charCodeAt(0) > 64 && op.charCodeAt(0) < 91;
        flag ?  arr1 += op :arr1 += ' ';
        return arr1
    },'').replace(/\s+/g, " ");

   return word.split(' ').filter(w => w.length > 0)
       .join(", ")
}

function solve1(text) {

    let result = text.toUpperCase()
        .split(/[\W]+/)
        .filter(w => {
            console.log(w)
            return w.length > 0
        })
        .join(", ");

    console.log(result);
}
function solve2(text) {
    let result = text.toUpperCase()
        .match(/\w+/g)
        .join(', ');

    console.log(result);
}

function wordUpperCase(input) {
    return input.toUpperCase().match(/\w+/gim).join(', ');
}

console.log(solve('Hi, how are you?' ))
console.log(solve1('hello' ))
//console.log(solve('Hi, how are you?' ))
//console.log(solve('hello' ))