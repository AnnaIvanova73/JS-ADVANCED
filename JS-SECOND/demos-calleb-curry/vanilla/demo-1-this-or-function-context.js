{
    //x(5,10) implicit arguments
    //x(5,10,this) where this is invisible/implicit argument -> "this" is passed in implicitly
    // in a function body

    function y(a, b) {
        console.log(this); // here is global object i browsers is window object
    }

    /*
    1. "this" is passed to the function as an argument implicitly
    2. the value of "this" changes based on how we call the function
    3. most of the time "this" is gonna to refer to an Object that has a method on it.
     */


    function x(a, b) {
        console.log(this); // here is global object i browsers is window object
    }

    //1.standard use as a method
    // if function x is attached to an object this will point to that object  dog.x();
    let me = {
        name: 'Caleb',
        test: function () {
            console.log("1.")
            console.log(this.name);// this is how method refer to the object that is attached to
        }
    }
   me.test() // 'Caleb'

    let me1 = {
        name: 'Caleb',
        outputMe: function () {
            console.log("2.")
            console.log(this)
        }
    }

    me1.outputMe();// the Object me1 (method)

// 2. function is not in an object and "this" changes depending of how we call the function
    let me2 = {
        name: 'Caleb',
        outputMe: outputMe1
    }

    function outputMe1() {
        console.log("3.")
        console.log(this)
    }


    // 3. "this" will give different output in strict mode
    function outputMeStrict() {
        'use strict';
        console.log("4.")
        console.log(this);
    }

    me2.outputMe();// invoke as method -> an object
    outputMe1(); // invoke as function -> window object
    outputMeStrict(); // invoke function strict mode-> undefined

    //4. When you call a function as a constructor, the value of "this" refers to the new Object that's being created

    function Person() {
        console.log("5.")
        console.log(this) // Person{}
        this.name = 'Caleb';
        console.log("6.")
        console.log(this) // Person {name: 'Caleb'}
    }

    let person = new Person();
}