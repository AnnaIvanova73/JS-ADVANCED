class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    };

    loadProducts(products) {
        products.forEach(e => {
            let [productName, productQuantity, productTotalPrice] = e.split(' ');
            productQuantity = Number(productQuantity);//check parse needed?
            productTotalPrice = Number(productTotalPrice);

            if (productTotalPrice <= this.budgetMoney) {

                if (!this.stockProducts[productName]) {
                    this.stockProducts[productName] = productQuantity;
                } else {
                    this.stockProducts[productName] += productQuantity;
                }

                this.budgetMoney = this.budgetMoney - productTotalPrice;
                this.history.push(`Successfully loaded ${productQuantity} ${productName}`)
            } else {
                this.history.push(`There was not enough money to load ${productQuantity} ${productName}`)
            }
        });
        //just current actions or all history? check here
        return this.history.join('\n');
    };

    addToMenu(meal, neededProducts, price) {
        if (!this.menu[meal]) {
            let newProducts = [];
            neededProducts.forEach(e => {
                let [productName, productQuantity] = e.split(' ');
                productQuantity = Number(productQuantity)
                newProducts.push({productName, productQuantity})
            });
            this.menu[meal] = {products: newProducts, price: price};
            let mealsCount = Object.entries(this.menu).length;

            if (mealsCount === 1) {
                return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`
            } else {
                return `Great idea! Now with the ${meal} we have ${mealsCount} meals in the menu, other ideas?`
            }

        } else {
            return `The ${meal} is already in the our menu, try something different.`;
        }
    };

    showTheMenu() {
        let mealsCount = Object.entries(this.menu).length;
        if (mealsCount === 0) {
            return `Our menu is not ready yet, please come later...`
        } else {
            let output = [];
            Object.entries(this.menu).forEach(([key, value]) => {
                output.push(`${key} - $ ${value.price}`)
            })
            return output.join('\n');
        }
    };

    makeTheOrder(meal) {
        if (!this.menu[meal]) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`
        }

        let currMeal = this.menu[meal];
        let products = currMeal.products;


        for (const e of products) {
            let currProduct = e.productName;
            let quantity = e.productQuantity;
            if (!this.stockProducts[currProduct] || this.stockProducts[currProduct] < quantity) {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`
            }
        }
        for (const e of products) {
            let currProduct = e.productName;
            let quantity = e.productQuantity;
            this.stockProducts[currProduct] = this.stockProducts[currProduct] - quantity;
        }
        this.budgetMoney = this.budgetMoney + currMeal.price;

        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${currMeal.price}.`
    }
}


let kitchen = new Restaurant(1000);

kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);

kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);

console.log(kitchen.makeTheOrder('frozenYogurt'));