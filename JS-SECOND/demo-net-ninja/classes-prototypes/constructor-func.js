function User(email, name) {
    this.email = email;
    this.name = name;
    this.online = false;
}

User.prototype.login = function () {
    this.online = true;
    console.log(this.email + ' has logged in');
}
User.prototype.logout = function () {
    this.online = false;
    console.log(this.email + ' has logged out');
}

let userOne = new User('Stamat', 'stamat@abv.bg');
let userTwo = new User('Gosho', 'gosho@abv.bg');
console.log(userOne);
userTwo.login()
userOne.logout()