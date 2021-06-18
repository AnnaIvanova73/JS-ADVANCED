let assert = require('chai').assert;
describe('dealership', () => {

    describe('test_newCarCost', () => {
        it('should check oldCarModel price', () => {
            assert.strictEqual(dealership.newCarCost('Audi A4 B8', 1), -14999);
            assert.strictEqual(dealership.newCarCost('Audi A4 B8', -1), -15001);
            assert.strictEqual(dealership.newCarCost('Audi A4 B8', 0), -15000);
            assert.strictEqual(dealership.newCarCost('Audi A6 4K', 1), -19999);
            assert.strictEqual(dealership.newCarCost('Audi A8 D5', 1), -24999);
            assert.strictEqual(dealership.newCarCost('Audi TT 8J', 1), -13999);

        });
        it('should check newCar price', () => {
            assert.strictEqual(dealership.newCarCost('Audi', 1), 1);
            assert.strictEqual(dealership.newCarCost('Audi', -1), -1);
            assert.strictEqual(dealership.newCarCost('Audi', 0), 0);
            assert.strictEqual(dealership.newCarCost('Audi', 1), 1);
            assert.strictEqual(dealership.newCarCost('Audi', 1), 1);
            assert.strictEqual(dealership.newCarCost('Audi', 1), 1);

        });
        it('should check for incorrect input', () => {
            assert.isUndefined(dealership.newCarCost());
            assert.strictEqual(dealership.newCarCost(1, 'd'), 'd');
            assert.strictEqual(dealership.newCarCost('1', 'd'), 'd');
            assert.isUndefined(dealership.newCarCost([]));
            assert.isUndefined(dealership.newCarCost({}));
            assert.isUndefined(dealership.newCarCost(undefined));
            assert.isUndefined(dealership.newCarCost(1));
        });
    });
    describe('test_carEquipment', () => {
        it('should throw TypeError when input is incorrect', () => {
            assert.throw(() => dealership.carEquipment(), TypeError);
            assert.throw(() => dealership.carEquipment([]), TypeError);
            assert.throw(() => dealership.carEquipment(12, '1'), TypeError);
            assert.throw(() => dealership.carEquipment({}), TypeError);
            assert.throw(() => dealership.carEquipment(null), TypeError);
            assert.throw(() => dealership.carEquipment('......'), TypeError);
        });
        it('should return correct extras', () => {
            assert.deepEqual(dealership.carEquipment(
                ['heated seats', 'sliding roof', 'sport rims', 'navigation'], [0, 1, 3]),
                ["heated seats", "sliding roof", "navigation"]);
            assert.deepEqual(dealership.carEquipment(
                ['heated seats', 'sliding roof', 'sport rims', 'navigation'], [0]),
                ["heated seats"]);
        });

        it('should check for edge cases', () => {
            assert.deepEqual(dealership.carEquipment(
                ['heated seats', 'sliding roof', 'sport rims', 'navigation'], []),
                []);
            assert.deepEqual(dealership.carEquipment(
                [], [0, 9]),
                [undefined, undefined]);
            assert.deepEqual(dealership.carEquipment(
                [], []),
                []);
            assert.deepEqual(dealership.carEquipment(
                ['heated seats', 'sliding roof', 'sport rims'], [10, 11]),
                [undefined, undefined]);
            assert.deepEqual(dealership.carEquipment(
                ['heated seats', 'sliding roof', 'sport rims'], [-1]),
                [undefined]);

        });

    });
    describe('test_euroCategory', () => {
        it('should check output edge and correct cases', () => {

            assert.strictEqual(dealership.euroCategory(4),
                `We have added 5% discount to the final price: 14250.`);
            assert.strictEqual(dealership.euroCategory(3),
                `Your euro category is low, so there is no discount from the final price!`);

            assert.strictEqual(dealership.euroCategory(100),
                `We have added 5% discount to the final price: 14250.`);
            assert.strictEqual(dealership.euroCategory(-100),
                `Your euro category is low, so there is no discount from the final price!`);

        });

    });
});