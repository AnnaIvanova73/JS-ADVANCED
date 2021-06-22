describe('pizzUni', () => {
    describe('Should test makeAnOrder', () => {
        it('Should test behavior with incorrect input / makeAnOrder', () => {
            assert.throws(() => pizzUni.getRemainingWork(''), Error, `You must order at least 1 Pizza to finish the order.`);
            assert.throws(() => pizzUni.getRemainingWork(), Error, `Cannot read property 'orderedPizza' of undefined`);
            assert.throws(() => pizzUni.getRemainingWork(null), Error, `Cannot read property 'orderedPizza' of null`);
            assert.throws(() => pizzUni.getRemainingWork(123), Error, `You must order at least 1 Pizza to finish the order.`);
            assert.throws(() => pizzUni.getRemainingWork('123'), Error, `You must order at least 1 Pizza to finish the order.`);
        })
        it('Should throw when there\'s no pizza ordered', () => {
            assert.throws(() => pizzUni.makeAnOrder({orderedDrink: 'the name of the drink'}),
                Error, `You must order at least 1 Pizza to finish the order.`);
        });
        it('Should order pizza successfully', () => {
            assert.strictEqual(pizzUni.makeAnOrder({orderedPizza: 'Some pizza', orderedDrink: 'the name of the drink'}),
                "You just ordered Some pizza and the name of the drink.");
            assert.strictEqual(pizzUni.makeAnOrder({orderedPizza: 'Vegetariana', orderedDrink: 'Orange juice'}),
                "You just ordered Vegetariana and Orange juice.");
            assert.strictEqual(pizzUni.makeAnOrder({orderedPizza: 'Margarita', orderedDrink: 'Spritz'}),
                "You just ordered Margarita and Spritz.");
            assert.strictEqual(pizzUni.makeAnOrder({orderedPizza: 'Margarita'}),
                "You just ordered Margarita");
        });
    });

    describe('Should test getRemainingWork', () => {
        it('Should test behavior with incorrect input / getRemainingWork', () => {
            assert.throws(() => pizzUni.getRemainingWork(''), Error, `statusArr.filter is not a function`);
            assert.throws(() => pizzUni.getRemainingWork(), Error, `Cannot read property 'filter' of undefined`);
            assert.throws(() => pizzUni.getRemainingWork(null), Error, `Cannot read property 'filter' of null`);
        })
        it('Should show remaining work', () => {
            assert.strictEqual(pizzUni.getRemainingWork([]), `All orders are complete!`);
        });
        //[{pizzaName: ‘the name of the pizza’, status: ‘ready’ / ‘preparing’ }, …]
        it('Should order pizza successfully', () => {
            assert.strictEqual(pizzUni.getRemainingWork(
                [{pizzaName: 'Margarita', status: 'ready'}, {
                    pizzaName: 'Vegetariana',
                    status: 'ready'
                }]), `All orders are complete!`);
            assert.strictEqual(pizzUni.getRemainingWork(
                [{pizzaName: 'Margarita', status: 'preparing'}, {pizzaName: 'Vegetariana', status: 'preparing'}]),
                `The following pizzas are still preparing: Margarita, Vegetariana.`);
            assert.strictEqual(pizzUni.getRemainingWork(
                [{pizzaName: 'Margarita', status: 'preparing'}, {
                    pizzaName: 'Vegetariana',
                    status: 'ready'
                }]), `The following pizzas are still preparing: Margarita.`);
            assert.strictEqual(pizzUni.getRemainingWork(
                [{pizzaName: 'Margarita', status: 'ready'}, {
                    pizzaName: 'Vegetariana',
                    status: 'preparing'
                }]), `The following pizzas are still preparing: Vegetariana.`);
        });
    });

    describe('Should test orderType', () => {
        it('Should test behavior with incorrect input / orderType', () => {
            assert.isUndefined(pizzUni.orderType(''));
            assert.isUndefined(pizzUni.orderType([]));
            assert.isUndefined(pizzUni.orderType(null));
            assert.isUndefined(pizzUni.orderType('null'));
            assert.isUndefined(pizzUni.orderType());
        })
        it('Should Carry Out', () => {
            assert.strictEqual(pizzUni.orderType(12,'Carry Out'), 10.8);
            assert.strictEqual(pizzUni.orderType(-1,'Carry Out'), -0.9);
            assert.strictEqual(pizzUni.orderType(0,'Carry Out'), 0);
            assert.strictEqual(pizzUni.orderType(1.1,'Carry Out'), 0.9900000000000001);
            assert.strictEqual(pizzUni.orderType(33.33,'Carry Out'), 29.997);
        });
        //[{pizzaName: ‘the name of the pizza’, status: ‘ready’ / ‘preparing’ }, …]
        it('Should ‘Delivery', () => {
            assert.strictEqual(pizzUni.orderType(12,'Delivery'), 12);
            assert.strictEqual(pizzUni.orderType(-1,'Delivery'), -1);
            assert.strictEqual(pizzUni.orderType(0,'Delivery'), 0);
            assert.strictEqual(pizzUni.orderType(1.1,'Delivery'), 1.1);
            assert.strictEqual(pizzUni.orderType(33.33,'Delivery'), 33.33);
        });
    });
});