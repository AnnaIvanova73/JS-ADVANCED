describe('pizzUni', () => {

    describe('test_MakeAnOrder', () => {

        it('isItThrowingCorrectError', () => {
            assert.throw(() => pizzUni.makeAnOrder({}), 'You must order at least 1 Pizza to finish the order.')
            assert.throw(() => pizzUni.makeAnOrder([]), 'You must order at least 1 Pizza to finish the order.')
            assert.throw(() => pizzUni.makeAnOrder(), 'Cannot read property \'orderedPizza\' of undefined')
            assert.throw(() => pizzUni.makeAnOrder(12), 'You must order at least 1 Pizza to finish the order.')
            assert.throw(() => pizzUni.makeAnOrder(1, 1), 'You must order at least 1 Pizza to finish the order.')
            assert.throw(() => pizzUni.makeAnOrder('1', '1'), 'You must order at least 1 Pizza to finish the order.')
            assert.throw(() => pizzUni.makeAnOrder(null), 'Cannot read property \'orderedPizza\' of null')
            assert.throw(() => pizzUni.makeAnOrder(undefined), 'Cannot read property \'orderedPizza\' of undefined')
            assert.throw(() => pizzUni.makeAnOrder({orderedDrink: 'Pepsi'}), 'You must order at least 1 Pizza to finish the order.')
        });
        it('testOrdersOnlyPizza', () => {
            assert.strictEqual(pizzUni.makeAnOrder({orderedPizza: `I'm hungry`}), `You just ordered I\'m hungry`)
            assert.strictEqual(pizzUni.makeAnOrder({orderedPizza: `Margarita`}), 'You just ordered Margarita')
        });
        it('testOrdersPizzaAndDrink', () => {
            assert.strictEqual(pizzUni.makeAnOrder({
                orderedPizza: `Margarita`,
                orderedDrink: 'Juice'
            }), `You just ordered Margarita and Juice.`)
            assert.strictEqual(pizzUni.makeAnOrder({
                orderedPizza: `Vegetariana`,
                orderedDrink: 'Wine'
            }), `You just ordered Vegetariana and Wine.`)
        })

    });
    describe('test_GetRemainingWork', () => {
        it('itHasRemainingWork/arr not empty', () => {
            assert.strictEqual(pizzUni.getRemainingWork([{pizzaName: 'SomePizza', status: 'preparing'},
                {pizzaName: 'Neapolitana', status: 'preparing'}]), 'The following pizzas are still preparing: SomePizza, Neapolitana.');
            assert.strictEqual(pizzUni.getRemainingWork([{pizzaName: 'SomePizza', status: 'preparing'},
                {pizzaName: 'Neapolitana', status: 'ready'}]), 'The following pizzas are still preparing: SomePizza.');

        });
        it('no_Remaining_Work/arr_Empty', () => {
            assert.strictEqual(pizzUni.getRemainingWork([{pizzaName: 'SomePizza', status: 'ready'},
                {pizzaName: 'Neapolitana', status: 'ready'}]), 'All orders are complete!');
            assert.strictEqual(pizzUni.getRemainingWork([]), 'All orders are complete!');
        });

    });
    describe('test_OrderType', () => {
        it('check_Type_Delivery_CarryOut', () => {
            assert.strictEqual(pizzUni.orderType(33,'Carry Out'),29.7)
            assert.strictEqual(pizzUni.orderType(99.99,'Carry Out'),89.991)
            assert.strictEqual(pizzUni.orderType(-99.99,'Carry Out'),-89.991)
            assert.strictEqual(pizzUni.orderType(0.34,'Carry Out'),0.30600000000000005)
        });
        it('check_Type_Delivery_Delivery', () => {
            assert.strictEqual(pizzUni.orderType(33,'Delivery'),33)
            assert.strictEqual(pizzUni.orderType(0.34,'Delivery'),0.34)
        });
        it('check_invalid_input_undefined', () => {
            assert.isUndefined(pizzUni.orderType('Delivery',33));
            assert.isUndefined(pizzUni.orderType());
            assert.isUndefined(pizzUni.orderType([]));
            assert.isUndefined(pizzUni.orderType('1','1'));

        })

    });

});