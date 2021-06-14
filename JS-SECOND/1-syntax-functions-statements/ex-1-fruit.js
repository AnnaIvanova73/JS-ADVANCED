function solve (typeFr,wGr,priceKg){
    const kg = wGr/1000;
    const price = kg*priceKg;
    return `I need $${price.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${typeFr}. `
}
console.log(solve('orange', 2500, 1.80 ))
console.log(solve('apple', 1563, 2.35 ))