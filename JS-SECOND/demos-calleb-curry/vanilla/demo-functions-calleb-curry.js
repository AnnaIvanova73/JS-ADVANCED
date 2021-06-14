{
    function pow (x,y){

        let total = 1;
        for (let i = 0; i < y; i++) {
            total *=x;
        }
        pow.text = "im function"; // property of the object function pow
        return total;
    }

    let coolFunctions = [pow]; // adding functions to an array
    console.log(coolFunctions[0](3,3))

    let mathFunctions = {
      power:pow
    };

    console.log(mathFunctions.power(3,3) + " function as method in object")


    pow.description = "Will raise numbers to a power" /* we can add properties to functions -> functions are objects i can give them a property*/
    console.log(pow.description);
    console.log(pow.text);

    //callback

    function callbackExample (callback){
        return callback(3,5)
    }
    console.log(callbackExample(pow))

    function returnAFunction (){
        return pow;
    }
    console.log(returnAFunction()(10,3))


}