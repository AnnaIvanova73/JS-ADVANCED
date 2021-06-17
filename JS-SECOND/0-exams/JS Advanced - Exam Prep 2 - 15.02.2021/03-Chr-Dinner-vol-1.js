class ChristmasDinner {
    constructor(budget) {
        if (budget < 0) {
            throw new Error("The budget cannot be a negative number")
        }
        this.dishes = [];
        this.products = [];
        this.guests = {};
        this.budget = budget;
    };

    shopping([type, price]) {
        let currPrice = this._isOnBudget(Number(price));
        this.budget = this.budget - currPrice;
        this.products.push(type);
        return `You have successfully bought ${type}!`;

    };

    recipes({recipeName, productsList}) {
        productsList.forEach(product => {
            if (!this.products.includes(product)) {
                throw new Error("We do not have this product");
            }
        });
        this.dishes.push({recipeName, productsList});
        return `${recipeName} has been successfully cooked!`;
    };

    inviteGuests(name, dish) {
        let currDish = this.dishes.filter(d => d.recipeName === dish);
        if (currDish.length === 0) {
            throw new Error(`${dish} has been successfully cooked!`);
        }
        if (this.guests[name]) {
            throw new Error(`This guest has already been invited`);
        }
        this.guests[name] = dish;
        return `You have successfully invited ${name}!`;
    };
    showAttendance(){
        let arr = Array.from(Object.entries(this.guests));
        arr =  arr.map(arr => `${arr[0]} will eat ${arr[1]}, which consists of ${this._getProducts(arr[1])}`);
        return arr.join('\n');
    };

    _getProducts(arrElement) {
        let currDish =  this.dishes.filter(d => d.recipeName === arrElement)[0];
        return currDish.productsList.join(', ');
    };
    _isOnBudget(price) {
        if (this.budget < price) {
            throw new Error('Not enough money to buy this product');
        }
        return price;
    };
}