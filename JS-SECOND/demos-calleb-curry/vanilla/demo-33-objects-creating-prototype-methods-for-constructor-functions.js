{
    /* If the method is in constructor function,
    * the problem is that everytime we create a new user
    * we create a copy of this method, so basically we wasting memory
    * the fix for this is to put this method
    * on the parent Object for this users */
    function User(name, interests) {
        this.name = name;
        this.interests = interests;
    }

    User.prototype.greet = function(){
        return "my name is " + this.name + this.interests;
    }
    let me = new User("Pesho", ["cooking", "eating", "exercise"]);
    let you = new User("Ivan", ["books", "eating", "exercise"])

    console.log(me.greet());
    console.log(you.greet())
}