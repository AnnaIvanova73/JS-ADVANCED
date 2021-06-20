describe('numberOperations', () => {
    describe('Should test powNumber', () => {
        it('Should test input that is not a number', () => {
            assert.isNaN(numberOperations.powNumber('asd'))
            assert.isNaN(numberOperations.powNumber())
            assert.strictEqual(numberOperations.powNumber(null), 0)
            assert.strictEqual(numberOperations.powNumber([]), 0)
            assert.isNaN(numberOperations.powNumber({}))
            assert.isNaN(numberOperations.powNumber(undefined))
        });
        it('Should test input that is float', () => {
            assert.strictEqual(numberOperations.powNumber(1.1), 1.2100000000000002)
            assert.strictEqual(numberOperations.powNumber(0.1), 0.010000000000000002)
            assert.strictEqual(numberOperations.powNumber(0.99), 0.9801)
            assert.strictEqual(numberOperations.powNumber(-0.99), 0.9801)
            assert.strictEqual(numberOperations.powNumber(-0.1), 0.010000000000000002)
            assert.strictEqual(numberOperations.powNumber(-1.1), 1.2100000000000002)
            assert.strictEqual(numberOperations.powNumber(-2.1), 4.41)
        });
        it('Should test input that is integer', () => {
            assert.strictEqual(numberOperations.powNumber(0), 0)
            assert.strictEqual(numberOperations.powNumber(1), 1)
            assert.strictEqual(numberOperations.powNumber(2), 4)
            assert.strictEqual(numberOperations.powNumber(10), 100)
            assert.strictEqual(numberOperations.powNumber(-1), 1)
            assert.strictEqual(numberOperations.powNumber(-2), 4)
        });
    });
    describe('Should test numberChecker', () => {
        it('Should throw is is not a number', () => {
            assert.throws(() => numberOperations.numberChecker('A'), Error, 'The input is not a number!')
            assert.throws(() => numberOperations.numberChecker({}), Error, 'The input is not a number!')
            assert.throws(() => numberOperations.numberChecker(), Error, 'The input is not a number!')
        });
        it('Should be bellow hundred', () => {
            assert.strictEqual(numberOperations.numberChecker([]), 'The number is lower than 100!')
            assert.strictEqual(numberOperations.numberChecker(' '), 'The number is lower than 100!')
            assert.strictEqual(numberOperations.numberChecker(''), 'The number is lower than 100!')
            assert.strictEqual(numberOperations.numberChecker(null), 'The number is lower than 100!')
            assert.strictEqual(numberOperations.numberChecker(99.99), 'The number is lower than 100!')
        });
        it('Should be above hundred', () => {
            assert.strictEqual(numberOperations.numberChecker(100), 'The number is greater or equal to 100!')
            assert.strictEqual(numberOperations.numberChecker(100.1), 'The number is greater or equal to 100!')
            assert.strictEqual(numberOperations.numberChecker(200), 'The number is greater or equal to 100!')
        });
    });
    describe('Should test sumArrays', () => {
        it('Should check inputs when they are not a number', () => {
            //assert.strictEqual(numberOperations.sumArrays({},{}),[])
            assert.throws(() => numberOperations.sumArrays({}, {}), Error, 'longerArr.slice is not a function')
            assert.throws(() => numberOperations.sumArrays([], {}), Error, 'longerArr.slice is not a function')
            assert.throws(() => numberOperations.sumArrays(true, {}), Error, 'longerArr.slice is not a function')
            assert.throws(() => numberOperations.sumArrays([], false), Error, 'longerArr.slice is not a function')
            assert.throws(() => numberOperations.sumArrays('aaa', 123), Error, 'longerArr.slice is not a function')
            assert.throws(() => numberOperations.sumArrays([], null), Error, 'Cannot read property \'length\' of null')

            assert.deepEqual(numberOperations.sumArrays({}, []), [])
            assert.deepEqual(numberOperations.sumArrays('aaa', 'aaa'), ["aa", "aa", "aa"])
        });
        it('Should work with not array input', () => {
            assert.deepEqual(numberOperations.sumArrays(123, 'aaa'), [ "undefineda", "undefineda", "undefineda",]);
            assert.deepEqual(numberOperations.sumArrays('', '123'), [ "1", "2", "3",]);
            assert.deepEqual(numberOperations.sumArrays(3, ''), []);
            assert.deepEqual(numberOperations.sumArrays([], []), []);
            assert.deepEqual(numberOperations.sumArrays({}, []), []);
        });
        it('Should work mixed array input', () => {
            assert.deepEqual(numberOperations.sumArrays(['a','a','a'],[1,2,3]), [ 'a1', 'a2', 'a3' ])
            assert.deepEqual(numberOperations.sumArrays([1,2,3],['a','a','a']), [ '1a', '2a', '3a' ])
            assert.deepEqual(numberOperations.sumArrays(['blue',2,'blabla'],[1000,'a','a']),  [ 'blue1000', '2a', 'blablaa' ])
            assert.deepEqual(numberOperations.sumArrays([100.1,{},true],[null,undefined]), [100.1, "[object Object]undefined", true])
        });
        it('Should work witn standard array input', () => {
            assert.deepEqual(numberOperations.sumArrays([1,2,3],[1,2,3]), [ 2, 4, 6 ])
            assert.deepEqual(numberOperations.sumArrays(['a','a','a'],['a','a','a']), [ 'aa', 'aa', 'aa' ])
        });
    });
})