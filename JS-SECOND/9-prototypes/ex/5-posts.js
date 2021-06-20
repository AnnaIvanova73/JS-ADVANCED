function solution(){
    class Employee {
        constructor(name,age){
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = [];
        }

        getSalary(){
        return this.salary;
        }
        work (){
            let task = this.tasks.shift();
           console.log(`${this.name} ${task}`);
            this.tasks.push(task);
        }
        collectSalary(){
           console.log(`${this.name} received ${this.getSalary()} this month.`)
        }
    }

    class Junior extends Employee{
        constructor(name,age){
            super(name,age);
            super.tasks = [`is working on a simple task.`]
        }
    }

    class Senior extends Employee{
        constructor(name,age){
            super(name,age,);
            super.tasks = [`is working on a complicated task.`,
                `is taking time off work.`,
                `is supervising junior workers.`,
            ];
        }
    }
    class Manager extends Employee{
        constructor(name,age){
            super(name,age);
            super.tasks = [`scheduled a meeting.`,
                `is preparing a quarterly report.`]
            this.dividend = 0;
        }
        getSalary(){
        return  this.salary += this.dividend;
        }
    }

    return {Employee,Junior,Senior,Manager}
}


let a = solution();
const junior = new a.Junior('Ivan',25);
junior.work();
junior.work();
junior.salary = 5811;
junior.collectSalary();
const sinior = new a.Senior('Alex', 31);
sinior.work();
sinior.work();
sinior.work();
sinior.work();
sinior.salary = 12050;
sinior.collectSalary();
const manager = new a.Manager('Tom', 55);
manager.salary = 15000;
manager.collectSalary();
manager.dividend = 2500;
manager.collectSalary();