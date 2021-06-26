describe("numberOperations", function() {

    describe("Should test powNumber", function() {
        it("Should return NaN", function() {
            assert.isNaN(numberOperations.powNumber())
            assert.isNaN(numberOperations.powNumber({}))
            assert.isNaN(numberOperations.powNumber('blabla'))
        });
        it("Should work with unexpected input", function() {
            assert.strictEqual(numberOperations.powNumber(true),1)
            assert.strictEqual(numberOperations.powNumber(false),0)
            assert.strictEqual(numberOperations.powNumber([]),0)
            assert.strictEqual(numberOperations.powNumber(null),0)
            assert.strictEqual(numberOperations.powNumber(''),0)
            assert.strictEqual(numberOperations.powNumber(' '),0)
        });
        it("Should work with negativeNumbers", function() {
            assert.strictEqual(numberOperations.powNumber(-1),1)
            assert.strictEqual(numberOperations.powNumber(-1.1),1.2100000000000002)
            assert.strictEqual(numberOperations.powNumber(-0.1),0.010000000000000002)
            assert.strictEqual(numberOperations.powNumber(-2),4)
            assert.strictEqual(numberOperations.powNumber(-2.2),4.840000000000001)
        });
        it("Should work with positiveNumbers", function() {
            assert.strictEqual(numberOperations.powNumber(0),0)
            assert.strictEqual(numberOperations.powNumber(1),1)
            assert.strictEqual(numberOperations.powNumber(1.1),1.2100000000000002)
            assert.strictEqual(numberOperations.powNumber(0.1),0.010000000000000002)
            assert.strictEqual(numberOperations.powNumber(2),4)
            assert.strictEqual(numberOperations.powNumber(2.2),4.840000000000001)
        });

    });

    describe("Should test numberChecker", function() {
        it("Should throw when input is NaN", function() {
            assert.throw(() => numberOperations.numberChecker(),Error,`The input is not a number!`);
            assert.throw(() => numberOperations.numberChecker({}),Error,`The input is not a number!`);
            assert.throw(() => numberOperations.numberChecker('blabla'),Error,`The input is not a number!`);
        });
        it("Should work with unexpected input", function() {
            assert.strictEqual(numberOperations.numberChecker(true),`The number is lower than 100!`)
            assert.strictEqual(numberOperations.numberChecker(false),`The number is lower than 100!`)
            assert.strictEqual(numberOperations.numberChecker([]),`The number is lower than 100!`)
            assert.strictEqual(numberOperations.numberChecker(null),`The number is lower than 100!`)
            assert.strictEqual(numberOperations.numberChecker(''),`The number is lower than 100!`)
            assert.strictEqual(numberOperations.numberChecker(' '),`The number is lower than 100!`)
        });
        it("Should work with negativeNumbers", function() {
            assert.strictEqual(numberOperations.numberChecker(-2),`The number is lower than 100!`)
            assert.strictEqual(numberOperations.numberChecker(-2.2),`The number is lower than 100!`)
            assert.strictEqual(numberOperations.numberChecker(-100),`The number is lower than 100!`)
            assert.strictEqual(numberOperations.numberChecker(-101),`The number is lower than 100!`)
            assert.strictEqual(numberOperations.numberChecker(-99),`The number is lower than 100!`)
            assert.strictEqual(numberOperations.numberChecker(-99.99),`The number is lower than 100!`)
        });
        it("Should work with positiveNumbers", function() {
            assert.strictEqual(numberOperations.numberChecker(2),`The number is lower than 100!`)
            assert.strictEqual(numberOperations.numberChecker(2.2),`The number is lower than 100!`)
            assert.strictEqual(numberOperations.numberChecker(100),`The number is greater or equal to 100!`)
            assert.strictEqual(numberOperations.numberChecker(101),`The number is greater or equal to 100!`)
            assert.strictEqual(numberOperations.numberChecker(1000),`The number is greater or equal to 100!`)
            assert.strictEqual(numberOperations.numberChecker(99),`The number is lower than 100!`)
            assert.strictEqual(numberOperations.numberChecker(99.99),`The number is lower than 100!`)
        });

    });


    describe("Should test sumArrays", function() {
        it("Should throw when don't have second param or invalid params", function() {
            assert.throw(() => numberOperations.sumArrays(),Error,`Cannot read property 'length' of undefined`);
            assert.throw(() => numberOperations.sumArrays({}),Error,`Cannot read property 'length' of undefined`);
            assert.throw(() => numberOperations.sumArrays('blabla'),Error,`Cannot read property 'length' of undefined`);
            assert.throw(() => numberOperations.sumArrays(12),Error,`Cannot read property 'length' of undefined`);
            assert.throw(() => numberOperations.sumArrays([],true),TypeError,`longerArr.slice is not a function`);
            assert.throw(() => numberOperations.sumArrays([],{}),TypeError,`longerArr.slice is not a function`);
            assert.throw(() => numberOperations.sumArrays([],12),TypeError,`longerArr.slice is not a function`);
            assert.throws(() => numberOperations.sumArrays({}, {}), Error, 'longerArr.slice is not a function')
            assert.throws(() => numberOperations.sumArrays([], {}), Error, 'longerArr.slice is not a function')
            assert.throws(() => numberOperations.sumArrays(true, {}), Error, 'longerArr.slice is not a function')
            assert.throws(() => numberOperations.sumArrays([], false), Error, 'longerArr.slice is not a function')
            assert.throws(() => numberOperations.sumArrays('aaa', 123), Error, 'longerArr.slice is not a function')
            assert.throws(() => numberOperations.sumArrays([], null), Error, 'Cannot read property \'length\' of null')
        });
        it("Should work with unexpected input", function() {
            assert.deepEqual(numberOperations.sumArrays(true,[]),[])
            assert.deepEqual(numberOperations.sumArrays([],[]),[])
            assert.deepEqual(numberOperations.sumArrays('',[]),[])
            assert.deepEqual(numberOperations.sumArrays(' ',[]),[' '])
            assert.deepEqual(numberOperations.sumArrays([],' '),[' '])
            assert.deepEqual(numberOperations.sumArrays([],''),[])
            assert.deepEqual(numberOperations.sumArrays([],'ababab'),[ 'a', 'b', 'a', 'b', 'a', 'b' ])
            assert.deepEqual(numberOperations.sumArrays('ababab',[]),[ 'a', 'b', 'a', 'b', 'a', 'b' ])
            assert.deepEqual(numberOperations.sumArrays(12,[]),[ ])
        });
        it("Should work with combine input", function() {
            assert.deepEqual(numberOperations.sumArrays('aaaaa',[12,23,44]),[ 'a12', 'a23', 'a44', 'a', 'a' ])
            assert.deepEqual(numberOperations.sumArrays([12,23,44],''),[ 12, 23, 44 ])
            assert.deepEqual(numberOperations.sumArrays(12,['a','a','a']),["undefineda","undefineda","undefineda"])
            assert.deepEqual(numberOperations.sumArrays(12,[1,1,1]),[NaN, NaN, NaN])

        });
        it("Should check result with first array longer than second", function() {
            assert.deepEqual(numberOperations.sumArrays(['a','a','a','a','a','a'],[12,23,44]),[ 'a12', 'a23', 'a44', 'a', 'a', 'a' ])
            assert.deepEqual(numberOperations.sumArrays([1,2,3,4],[12,23,44]),[ 13, 25, 47, 4 ])
            assert.deepEqual(numberOperations.sumArrays(['a','a','a','a','a','a'],['b','b']),[ 'ab', 'ab', 'a', 'a', 'a', 'a' ])
            assert.deepEqual(numberOperations.sumArrays([12,23,44,556],['b','b']),[ '12b', '23b', 44, 556 ])
            assert.deepEqual(numberOperations.sumArrays([12,23,44],[]),[ 12, 23, 44 ])
            assert.deepEqual(numberOperations.sumArrays(['a','a','a'],[]),['a','a','a'])
        });
        it("Should check result with second array longer than first", function() {
            assert.deepEqual(numberOperations.sumArrays([12,23,44],['a','a','a','a','a','a']), [ '12a', '23a', '44a', 'a', 'a', 'a' ])
            assert.deepEqual(numberOperations.sumArrays([12,23,44],[1,2,3,4]),[ 13, 25, 47, 4 ])
            assert.deepEqual(numberOperations.sumArrays(['b','b'],['a','a','a','a','a','a']),[ 'ba', 'ba', 'a', 'a', 'a', 'a' ])
            assert.deepEqual(numberOperations.sumArrays(['b','b'],[12,23,44,556]),[ 'b12', 'b23', 44, 556 ])
            assert.deepEqual(numberOperations.sumArrays([],[12,23,44]),[ 12, 23, 44 ])
            assert.deepEqual(numberOperations.sumArrays([],['a','a','a']),['a','a','a'])
        });

    });
});