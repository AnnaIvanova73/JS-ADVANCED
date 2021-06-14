let user = {
    active: true
};

let student = {
    major:"English"
}
let teacher = {
    teaching: ['math','science']
};

Object.setPrototypeOf(teacher,user)
Object.setPrototypeOf(student,user)

student.active = false; //maskin

console.log(teacher.active);
console.log(student.active);
