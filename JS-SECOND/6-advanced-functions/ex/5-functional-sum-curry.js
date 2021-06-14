function add(p){
    function curry(p1){
      p +=p1;
      return curry;
    }
    curry.toString = () => p;
    return curry;
}
console.log(add(1))