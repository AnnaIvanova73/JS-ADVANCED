let user = {
    active: false,
    sayHello: function (){
        return this.name + "says hi!"
    }
};

let student = {
    name:"Peasant student",
    major:"English"
}
let teacher = {
    name:"Caleb Curry",
    teaching: ['math','science']
};

Object.setPrototypeOf(teacher,user)
Object.setPrototypeOf(student,user)

student.active = true;

console.log(teacher.active);
console.log(student.active);

console.log(teacher.sayHello());
console.log(student.sayHello());
