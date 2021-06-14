{

    function doStuff(input, input2) {
        console.log(input, input2);
        console.log(this);
    }

    /*CALL AND APPLY променят стойността на функцията временно в момента, в който я извикаме
     CALL AND APPLY changed the value of "this" right when you're invoking the function
     */
    doStuff.call("hello", 5, 10)
    /* doStuff.call("hello", 5, 10)  Calls a method of an object, substituting another object for the current object.
     Params:
     thisArg – The object to be used as the current object.
     argArray – a LIST of arguments to be passed to the method. */

    doStuff.apply("hello", [5, 10])
    /*  doStuff.apply("hello", 5, 10)
Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.
Params:
thisArg – The object to be used as the this object.
argArray – a SET of arguments to be passed to the function.
     */
}