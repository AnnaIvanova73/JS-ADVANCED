{
    /* BIND gives you a new function, where the value of this is permanently changed

    * For a given function, creates a bound function that has the same body as the original function.
    * The this object of the bound function is associated with the specified object,
    * and has the specified initial parameters.
    * Params:
    * thisArg – An object to which the this keyword can refer inside the new function.
    * argArray – A list of arguments to be passed to the new function.

  */

    function doStuff(input, input2) {
        console.log(input, input2);
        console.log(this);
    }

    // let newFunction = doStuff.bind("hello", 5, 10) // this create new function

    let me = {name: 'Caleb'}
    let newFunction = doStuff.bind(me, 5, 10)
    newFunction();
    console.log(newFunction)

}