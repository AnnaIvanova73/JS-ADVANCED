describe('testNumbers', () => {
    describe('Should test sumNumbers', () => {
        it('Should test input that is float', () => {
            assert.strictEqual(testNumbers.sumNumbers(0, 0.2), "0.20")
            assert.strictEqual(testNumbers.sumNumbers(1.1, 1), "2.10")
            assert.strictEqual(testNumbers.sumNumbers(1, 1.1), "2.10")
            assert.strictEqual(testNumbers.sumNumbers(-1.1, -2.2), "-3.30")
            assert.strictEqual(testNumbers.sumNumbers(-1.1, 2), "0.90")
            assert.strictEqual(testNumbers.sumNumbers(1.1, -2), "-0.90")
            assert.strictEqual(testNumbers.sumNumbers(-0.1, 0), "-0.10")
            assert.strictEqual(testNumbers.sumNumbers(-2.3, -1), "-3.30")
            assert.strictEqual(testNumbers.sumNumbers(-2.2, -2.2), "-4.40")
        });
        it('Should test input that is not a number', () => {
            assert.isUndefined(testNumbers.sumNumbers('asd'))
            assert.isUndefined(testNumbers.sumNumbers('asd', 'asd'))
            assert.isUndefined(testNumbers.sumNumbers(123, 'asd'))
            assert.isUndefined(testNumbers.sumNumbers('123', 123))
            assert.isUndefined(testNumbers.sumNumbers())
            assert.isUndefined(testNumbers.sumNumbers(null, 3))
            assert.isUndefined(testNumbers.sumNumbers([], 3))
            assert.isUndefined(testNumbers.sumNumbers(3, []))
            assert.isUndefined(testNumbers.sumNumbers({}, {}))
            assert.isUndefined(testNumbers.sumNumbers(undefined, 3))
        });
        it('Should test input that is integer', () => {
            assert.strictEqual(testNumbers.sumNumbers(0, 0), "0.00")
            assert.strictEqual(testNumbers.sumNumbers(1, 1), "2.00")
            assert.strictEqual(testNumbers.sumNumbers(2, 100), "102.00")
            assert.strictEqual(testNumbers.sumNumbers(10, -100), "-90.00")
            assert.strictEqual(testNumbers.sumNumbers(-10, 100), "90.00")
            assert.strictEqual(testNumbers.sumNumbers(-1, -1), "-2.00")
            assert.strictEqual(testNumbers.sumNumbers(-2, -1), "-3.00")
        });

    });
    describe('Should test numberChecker', () => {
        it('Should throw is is not a number', () => {
            assert.throws(() => testNumbers.numberChecker('A'), Error, 'The input is not a number!')
            assert.throws(() => testNumbers.numberChecker({}), Error, 'The input is not a number!')
            assert.throws(() => testNumbers.numberChecker(), Error, 'The input is not a number!')
        });
        it('Should be even', () => {
            assert.strictEqual(testNumbers.numberChecker(false), `The number is even!`)
            assert.strictEqual(testNumbers.numberChecker([]), 'The number is even!')
            assert.strictEqual(testNumbers.numberChecker(' '), 'The number is even!')
            assert.strictEqual(testNumbers.numberChecker(''), 'The number is even!')
            assert.strictEqual(testNumbers.numberChecker(null), 'The number is even!')
            assert.strictEqual(testNumbers.numberChecker(200), 'The number is even!')
            assert.strictEqual(testNumbers.numberChecker(100), 'The number is even!')

        });
        it('Should be odd', () => {
            assert.strictEqual(testNumbers.numberChecker(true), `The number is odd!`)
            assert.strictEqual(testNumbers.numberChecker(99.99), 'The number is odd!')
            assert.strictEqual(testNumbers.numberChecker(100.1), 'The number is odd!')
            assert.strictEqual(testNumbers.numberChecker(-4.1), 'The number is odd!')
            assert.strictEqual(testNumbers.numberChecker(4.1), 'The number is odd!')

        });
    });
    describe("Should test averageSumArray", function () {
        it("Should throw or NAN ", function () {
            assert.throw(() => testNumbers.averageSumArray(), Error, `Cannot read property 'length' of undefined`);
            assert.isNaN(testNumbers.averageSumArray({}));
            assert.isNaN(testNumbers.averageSumArray('blabla'));
            assert.isNaN(testNumbers.averageSumArray(12));
            assert.isNaN(testNumbers.averageSumArray([]));
            assert.isNaN(testNumbers.averageSumArray({}));
            assert.isNaN(testNumbers.averageSumArray(true));
            assert.isNaN(testNumbers.averageSumArray(false));
            assert.isNaN(testNumbers.averageSumArray(['a', 'a', 'a', 'a', 'a', 'a']));
            assert.isNaN(testNumbers.averageSumArray(['a', 'a', 'a',12,33]));
            assert.throws(() => testNumbers.averageSumArray(null), Error, 'Cannot read property \'length\' of null')
        });

        it("Should check result with int array", function () {
            assert.strictEqual(testNumbers.averageSumArray([1, 2, 3, 4]), 2.5)
            assert.strictEqual(testNumbers.averageSumArray([12, 23, 44, 556]), 158.75)
            assert.strictEqual(testNumbers.averageSumArray([12, 23, 44]), 26.333333333333332)
            assert.strictEqual(testNumbers.averageSumArray([-12, 23, -44]), -11)
            assert.strictEqual(testNumbers.averageSumArray([12, -23, -44]), -18.333333333333332)
        });
        it("Should check result with float", function () {
            assert.strictEqual(testNumbers.averageSumArray([1.2, 2.3, 3.3, 4.4]), 2.8)
            assert.strictEqual(testNumbers.averageSumArray([-12.12, 23.23, -44.44]), -11.11)
            assert.strictEqual(testNumbers.averageSumArray([-12.12, -23, -44]), -26.373333333333335)
        });
        it("Should check result mixed arr ", function () {
            assert.strictEqual(testNumbers.averageSumArray([12, 23.23, 44, 556]), 158.8075)
            assert.strictEqual(testNumbers.averageSumArray([12.12, 23, 44]), 26.373333333333335)
            assert.strictEqual(testNumbers.averageSumArray([12.12, 0, -44,-1.01]), -8.2225)
        });
    });
})
