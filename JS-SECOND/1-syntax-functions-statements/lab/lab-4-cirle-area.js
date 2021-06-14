let circleArea = (param) => {
    function calculateCircleArea(param) {
        let result = (param ** 2) * Math.PI;
        console.log(result.toFixed(2));
    }
    let currType = typeof param;
    return currType.toString() === 'number' ? calculateCircleArea(param) : `We can not calculate the circle area, because we receive a ${currType}.`;
}
let circleArea1 = (param) =>{
    function calculateCircleArea(param) {
        let result = Math.pow(param,2) * Math.PI;
        return result.toFixed(2);
    }
    return typeof param === "number" ? calculateCircleArea(param): `We can not calculate the circle area, because we receive a ${typeof param}.`;
}
console.log(circleArea())
console.log(circleArea1())