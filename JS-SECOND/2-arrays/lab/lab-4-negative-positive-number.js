function solve (input){
  let result = [];
  input.forEach(a => a < 0 ? result.unshift(a) : result.push(a));
  return result.join("\n")
}
console.log(solve3([3, -2, 0, -1]  ))
console.log()
console.log(solve([3, -2, 0, -1]  ))