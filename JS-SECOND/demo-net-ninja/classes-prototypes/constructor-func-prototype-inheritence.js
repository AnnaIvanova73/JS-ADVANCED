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

function Admin(...args) {
    User.apply(this, args);
    this.role = 'super admin';
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function (user) {
        users = users.filter(u => {
           return  u.email !== user.email;
        });
};


var userOne = new User('Stamat', 'stamat@abv.bg');
var userTwo = new User('Gosho', 'gosho@abv.bg');
var admin = new Admin('Pesho', 'pesho@abv.bg');

var users = [userOne,userTwo,admin];

console.log(admin)