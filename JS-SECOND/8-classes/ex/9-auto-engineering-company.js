function solve(prmArr) {
    function mapObjectToString(object) {
        let arrPrint = object.models.map(e => `###${e.name} -> ${e.producedCars}`)
        arrPrint.unshift(object.carBrand);
        return arrPrint.join('\n');
    }

   return prmArr.reduce((result,e) => {
        let [carBrand, model, producedCars] = e.split(' | ');
        producedCars = Number(producedCars);
        let currObj = result.filter(e => e.carBrand === carBrand);

        if (currObj.length === 0) {
            result.push({carBrand, models: []})
        }

        currObj = result.filter(e => e.carBrand === carBrand);
        let currModel = currObj[0].models.filter(e => e.name === model);

        if (currModel.length === 0) {
            currObj[0].models.push({name: model, producedCars});
        } else {
            currModel[0].producedCars += producedCars;
        }

        return result;
    },[]).map(mapObjectToString).join('\n');
}

console.log(solve([
    'Mini | Clubman | 20000',
    'Mini | Clubman | 1000',
]))

/*
function solve(prmArr) {
    let result = [];

    prmArr.forEach(e => {
        let [carBrand, model, producedCars] = e.split(' | ');
        producedCars = Number(producedCars);

        let currObj = result.filter(e => e.carBrand === carBrand);
        if (currObj.length === 0) {
            result.push({carBrand, models: []})
        }
        currObj = result.filter(e => e.carBrand === carBrand);
        let currModel = currObj[0].models.filter(e => e.name === model);
        console.log()
        if (currModel.length === 0) {
            currObj[0].models.push({name: model, producedCars});
        } else {
            currModel[0].producedCars += producedCars;
        }


        return result;

    });
    function mapObjectToString(object) {
        let arrPrint = object.models.map(e => `###${e.name} -> ${e.producedCars}`)
        arrPrint.unshift(object.carBrand);
        return arrPrint.join('\n');
    }
    return result.map(mapObjectToString).join('\n');
}
 */

/*
function solve(prmArr) {

    let result = [];
    prmArr.forEach(e => {
        let [carBrand, model, producedCars] = e.split(' | ');

        if (!result[carBrand]) {
            result[carBrand] = [];
        }
        if (!result[carBrand][model]) {
            result[carBrand][model] = 0;
        }
        result[carBrand][model] += Number(producedCars);
        return result;

    }, [])

    function getObjPerPrint(obj) {
        let arr = [];
        Object.entries(obj).forEach(([key, value]) => {
            arr.push(key);
            value.map(e => arr.push(`${e.key}: ${e.value}`))
        })
        return arr.join('\n');
    }

    let arr = [];
    for (const accElement in result) {
        if (typeof accElement !== 'undefined') {
            arr.push(accElement)
        }
        if (typeof result[accElement] !== 'undefined') {
            for (const model in result[accElement]) {
                arr.push(`###${model} -> ${result[accElement][model]}`)
            }

        }

    }
    return arr.join('\n');
}
 */