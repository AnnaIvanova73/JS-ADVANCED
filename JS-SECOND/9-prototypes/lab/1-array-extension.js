function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    Object.defineProperty(this, 'fullName', {
        get() {
            return `${this.firstName} ${this.lastName}`
        },
        set(value) {
            let rgx = /^[a-zA-Z-0-9]+ [a-zA-Z-0-9]+$/;
            if(rgx.test(value)){
                [this.firstName, this.lastName] = value.split(' ');
            }
        }
    });
}


let person = new Person("Peter", "Ivanov");
console.log(person.fullName);
console.log(person.fullName); //Peter Ivanov

person.firstName = "George";

console.log(person.fullName); //George Ivanov

person.lastName = "Peterson";

console.log(person.fullName); //George Peterson

person.fullName = "Nikola Tesla";

console.log(person.firstName); //Nikola

console.log(person.lastName); //Tesla