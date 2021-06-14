// run into browser

// 1st example
function fly() {
    console.log(this);
}

let hero = {
    name: 'Superman',
    fly: fly,
}

fly();

hero.fly();


// 2st example
function fly() {
    console.log(this);
}

let hero = {
    name: 'Superman',
    fly: fly,
    laserEyes: function() {
        console.log(this.name + ' - Shoot lasers');
        console.log(this)
    },
    stopBulets() {
        console.log(this);
    },
    punch: () => { 
        console.log('Punch');
        console.log(this);
    }
}

hero.laserEyes();
let shootLasers = hero.laserEyes;
shootLasers();
hero.punch()

// example 3 Change function context
function fly(info, second) {
    console.log(`${this.name} is flying!!! ${info}`);
}

let contextObject = {
    name: 'Wonder Woman',
};

fly('With cape'); // global context
fly.call(contextObject, 'With rope');
fly.call({name: 'Pesho'});
fly.apply({name: 'Gosho'}, ['With fork']);

// Using Bind
let wonderWomanFly = fly.bind(contextObject);

wonderWomanFly('With plane');
wonderWomanFly('se taq');

