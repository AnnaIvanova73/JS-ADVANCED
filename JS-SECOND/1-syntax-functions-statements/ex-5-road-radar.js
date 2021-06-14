function solve(km, area) {

    let areaObj = {
        'motorway': (speedLimit = 130) => {
           return km > speedLimit ? findStatus(km, speedLimit) : formMsg(speedLimit)
        },
        'interstate': (speedLimit = 90) => {
            return km > speedLimit ? findStatus(km, speedLimit) : formMsg(speedLimit)
        },
        'city': (speedLimit = 50) => {
            return km > speedLimit ? findStatus(km, speedLimit) : formMsg(speedLimit)
        },
        'residential': (speedLimit = 20) => {
            return  km > speedLimit ? findStatus(km, speedLimit) : formMsg(speedLimit)
        },
    }

    function formMsg(limit, diff , status) {
        return diff === undefined ? `Driving ${km} km/h in a ${limit} zone` : `The speed is ${diff} km/h faster than the allowed speed of ${limit} - ${status}`

    }

    function findStatus(km, limit) {
        const diff = km - limit;
        let status = 'reckless driving';
        if (diff <= 20) {
            status = "speeding"
        } else if (diff > 20 && diff <= 40) {
            status = "excessive speeding"
        }
        return formMsg(limit,diff,status)
    }

    return areaObj[area]()

}

console.log(solve(40, 'city'))
console.log(solve(21, 'residential' ))
console.log(solve(120, 'interstate' ))
console.log(solve(200, 'motorway' ))