class ChristmasDinner {
    get budget() {
        return this._budget;
    }

    set budget(value) {
        if (value < 0) {
            throw new Error(`The budget cannot be a negative number`);
        }
        this._budget = value;
    }

    constructor(budget) {
        this.dishes = [];
        this.products = [];
        this.guests = {};
        this.budget = budget;
    };

    shopping([type, price]) {
        if (this.budget < price) {
            throw new Error(`Not enough money to buy this product`)
        }
        this.budget = this.budget - price;
        this.products.push(type);
        return `You have successfully bought ${type}!`
    };

    recipes({recipeName, productsList}) {
        let hasAllProducts = productsList.every(product => this.products.includes(product))
        if (!hasAllProducts) { //hasAllProducts === false
            throw new Error(`We do not have this product`)
        }
        this.dishes.push({recipeName, productsList});
        return `${recipeName} has been successfully cooked!`
    }

    inviteGuests(name, dish) {
        let currDish = this.dishes.filter(e => e.recipeName === dish);
        if (currDish.length === 0) {
            throw new Error(`We do not have this dish`);
        }
        if (this.guests[name]) {
            throw new Error(`This guest has already been invited`);
        }
        this.guests[name] = dish;
        return `You have successfully invited ${name}!`
    }

    showAttendance() {
        let result = [];
        Object.entries(this.guests).forEach(([key, value]) => {
            result.push(`${key} will eat ${value}, which consists of ${this._getDishes(value)}`)
        })
        return result.join('\n');
    }

    _getDishes(value) {
        let currDish = this.dishes.filter(e => e.recipeName === value);
        return currDish[0].productsList.join(', ');
    }
}

let dinner = new ChristmasDinner(300);


dinner.shopping(['Salt', 1]);

dinner.shopping(['Beans', 3]);

dinner.shopping(['Cabbage', 4]);

dinner.shopping(['Rice', 2]);

dinner.shopping(['Savory', 1]);

dinner.shopping(['Peppers', 1]);

dinner.shopping(['Fruits', 40]);

dinner.shopping(['Honey', 10]);


dinner.recipes({

    recipeName: 'Oshav',

    productsList: ['Fruits', 'Honey']

});

dinner.recipes({

    recipeName: 'Folded cabbage leaves filled with rice',

    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']

});

dinner.recipes({

    recipeName: 'Peppers filled with beans',

    productsList: ['Beans', 'Peppers', 'Salt']

});


dinner.inviteGuests('Ivan', 'Oshav');

dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');

dinner.inviteGuests('Georgi', 'Peppers filled with beans');


console.log(dinner.showAttendance());

