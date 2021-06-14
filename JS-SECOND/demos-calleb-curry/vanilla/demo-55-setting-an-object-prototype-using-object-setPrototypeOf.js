let user = {
    active: true
};

let teacher = {
  teaching: ['math','science']
};

Object.setPrototypeOf(teacher,user)
console.log(teacher);