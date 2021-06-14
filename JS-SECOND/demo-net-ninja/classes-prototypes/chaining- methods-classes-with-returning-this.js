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

userOne.login().updateScore().updateScore();



/* class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.score = 0;
    }

    login() {
        return this.email + ' just logged int';
    }

    logout() {
        return this.email + ' just logged out';
    }

    updateScore() {
        this.score += 1;
        return this.email + ' score is now ' + this.score;
    }
}

let userOne = new User('Stamat', 'stamat@abv.bg');
let userTwo = new User('Gosho', 'gosho@abv.bg');

console.log(userOne.login());
console.log(userOne.logout());
console.log(userTwo.logout());

console.log(userOne.updateScore());
console.log(userOne.updateScore());
console.log(userOne.updateScore());
console.log(userTwo.updateScore()); */