let mathEnforcer = {
    addFive: function (num) {
        if (typeof (num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof (num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof (num1) !== 'number' || typeof (num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

let assert = require('chai').assert;

describe('mathEnforcer', function () {

    describe('test object', function () {
        it('test object, test for keys and properties', function () {
            assert.isObject(mathEnforcer);
        })
    });

    describe('test addFive function', function () {

        it('test invalid input', () => {
            let actual = mathEnforcer.addFive('a');
            assert.isUndefined(actual);
            actual = mathEnforcer.addFive({});
            assert.isUndefined(actual);
        });
        it('test positive valid float input', () => {
            let actual = mathEnforcer.addFive(1.5);
            let expected = 6.5;
            assert.equal(actual, expected);
            actual = mathEnforcer.addFive(0.000000003);
            expected = 5.000000003
            assert.equal(actual, expected);
        });
        it('test negative valid float input', () => {
            let actual = mathEnforcer.addFive(-1.5);
            let expected = 3.5;
            assert.equal(actual, expected);
            actual = mathEnforcer.addFive(-0.000000003);
            expected = 4.999999997;
            assert.equal(actual, expected);

        });

        it('test positive valid int input', () => {
            let actual = mathEnforcer.addFive(12);
            let expected = 17;
            assert.equal(actual, expected);
            actual = mathEnforcer.addFive(0);
            expected = 5
            assert.equal(actual, expected);
        });
        it('test negative valid int input', () => {
            let actual = mathEnforcer.addFive(-1);
            let expected = 4;
            assert.equal(actual, expected);
            actual = mathEnforcer.addFive(-5);
            expected = 0;
            assert.equal(actual, expected);
        });
    });


    describe('test subtractTen function', function () {

        it('test invalid input', () => {
            let actual = mathEnforcer.subtractTen('a');
            assert.isUndefined(actual);
            actual = mathEnforcer.subtractTen({});
            assert.isUndefined(actual);
        });
        it('test positive valid float input', () => {
            let actual = mathEnforcer.subtractTen(1.5);
            let expected = -8.5;
            assert.equal(actual, expected);
            actual = mathEnforcer.subtractTen(0.000000003);
            expected = -9.999999997
            assert.equal(actual, expected);
        });
        it('test negative valid float input', () => {
            let actual = mathEnforcer.subtractTen(-1.5);
            let expected = -11.5;
            assert.equal(actual, expected);
            actual = mathEnforcer.subtractTen(-0.000000003);
            expected = -10.000000003;
            assert.equal(actual, expected);
        });

        it('test positive valid int input', () => {
            let actual = mathEnforcer.subtractTen(12);
            let expected = 2;
            assert.equal(actual, expected);
            actual = mathEnforcer.subtractTen(0);
            expected = -10;
            assert.equal(actual, expected);
        });
        it('test negative valid int input', () => {
            let actual = mathEnforcer.subtractTen(-1);
            let expected = -11;
            assert.equal(actual, expected);
            actual = mathEnforcer.addFive(-5);
            expected = 0;
            assert.equal(actual, expected);
        });
    });
    describe('test sum function', function () {
        it('test invalid input', () => {
            let actual = mathEnforcer.sum('1', 1);
            assert.isUndefined(actual);
            actual = mathEnforcer.sum(1, '1');
            assert.isUndefined(actual);
            actual = mathEnforcer.sum('a');
            assert.isUndefined(actual);
            actual = mathEnforcer.sum({});
            assert.isUndefined(actual);
        });
        it('test valid float numbers', () => {
            let actual = mathEnforcer.sum(1.05, 0.001);
            let expected = 1.051;
            assert.equal(actual, expected);
            actual = mathEnforcer.sum(-0.1, -1.0);
            expected = -1.1;
            assert.equal(actual, expected);
            expected = -0.1 + 0.1
            actual = mathEnforcer.sum(-0.1, 0.1);
            assert.closeTo(actual, expected, 0 , 'numbers are close');
        });
        it('test valid int numbers', () => {
            let actual = mathEnforcer.sum(15, 5);
            let expected = 20;
            assert.equal(actual, expected);
            actual = mathEnforcer.sum(1, -1);
            expected = 0;
            assert.equal(actual, expected);
            actual = mathEnforcer.sum(-1, 1);
            expected = 0;
            assert.equal(actual, expected);
            actual = mathEnforcer.sum(-1, -1);
            expected = -2;
            assert.equal(actual, expected);
        });

    });
});
/*
const { expect } = require('chai')
const mathEnforcer = require('./mathEnforcer')

describe(`testing math calc methods obj`, () => {
    describe(`testing addFive method (floats allowed range +- 0.01)`, () => {
        it(`valid input positive Integer -> (0) -> 5`, () => {
            expect(mathEnforcer.addFive(0)).to.eq(5)
        })
        it(`valid input negative Integer -> (-1) -> 4`, () => {
            expect(mathEnforcer.addFive(-1)).to.eq(4)
        })
        it(`valid input float -> (0.1) -> 5.1`, () => {
            expect(mathEnforcer.addFive(0.1)).to.be.closeTo(5.1, 0.01)
        })
        it(`invalid input - not a number param -> ('a') -> undefined`, () => {
            expect(mathEnforcer.addFive('a')).to.be.undefined
        })
    })

    describe(`testing subtractTen method`, () => {
        it(`valid input positive Integer -> (10) -> 0`, () => {
            expect(mathEnforcer.subtractTen(10)).to.eq(0)
        })
        it(`valid input negative Integer-> (-1) -> -11`, () => {
            expect(mathEnforcer.subtractTen(-1)).to.eq(-11)
        })
        it(`valid input float -> (10.1) -> 0.1`, () => {
            expect(mathEnforcer.subtractTen(10.1)).to.be.closeTo(0.1, 0.01)
        })
        it(`invalid input - not a number param -> ('a') -> undefined`, () => {
            expect(mathEnforcer.subtractTen('a')).to.be.undefined
        })
    })

    describe(`testing sum method`, () => {
        it(`valid input positive Integers -> (1,1) -> 2`, () => {
            expect(mathEnforcer.sum(1, 1)).to.eq(2)
        })
        it(`valid input negative Integers-> (-1,-1) -> -2`, () => {
            expect(mathEnforcer.sum(-1, -1)).to.eq(-2)
        })
        it(`valid input negative Int + positive Int-> (-1,1) -> 0`, () => {
            expect(mathEnforcer.sum(-1, 1)).to.eq(0)
        })
        it(`valid input float -> (1.1,2.2) -> 3.3`, () => {
            expect(mathEnforcer.sum(1.1, 2.2)).to.be.closeTo(3.3, 0.01)
        })
        it(`invalid input - 1st param not a number -> ('1', 1) -> undefined`, () => {
            expect(mathEnforcer.sum('1', 1)).to.be.undefined
        })
        it(`invalid input - 2nd paramnot not a number  -> (1, '1') -> undefined`, () => {
            expect(mathEnforcer.sum(1, '1')).to.be.undefined
        })
    })
})
 */