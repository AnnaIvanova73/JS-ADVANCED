function solve(params) {

    let storageEngines = {
        smallEngine: {power: 90, volume: 1800},
        normalEngine: {power: 120, volume: 2400},
        monsterEngine: {power: 200, volume: 3500},
    };
    let storageCarriages = {
        hatchback: {type: "hatchback", color: null},
        coupe: {type: "coupe", color: null},
    };

    let smallest = params.power;
    let engine = Object.values(storageEngines).reduce((acc, el) => {
        const diff = Math.abs(params.power - el.power);
        if (diff <= smallest) {
            acc = el;
            smallest = diff;
        }
        return acc;
    }, {})

    let getWheels = (obj) => {
        let arr = [];
        let wheels = Math.floor(obj.wheelsize)
        wheels = wheels % 2 === 0 ? wheels - 1 : wheels;
        arr.splice(0, 0, wheels, wheels, wheels, wheels)
        return arr;
    };

    let model = params.model;
    const carriage = storageCarriages[params.carriage]
    carriage.color = params.color;
    const wheels = getWheels(params);

    return {model, engine, carriage, wheels}
}



function carFactory(model) {

    let small_engine = { power: 90, volume: 1800 }
    let normal_engine = { power: 120, volume: 2400 }
    let monster_engine = { power: 200, volume: 3500 }
    let hatchback = { type: 'hatchback', color: model.color }
    let coupe = { type: 'coupe', color: model.color };

    let result = { model: model.model}

    if(model.power > 160) {
        result.engine = monster_engine;
    }

    if (model.power <= 105) {
        result.engine = small_engine;
    }

    if (model.power > 105 && model.power <= 160)  {
        result.engine = normal_engine;
    }
    if(hatchback.type == model.carriage) {
        result.carriage = hatchback

    } else {
        result.carriage = coupe
    }

    if (model.wheelsize % 2 == 0) {
        model.wheelsize -= 1;
    }
    result.wheels = [model.wheelsize, model.wheelsize, model.wheelsize, model.wheelsize];

    return result
}
console.log(carFactory( {
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));
// "C:\Program Files\nodejs\node.exe" F:\JS-SECOND\3-objects\lab-3-car-factory.js
// {
//     model: 'VW Golf II',
//         engine: { power: 90, volume: 1800 },
//     carriage: { type: 'hatchback', color: 'blue' },
//     wheelsize: [ 14, 14, 14, 14 ]
// }


/*
function solve(params) {
    let findDiff = (available, wantedPower) => {
        return [wantedPower - available.power, available];
    };

    let storageEngines = {
        smallEngine: {power: 90, volume: 1800},
        normalEngine: {power: 120, volume: 2400},
        monsterEngine: {power: 200, volume: 3500},
    };
    let storageCarriages = {
        hatchback: {type: "hatchback", color: null},
        coupe: {type: "coupe", color: null},
    };

    let smallest = params.power;
    let engine  = Object.values(storageEngines).reduce((acc, el) => {

        let [diff, engine] = (findDiff(el, params.power));

        if (Math.abs(diff) <= smallest) {
            acc = engine;
            smallest = diff;
        }
        return acc;
    }, {})

    let getWheels = (obj) => {
        let arr = [];
        let wheels = Math.floor(obj.wheelsize)
        wheels = wheels % 2 === 0 ? wheels - 1 : wheels;
        arr.splice(0, 0, wheels, wheels, wheels, wheels)
        return arr;
    };

    let model = params.model;
    const carriage = storageCarriages[params.carriage]
    carriage.color = params.color;
    const wheels = getWheels(params);

    return {model, engine, carriage, wheels}
}
 */

/*
function solve(params) {
    let findDiff = (available, wantedPower) => {
        return [wantedPower - available.power, available];
    };

    let storageEngines = {
        smallEngine: {power: 90, volume: 1800},
        normalEngine: {power: 120, volume: 2400},
        monsterEngine: {power: 200, volume: 3500},
    };
    let storageCarriages = {
        hatchback: {type: "hatchback", color: null},
        coupe: {type: "coupe", color: null},
    };

    let smallest = params.power;
    let engine = Object.values(storageEngines).reduce((acc, el) => {
        let [diff, engine] = (findDiff(el, params.power));

        if (Math.abs(diff) <= smallest) {
            acc = engine;
            smallest = diff;
        }
        return acc;
    }, {})

    let getWheels = (obj) => {
        let arr = [];
        let wheels = Math.floor(obj.wheelsize)
        wheels = wheels % 2 === 0 ? wheels - 1 : wheels;
        arr.splice(0, 0, wheels, wheels, wheels, wheels)
        return arr;
    };

    let car = {};
    car.model = params.model;
    car.engine = engine;

    const carriages = storageCarriages[params.carriage]
    carriages.color = params.color;
    car.carriage = carriages

    car.wheels = getWheels(params);

    return car
}
 */

/*
function solve(params) {
    let findDiff = (available, wantedPower) => {
        return [wantedPower - available.power, available];
    };

    let storageEngines = {
        smallEngine: {power: 90, volume: 1800},
        normalEngine: {power: 120, volume: 2400},
        monsterEngine: {power: 200, volume: 3500},
    }
    let storageCarriages = {
        hatchback: {type: "hatchback", color: null},
        coupe: {type: "coupe", color: null},
    }

    let smallest = Number.MAX_SAFE_INTEGER;
    let engine = Object.values(storageEngines).reduce((acc, el) => {
        let [diff, engine] = (findDiff(el, params.power))
        if (Math.abs(diff) <= smallest) {
            acc = engine;
            smallest = diff;
        }
        return acc
    }, {})

    let getWheels = (obj) => {
        let arr = [];
        let wheels = Math.floor(obj.wheelsize)
        wheels = wheels % 2 === 0 ? wheels - 1 : wheels;
        arr.splice(0, 0, wheels, wheels, wheels, wheels)
        return arr;
    }

    let car = {};
    car.model = params.model;
    car.engine = engine;
    const color = params.color;
    const carriages = storageCarriages[params.carriage]
    carriages.color = color;
    car.carriage = carriages
    car.wheels = getWheels(params);
    return car
}
 */