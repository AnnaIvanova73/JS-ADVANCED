function piePieces(list,startElement,endElement) {
    const startIndex = list.indexOf(startElement);
    const endIndex = list.indexOf(endElement);
    return list.slice(startIndex,endIndex+1)
}

function solve (arg1,arg2,arg3){

    let startIndex = -1;
    let endIndex = -1;

    for (let i = 0; i < arg1.length; i++) {

        if (arg1[i] === arg2) {
            startIndex = i;

        }

    }

    for (let i = 0; i < arg1.length; i++) {

        if (arg1[i] === arg3) {
            endIndex = i + 1;

        }

    }
    return arg1.slice(startIndex,endIndex);

}
console.log(piePieces(['ant','leo', 'bison', 'ant', 'duck', 'bison'],

    'ant',

    'bison' ))

console.log(solve(['ant','leo', 'bison', 'ant', 'duck', 'bison'],

    'ant',

    'bison' ))