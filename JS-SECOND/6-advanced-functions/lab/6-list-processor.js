function solve(arr) {
    let currArray = [];
    let obj = {
        add: (prm) => {
            currArray.push(prm)
        },
        remove: (prm) => { currArray = currArray.filter(e => e !== prm) }
        ,
        print: () => {
            console.log(currArray.join(','))
        }
    }

    arr.forEach(e => {
        let [cmd, prm] = e.split(' ');
        obj[cmd](prm);
    })
}
function solve1(arr) {
    let obj = {
        add: (arr, prm) => {
            arr.push(prm)
        },
        remove: (arr, prm) => {arr.forEach((e,i) => {
            if(e === prm){
                arr.splice(i,1)
            }
        }) }
        ,
        print: (arr) => {
            console.log(arr.join(','))
        }
    }
    let currArray = [];
    arr.forEach(e => {
        let [cmd, prm] = e.split(' ');
        obj[cmd](currArray, prm);
    })
}

solve(['add hello', 'add hello','add again', 'remove hello', 'add again', 'print'])
solve(['add pesho', 'add george', 'add peter', 'remove peter','print'] )
