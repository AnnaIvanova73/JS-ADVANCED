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
    teaching: ['math','science'],
    sayHello: function (){
         let msg = this.name + " teaches "
        this.teaching.forEach(function(e){
            msg +=e + " "
        });
         return msg
    }
};

Object.setPrototypeOf(teacher,user)
Object.setPrototypeOf(student,user)

student.active = true;

let newMembers = [teacher,student];

newMembers.forEach((e) =>{
    console.log(e.sayHello())
})
