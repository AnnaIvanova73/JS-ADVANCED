{

    /*Control flow and error handling
    *Wherever you can you should prefer control flow over error handling
    *Control flow - if statements, switches,loops
    * Error handling - you throwing an error
    *  */

    //Error handling
    /*throw new Error() constructor you can use
    different errors there's constructors for different errors*/
    try{
        doesntexist;
    }catch (e){
        console.log(e.message);
    }finally{
        console.log("test")
    }
    function doSomething(){
        throw {error: "Tis broke",code:-1}
    }

    try{
        doSomething()
    }catch (e){
        console.log(e.message);
        console.log("Error");
    }finally{
        console.log("Wrapping things up")
    }
}