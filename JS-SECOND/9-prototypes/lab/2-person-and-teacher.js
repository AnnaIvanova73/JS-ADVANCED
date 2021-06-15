function personAndTeacher() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }
    }

    return {
        Person,
        Teacher
    }
}

// let person = new Person('Anna', 'annaEmail');
// let teacher = new Teacher('Megi', 'megiMeil', 'subject')
// console.log(person)
// console.log(teacher)

// function personAndTeacherr() {
//     function Person(name, email) {
//         this.name = name;
//         this.email = email;
//     }
//
//     function Teacher(name, email, subject) {
//         Person.call(this, name, email)
//         this.subject = subject;
//     }
//
//     return {
//         Person,
//         Teacher
//     }
// }
// let a = personAndTeacherr();
// let b = personAndTeacher();
// console.log(a.Person)
// console.log(b.Person)