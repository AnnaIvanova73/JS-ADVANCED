describe("dealership", function () {
    let exp;
    let discCar;
    let extras;
    let indexes;
    let negative;
    let positive;
    beforeEach(function () {
        exp = ''
        discCar = {'Audi A4 B8': 15000, 'Audi A6 4K': 20000, 'Audi A8 D5': 25000, 'Audi TT 8J': 14000,}
        extras = ['heated seats', 'sliding roof', 'sport rims', 'navigation'];
        indexes = [0, 1, 2, 3]
        negative = 'Your euro category is low, so there is no discount from the final price!';
        positive = `We have added 5% discount to the final price: 14250.`;
    });

    describe("test_newCarCost", function () {

        it('should return newCarPrice ', function () {
            exp = 22222;
            let actual = dealership.newCarCost('Audi A3', 22222)
            assert.equal(actual, exp)
            let act = dealership.newCarCost(22222, 'Audi A3')
            exp = 'Audi A3';
            assert.equal(act, exp)
        });
        it('should throw forEach invalid input', function () {
            assert.isUndefined(dealership.newCarCost());
            assert.isUndefined(dealership.newCarCost(''));
            assert.isUndefined(dealership.newCarCost('asdasd'));
            assert.isUndefined(dealership.newCarCost(123));
            assert.isUndefined(dealership.newCarCost({orderedDrink: 'juice'}));
        });

        it('should return final price', function () {
            let keys = Object.keys(discCar);
            let values = Object.values(discCar);
            let actual = dealership.newCarCost(keys[0], 0)
            let actual1 = dealership.newCarCost(keys[1], -15)
            let actual2 = dealership.newCarCost(keys[2], 500000)
            let actual3 = dealership.newCarCost(keys[3], 1000)

            assert.equal(actual, 0 - values[0])
            assert.equal(actual1, -15 - values[1])
            assert.equal(actual2, 500000 - values[2])
            assert.equal(actual3, 1000 - values[3])

        });

    });
    describe("test_carEquipment", function () {
        it('should return all items', function () {
            let actual = dealership.carEquipment(extras, indexes);
            assert.deepEqual(actual, extras)
        });

        it('should return some selected', function () {
            let expected = ['heated seats'];
            let actual = dealership.carEquipment(extras, [0]);
            assert.deepEqual(actual, expected)

            expected = ['navigation'];
            actual = dealership.carEquipment(extras, [extras.length - 1]);
            assert.deepEqual(actual, expected)
        });
        it('should return empty arr', function () {
            assert.deepEqual(dealership.carEquipment([], []), [])
        });
        it("should indicate invalid input", function () {
            assert.throws(() => dealership.carEquipment(), 'Cannot read property \'forEach\' of undefined');
            assert.throws(() => dealership.carEquipment(123,123), 'indexArr.forEach is not a function');
            assert.throws(() => dealership.carEquipment('aa','aa'), 'indexArr.forEach is not a function');
            assert.throws(() => dealership.carEquipment('....'), 'Cannot read property \'forEach\' of undefined');
            assert.throws(() => dealership.carEquipment({}), 'Cannot read property \'forEach\' of undefined');
            assert.throws(() => dealership.carEquipment(null), 'Cannot read property \'forEach\' of undefined');
        });
    });
    describe("test_", function () {
        it("should return msg no discount", function () {
            assert.equal(dealership.euroCategory(),negative)
            assert.equal(dealership.euroCategory('asdasda'),negative)
            assert.equal(dealership.euroCategory([]),negative)
            assert.equal(dealership.euroCategory(''),negative)
            assert.equal(dealership.euroCategory(undefined),negative)
            assert.equal(dealership.euroCategory(null),negative)
            assert.equal(dealership.euroCategory(1),negative)
            assert.equal(dealership.euroCategory(2),negative)
            assert.equal(dealership.euroCategory(3),negative)
        });
        it("should return msg and make correct discount", function () {
            assert.equal(dealership.euroCategory(4),positive)
            assert.equal(dealership.euroCategory(1000),positive)
            assert.equal(dealership.euroCategory(99),positive)
            assert.equal(dealership.euroCategory(5),positive)
            assert.equal(dealership.euroCategory(5),positive)
        });
    });
});