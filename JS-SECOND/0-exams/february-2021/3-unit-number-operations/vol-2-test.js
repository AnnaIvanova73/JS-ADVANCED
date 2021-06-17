describe("numberOperations", function () {
    let myArr1;
    let myArr2;

    beforeEach(function () {
        myArr1 = [46,-34,-67,23,101]
        myArr2 = [1,2,3,345]

    });

    describe("test_powNumber", function () {
        it('should be undefined', function () {
            assert.isNaN(numberOperations.powNumber('asd'))
            assert.isNaN(numberOperations.powNumber())
            assert.isNaN(numberOperations.powNumber(undefined))

        });
        it('should correct result', function () {
            assert.equal(numberOperations.powNumber([]),0)
            assert.equal(numberOperations.powNumber(null),0)
            assert.equal(numberOperations.powNumber(34),1156)
            assert.equal(numberOperations.powNumber(-1),1)
            assert.equal(numberOperations.powNumber(0.56),0.31360000000000005)
            assert.equal(numberOperations.powNumber(-0.56),0.31360000000000005)
        });

    });
    describe("test_numberChecker", function () {
        it('should throw incorrect input', function () {
            assert.throw(() => numberOperations.numberChecker('asd'), `The input is not a number!`);
            assert.throw(() => numberOperations.numberChecker(), `The input is not a number!`);
        });

        it('should lower than 100', function () {
            assert.equal(numberOperations.numberChecker(null),'The number is lower than 100!')
            assert.equal(numberOperations.numberChecker([]),'The number is lower than 100!')
            assert.equal(numberOperations.numberChecker(null),'The number is lower than 100!')
            assert.equal(numberOperations.numberChecker(-50),'The number is lower than 100!')
            assert.equal(numberOperations.numberChecker(5),'The number is lower than 100!')
            assert.equal(numberOperations.numberChecker(99.99),'The number is lower than 100!')
        });
        it('should edge ', function () {
            assert.equal(numberOperations.numberChecker(100),'The number is greater or equal to 100!')
        });
        it('should greater ', function () {
            assert.equal(numberOperations.numberChecker(10000),'The number is greater or equal to 100!')
            assert.equal(numberOperations.numberChecker(101),'The number is greater or equal to 100!')
        });

    });
    describe("test_sumArrays", function () {
        it("with strings ", function () {

            let actual = numberOperations.sumArrays('asd','asd')
            let expected = [ 'aa', 'ss', 'dd' ];
            assert.deepEqual(actual,expected)
            assert.equal(actual.length,expected.length)

            let actual1 = numberOperations.sumArrays('asd','asd','aaaaaa')
            let expected1 = [ 'aa', 'ss', 'dd' ];
            assert.deepEqual(actual1,expected1)
            assert.equal(actual1.length,expected1.length)
        });
        it("should numbers" , function () {
            assert.deepEqual(numberOperations.sumArrays(myArr1,myArr2),[ 47, -32, -64, 368, 101 ])
            assert.deepEqual(numberOperations.sumArrays(myArr2,myArr1),[ 47, -32, -64, 368, 101 ])
            assert.equal(numberOperations.sumArrays(myArr1, myArr2).length,5)
        });
        it("should work with Numbers", function () {
            assert.deepEqual(numberOperations.sumArrays([],[]),[])
            assert.deepEqual(numberOperations.sumArrays([1],[]),[1])
            assert.deepEqual(numberOperations.sumArrays([],[1]),[1])
            assert.deepEqual(numberOperations.sumArrays(myArr2,myArr1),[ 47, -32, -64, 368, 101 ])

        });
        it("should throw", function () {
            assert.throw(() =>numberOperations.sumArrays([]), 'Cannot read property \'length\' of undefined');
            assert.throw(() =>numberOperations.sumArrays(), 'Cannot read property \'length\' of undefined');
            assert.throw(() =>numberOperations.sumArrays('...longerArr...'), 'Cannot read property \'length\' of undefined');
            assert.throw(() =>numberOperations.sumArrays(123), 'Cannot read property \'length\' of undefined');
        });
    });
});