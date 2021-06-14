function cityTaxes(name, population, treasury) {
    return {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += this.population * this.taxRate;
        },
        applyGrowth(percentage) {
            this.population = Math.floor(this.population + this.population * percentage / 100);
        },
        applyRecession(percentage) {
            this.treasury = Math.floor(this.treasury - this.treasury * percentage / 100);
        }
    };
}

const city =

    cityTaxes('Tortuga',

        7000,

        15000);

console.log(city);


let cityTaxe = (...args) => {
    let [name, population, treasury] = args;
    let city = {name, population, treasury}
    city.taxRate = 10;

    city.collectTaxes = () => {
        city.treasury += city.population * city.taxRate
    };

    city.applyGrowth  =  (percentage) => { city.population += city.population * percentage / 100};

    city.applyRecession =(percentage) => { city.treasury -= city.treasury * percentage / 100};


    return city
}
function Constructor  (...args)  {
    let [name, population, treasury] = args;
    let city = {name, population, treasury}
    city.taxRate = 10;

    Constructor.prototype.collectTaxes = function () {
        return city.treasury += city.population * city.taxRate
    };

    Constructor.prototype.applyGrowth = function (percentage) {
        return city.population += city.population * percentage / 100
    };

    Constructor.prototype.applyRecession = function (percentage) {
        return city.treasury -= city.treasury * percentage / 100
    };

    return city
}

let cityTaxes1 = (name, population, treasury) => {
    let city = {name, population, treasury}
    city.taxRate = 10;

    city.collectTaxes = () => {
        city.treasury += city.population * city.taxRate
    };
    city.applyGrowth = (percentage) => {
        city.population += city.population * percentage / 100
    };
    city.applyRecession = (percentage) => {
        city.treasury -= city.treasury * percentage / 100
    };
    return city
}

function cityTaxes2(name, population, treasury) {
    return {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += this.population * this.taxRate;
        },
        applyGrowth(percentage) {
            this.population = Math.floor(this.population + this.population * percentage / 100);
        },
        applyRecession(percentage) {
            this.treasury = Math.floor(this.treasury - this.treasury * percentage / 100);
        }
    };
}

function solve(name, population, treasury) {
    const city = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() {
            city.treasury = city.treasury + (city.population * city.taxRate)
        },
        applyGrowth(percent) {
            console.log(percent / 100)
            city.population += Math.floor(city.population * percent / 100);

        },
        applyRecession(percent) {
            this.treasury -= Math.floor(this.treasury * percent / 100);
        },

    }
    return city
}