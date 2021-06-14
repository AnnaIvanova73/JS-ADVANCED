function solve (obj){
    let changeWaterLevels = (obj) => {
        const waterAmount = obj.weight * 0.1;
        obj.levelOfHydrated += waterAmount * obj.experience
        obj.dizziness = false;
        return obj;
    }

    return obj.dizziness === true ? changeWaterLevels(obj) : obj;
}

console.log(solve({ weight: 120,

    experience: 20,

    levelOfHydrated: 200,

    dizziness: true }  ))