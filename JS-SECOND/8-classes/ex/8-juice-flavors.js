function solve(param) {
    let mapToObj = (string) => {
        let [fruit, quantity] = string.split(' => ');
        quantity = Number(quantity);
        return {fruit, quantity};
    };

    return param.map(e => mapToObj(e)).reduce((diff, resultElement, index) => {
        let currObj = diff.filter(e => e.fruit === resultElement.fruit)[0];

        if (typeof currObj === 'undefined') {
            diff.push(resultElement);
        } else {
            currObj.quantity += resultElement.quantity;
        }

        currObj = diff.filter(e => e.fruit === resultElement.fruit)[0];

        if (Math.trunc(currObj.quantity / 1000) > 0) {

            let bottles = Math.trunc(currObj.quantity / 1000);

            if (!currObj.hasOwnProperty('bottles')) {
                currObj.bottles = bottles;
                currObj.place = index;
            } else {
                currObj.bottles += bottles;
            }

            if (Math.trunc(currObj.quantity % 1000) > 0) {
                currObj.quantity = Math.trunc(currObj.quantity % 1000);
            }

        }
        return diff;
    }, []).filter(e => e.hasOwnProperty('bottles')).sort((a, b) => a.place - b.place).map(e => `${e.fruit} => ${e.bottles}`).join('\n');
}



console.log(solve(['Orange => 2000',

    'Peach => 1432',

    'Banana => 450',

    'Peach => 600',

    'Strawberry => 549']));
console.log()
console.log(solve(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']));
console.log()
console.log(solve(['Kiwi => 234',

    'Pear => 2345',

    'Watermelon => 3456',

    'Kiwi => 4567',

    'Pear => 5678',

    'Watermelon => 6789']));

// param = param.map(e => mapToObj(e));
//     const res = Array.from(param.reduce(
//         (m, {fruit, quantity}) => m.set(fruit, (m.get(fruit) || 0) + quantity), new Map
//     ), ([fruit, quantity]) => ({fruit, quantity}));

/*
function solve(param) {

    let mapToObj = (string) => {
        let [fruit, quantity] = string.split(' => ');
        quantity = Number(quantity);
        return {fruit, quantity};
    }

    let diff = [];
    let result = param.map(e => mapToObj(e));
    let index = 1;
    for (const resultElement of result) {
        let currObj = diff.filter(e => e.fruit === resultElement.fruit)
        if (currObj.length === 0) {
            diff.push(resultElement)
        } else {
            currObj[0].quantity += resultElement.quantity;
        }
        currObj = diff.filter(e => e.fruit === resultElement.fruit)[0];
        if(Math.trunc(currObj.quantity / 1000) > 0){
            let bottles = Math.trunc(currObj.quantity / 1000);
            if(!currObj.hasOwnProperty('bottles')){
                currObj.bottles =bottles;
                currObj.place = index;
                index++;
            }else{
                currObj.bottles+= bottles;
            }

            if(Math.trunc(currObj.quantity % 1000) > 0){
                currObj.quantity =  Math.trunc(currObj.quantity % 1000)
            }
        }

    }


    return result.filter(e => e.hasOwnProperty('bottles')).sort((a, b) => a.place - b.place).map(e => `${e.fruit} => ${e.bottles}`).join('\n');
}
 */

/*
function solve(param) {

    let mapToObj = (string) => {
        let [fruit, quantity] = string.split(' => ');
        quantity = Number(quantity);
        return {fruit, quantity};
    };

    let result = param.map(e => mapToObj(e));

    return result.reduce((diff, resultElement, index) => {
        let currObj = diff.filter(e => e.fruit === resultElement.fruit);

        if (currObj.length === 0) {
            diff.push(resultElement)
        } else {
            currObj[0].quantity += resultElement.quantity;
        }
        currObj = diff.filter(e => e.fruit === resultElement.fruit)[0];

        if (Math.trunc(currObj.quantity / 1000) > 0) {
            let bottles = Math.trunc(currObj.quantity / 1000);
            if (!currObj.hasOwnProperty('bottles')) {
                currObj.bottles = bottles;
                currObj.place = index;
                index++;
            } else {
                currObj.bottles += bottles;
            }

            if (Math.trunc(currObj.quantity % 1000) > 0) {
                currObj.quantity = Math.trunc(currObj.quantity % 1000)
            }
        }
        return diff;
    }, []).filter(e => e.hasOwnProperty('bottles')).sort((a, b) => a.place - b.place).map(e => `${e.fruit} => ${e.bottles}`).join('\n');
}
 */