/*
Inheritance allows one object to take parts of another object and inherit them as their own.
This is done in JavaScript by whats know as a prototype, so a prototype is just an object,
that another object inherits from.
One way to save memory is, people will put methods-objects for a constructor on the prototype,
that's because that prototype is going to be given to that new object that's being created
with a constructor and having only one object than numerous objects references as their prototype
is going to prevent the duplication of a method over and over again in each object
 */
// Prototype Inheritance
// Prototypes and Constructors
{

    let me = { // object literal
        name:"Cale"
    };

    //new Object ()
    //Object.prototype

    let x = new Object ();
    Object.getPrototypeOf(x);
    console.log(Object.getPrototypeOf(x))
}