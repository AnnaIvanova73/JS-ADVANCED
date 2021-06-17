describe("pizzUni", function () {

    describe("makeAnOrder", function () {
        it('test_shouldWorkProperly', function () {
            let expected = 'You just ordered Peperoni and juice.';
            let actual = pizzUni.makeAnOrder({orderedPizza: 'Peperoni', orderedDrink: 'juice'})
            assert.equal(actual, expected);
        });

        it('test_whenNoPizzaOrderedExceptionThrown', function () {
            assert.throws(()=>pizzUni.makeAnOrder({orderedDrink: 'juice'}),'You must order at least 1 Pizza to finish the order.');
            assert.throws(()=>pizzUni.makeAnOrder({orderedDrink: 'juice'}));
            assert.throws(()=>pizzUni.makeAnOrder(),'Cannot read property \'orderedPizza\' of undefined');
        });

    });

    describe("getRemainingWork", function () {
        it('test_shouldWorkProperly', function () {
            let expected = 'All orders are complete!';
            let actual = pizzUni.getRemainingWork([{status: 'ready'},{status: 'ready'},{status: 'ready'}])
            assert.equal( actual, expected);
        });
        it('test_shouldMethodWorkProperlyForPreparingOrder', function () {
            let expected = 'The following pizzas are still preparing: Vegetarian.';
            let actual = pizzUni.getRemainingWork([{status: 'notReady',pizzaName: 'Vegetarian'}]);
            assert.equal(actual, expected);
        });
        it('test_shouldMethodWorkProperlyForPreparingOrderMoreThanOneArg', function () {
            let expected = 'The following pizzas are still preparing: Vegetarian, Peperoni, Con Carne.';
            let actual = pizzUni.getRemainingWork([{status: 'notReady',pizzaName: 'Vegetarian'},{status: 'notReady',pizzaName: 'Peperoni'},{status: 'notReady',pizzaName: 'Con Carne'}]);
            assert.equal(actual, expected);
        });
        it('test_shouldThrowForInvalidInput', function () {
            assert.throws(()=>pizzUni.getRemainingWork(),'Cannot read property \'filter\' of undefined');
            assert.throws(()=>pizzUni.getRemainingWork({},'statusArr.filter is not a function'));
        });

    });

    describe("orderType", function () {
        it('test_shouldWorkProperlyCarryOut', function () {
            let expected,actual;
            expected = 211.499611101;
            actual = pizzUni.orderType(234.99956789,'Carry Out');
            assert.equal(actual, expected);
            expected = -0.899611101;
            actual =pizzUni.orderType(-0.99956789,'Carry Out');
            assert.equal(actual, expected);

        });
        it('test_shouldWorkProperlyDelivery', function () {
            let expected,actual;
            expected = 123;
            actual = pizzUni.orderType(123,'Delivery');
            assert.equal(actual, expected);
        });
        it('test_shouldBeUndefinedForInvalidInput', function () {
            assert.isUndefined(pizzUni.orderType());
            assert.isUndefined(pizzUni.orderType('Delivery'));
            assert.isUndefined(pizzUni.orderType('asd',123));
            assert.isUndefined(pizzUni.orderType(123,));
            assert.isUndefined(pizzUni.orderType('asd','asd'));
            assert.isUndefined(pizzUni.orderType(123,123));

        });

    });

});