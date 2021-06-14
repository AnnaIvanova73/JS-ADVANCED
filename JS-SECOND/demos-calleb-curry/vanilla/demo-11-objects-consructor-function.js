{
    /*
    Objects describe entities
    use constructor function to create objects,
    constructors function i equivalent to classes
    Classes are syntactics sugar
     */

    //CONSTRUCTOR FUNCTION EXAMPLE
    //Is not always recommended to put methods-objects in constructor function it will,
    // that's going to copy the method for every single object
    //THERE'S NO RETURN
    function User(name, interests) {
        this.name = name;
        this.interests = interests;
    }

    let me = new User("Caleb", ["cooking", "eating", "exercise"]);  /* Inside JS when you call a function
    as a constructor/prefix it with new keyword,
    then inside of the function the key word
     "this" refers to that new Object we're creating.
    */
    let you = new User("Anna", ["books", "eating", "exercise"])
    me.membership = "Gold"
    console.log(me)
    console.log(you)

}