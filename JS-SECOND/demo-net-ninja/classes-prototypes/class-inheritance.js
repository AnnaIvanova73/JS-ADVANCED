class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.score = 0;
    }

    login() {
        console.log(this.email + ' just logged in');
        return this;

    }

    logout() {
        console.log(this.email + ' just logged out');
        return this;
    }

    updateScore() {
        this.score += 1;
        console.log(this.email + ' score is now ' + this.score);
        return this;
    }
}

let userOne = new User('Stamat', 'stamat@abv.bg');
let userTwo = new User('Gosho', 'gosho@abv.bg');
let users = [userOne, userTwo];

class Admin extends User{ // if we don't have a constructor, then will just use parent object constructor
    deleteUser(user) {
        users = users.filter(u=> {
           return  u.email !== user.email;
        });
    }
}



let admin = new Admin('Pesho','pesho@abv.bg');
users.push(admin);

console.log(users);
admin.deleteUser(userTwo);
console.log(users);


