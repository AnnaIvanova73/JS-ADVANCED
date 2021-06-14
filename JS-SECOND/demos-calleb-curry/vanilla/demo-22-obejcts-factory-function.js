{
    /*Constructor function is recommended
    * Output:
    User { name: 'Caleb', interests: [ 'cooking', 'eating', 'exercise' ] }
     * */
    function User(name, interests) {
        this.name = name;
        this.interests = interests;
    }
    let me = new User("Caleb", ["cooking", "eating", "exercise"]);

    /*Factory function
    * Output:
    { name: 'Anna', interests: [ 'books', 'eating', 'exercise' ] }
    * */
    function newUser (name,interests) {
        let person = {
            name:name,
            interests:interests
        };
        return person;
    }
    let you = newUser("Anna", ["books", "eating", "exercise"])

    console.log(me)
    console.log(you)
}