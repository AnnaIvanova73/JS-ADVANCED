function createCalculator() {
    let value = 0;
    return {
        add: function (num) {
            value += Number(num);
        },
        subtract: function (num) {
            value -= Number(num);
        },
        get: function () {
            return value;
        }
    }
}

let assert = require('chai').assert;

describe('createCalculator', function () {

    let myCalc = '';
    beforeEach(function () {
        myCalc = createCalculator();
    });

    it('add should be NaN for string input', () => {
        myCalc.add('a')
        let actual = myCalc.get();
        assert.isNaN(actual)
    });
    it('testSubtractNum', function () {
        myCalc.add(2)
        myCalc.add('2')
        myCalc.subtract('2');
        let number = myCalc.get();
        assert.equal(number,2)
    });
});

/* myOld decision is better
describe('createCalculator', function () {

    let myCalc = '';
    beforeEach(function () {
        myCalc = createCalculator();
    });

    it('add should be NaN for string input', () => {
        myCalc.add('a')
        let actual = myCalc.get();
        assert.isNaN(actual)
    });
    it('add should  be zero for arr', () => {
        myCalc.add([])
        let actual = myCalc.get();
        assert.equal(actual, 0)
    });
    it('add should be NaN for undefined ', () => {
        myCalc.add(undefined)
        let actual = myCalc.get();
        assert.isNaN(actual)
    });

    it('substract should be NaN for incorrect input', () => {
        myCalc.add(10)
        myCalc.subtract('a');
        let actual = myCalc.get()
        assert.isNaN(actual)
    });

    it('should parse number',() =>{
        myCalc.add('10')
        myCalc.subtract('4');
        let actual = myCalc.get()
        assert.equal(actual,6)
    })

    it('shouldBeObject', function () {
        assert.isObject(createCalculator())
    });
    it('shouldHavePropertyAdd', function () {
        let currCalc = createCalculator();
        let property = currCalc.add;
        assert.propertyVal(currCalc, 'add', property);
    });

    it('shouldHavePropertySubtract', function () {
        let currCalc = createCalculator();
        let property = currCalc.subtract;
        assert.propertyVal(currCalc, 'subtract', property);
    });
    it('shouldHavePropertyGet', function () {
        let currCalc = createCalculator();
        let property = currCalc.get;
        assert.propertyVal(currCalc, 'get', property);
    });
});
 */