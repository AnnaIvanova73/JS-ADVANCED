function sum(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += Number(num);

    }
    return sum;
}


const assert = require('chai').assert;

describe("sum", function () {

    it('should catch uncorrect input', function () {
        assert.throws(() => sum(), TypeError,'arr is not iterable');
        assert.isNaN( sum('asd'));
        assert.throws( () => sum(1), TypeError,'arr is not iterable');
        assert.throws( () => sum({}), TypeError,'arr is not iterable');
    });

    it('should work properly', function () {

        let actual = sum([1,2,3,4,5]);
        assert.equal(actual,15);
        actual = sum([]);
        assert.equal(actual,0);
        assert.equal(sum([-1,-2]),-3)
    });
})


// describe("mathEnforcer", function () {
//     it('shouldHavePropertySubtractTen', function () {
//         let currCalc = mathEnforcer;
//         let property = mathEnforcer.subtractTen;
//         assert.propertyVal(currCalc, 'subtractTen', property);
//     });
//
//
//     it('subtract should return undefined', function () {
//         const array = [null, '', ' ', [], {}, 'asd', undefined];
//         for (let i = 0; i < array.length; i++) {
//             assert.isUndefined(mathEnforcer.subtractTen(array[i]))
//         }
//     });
//
//     it('shouldWorkAsExpected', function () {
//         const array = [2, 50, 100, -10000, -1234, 0];
//         let num = 10;
//         for (let i = 0; i < array.length; i++) {
//             let actual = mathEnforcer.subtractTen(array[i])
//             let expected = array[i] - num;
//             assert.equal(actual, expected);
//         }
//     });
//
//     // it('IEEE 754 substract', function () {
//     //     let expected = 3.0001 + 5
//     //     let actual = mathEnforcer.subtractTen(0.0001);
//     //     assert.closeTo(actual, expected, 0.01, 'numbers are close');
//     // });
// })
// describe("mathEnforcer", function () {
//     it('shouldHavePropertySum', function () {
//         let currCalc = mathEnforcer;
//         let property = mathEnforcer.sum;
//         assert.propertyVal(currCalc, 'sum', property);
//     });
//
//     it('should return undefined', function () {
//         const array = [null, '', ' ', [], {'a':1}, 'asd', undefined, mathEnforcer.addFive(), true, false];
//         for (let i = 0; i < array.length; i++) {
//             assert.isUndefined(mathEnforcer.sum(array[i], 1))
//             assert.isUndefined(mathEnforcer.sum(array[i], array[array[i]]))
//             assert.isUndefined(mathEnforcer.sum(1, array[array[i]]))
//         }
//     });
//
//     it('IEEE 754 sum', function () {
//         let expected = 0.0001 + 3.000000951;
//         let actual = mathEnforcer.sum(0.0001, 3.000000951);
//         assert.closeTo(actual, expected, 0.01, 'numbers are close');
//     });
//
//     // it('should work proper', function () {
//     //     expect(mathEnforcer.sum(1.5, 1.5)).to.equal(3);
//     //     expect(mathEnforcer.sum(-1.5, -1.5)).to.equal(-3);
//     // });
//     it('should work proper positive', function () {
//
//         let expected = -14 + (-34)
//         let actual = mathEnforcer.sum(-14, -34);
//         assert.equal(actual, expected)
//         assert.closeTo(actual, expected, 0.01, 'numbers are close');
//     });
//     it('should work proper positive', function () {
//         let expected = -100 + 100
//         let actual = mathEnforcer.sum(-100, 100);
//         assert.equal(actual, expected)
//         assert.closeTo(actual, expected, 0.01, 'numbers are close');
//     });
//
// })
// describe("mathEnforcer", function () {
//     // it('shouldReturnWhenNonInstanceOf', function () {
//     //     // trite proverki, koito chupqt 4, 11,12 testove
//     //     expect(mathEnforcer.subtractTen(5.5)).closeTo(-4.5, 0.1);
//     //     expect(mathEnforcer.addFive(-3.5)).closeTo(1.5, 0.1);
//     //     expect(mathEnforcer.addFive(1.5)).closeTo(6.5, 0.1);
//     // });
// })

