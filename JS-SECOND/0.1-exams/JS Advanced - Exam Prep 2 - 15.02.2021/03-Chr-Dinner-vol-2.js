class ChristmasDinner {
    constructor(budget) {
        if (budget < 0) {
            throw new Error("The budget cannot be a negative number")
        }
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    shopping([type, price]) {

        if (this.budget < price) {
            throw new Error("Not enough money to buy this product")
        }
        this.budget = this.budget - price;
        this.products.push(type);
        return `You have successfully bought ${type}!`
    }

    recipes(recipe) {
        let arrProducts = this.products.filter((v) => recipe.productsList.includes(v));
        let {recipeName, productsList} = recipe;
        if (arrProducts.length <= 0 || productsList.length !== arrProducts.length) {
            throw new Error("We do not have this product");
        }
        this.dishes.push({recipeName, productsList})
        return `${recipeName} has been successfully cooked!`;
    }

    inviteGuests(name, dish) {
        let currDish = this.dishes.find(currDish => currDish.recipeName === dish)
        if (!currDish) {
            throw new Error("We do not have this dish");
        }
        if (this.guests[name]) {
            throw new Error("This guest has already been invited");
        }
        this.guests[name] = dish;
        return `You have successfully invited ${name}!`;
    }

    showAttendance() {
        const names = Object.keys(this.guests);
        let result = [];
        for(let name of names){
            const dish = this.guests[name];
            const products = this.dishes.find(obj => obj.recipeName === dish);
            result.push(`${name} will eat ${dish}, which consists of ${products.productsList.join(', ')}`);
        }
        return result.join('\n');
    }
}