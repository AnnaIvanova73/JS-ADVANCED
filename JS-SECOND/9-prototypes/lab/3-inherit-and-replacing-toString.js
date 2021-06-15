function toStringExtension() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }
        toString(){
            return `${this.constructor.name} (name: ${this.name}, email: ${this.email})`
        }
    }

    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }
        toString(){
            return super.toString().slice(0,-1) + `, course: ${this.course})`
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }
        toString(){
            return super.toString().slice(0,-1) + `, subject: ${this.subject})`
        }
    }

    return {
        Person,
        Student,
        Teacher
    }
}
let person = new Person('a','b');
let t = new Teacher('a','b','tea');
let s = new Student('a','b','sty');
console.log(person.toString())
console.log(t.toString())
console.log(s.toString())

