function solve(pies, firstPie, lastPie) {
    let firstPieIndex = pies.indexOf(firstPie);
    let lastPieIndex = pies.indexOf(lastPie);

    let resultPies = pies.slice(firstPieIndex, lastPieIndex + 1);

    return resultPies;
}

let result = solve(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
);

console.log(result);