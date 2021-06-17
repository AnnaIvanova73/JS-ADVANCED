describe('numberOperations', () => {

    describe('Test_powNumber', () => {
        it('testCorrectPowOperation', () => {
            assert.strictEqual(numberOperations.powNumber(null),0)
            assert.strictEqual(numberOperations.powNumber(0),0)
            assert.strictEqual(numberOperations.powNumber(-1),1)
            assert.strictEqual(numberOperations.powNumber(1),1)
            assert.strictEqual(numberOperations.powNumber(2),4)
            assert.strictEqual(numberOperations.powNumber(1000),1000000)
            assert.strictEqual(numberOperations.powNumber([]),0)
        });
        it('testPowOperationGivenIncorrectInputIsNaN', () => {
            assert.isNaN(numberOperations.powNumber(undefined))
            assert.isNaN(numberOperations.powNumber())
        });
    });

    describe('Test numberChecker', () => {
        it('testNumberCheckerGivenCorrectInputBelow100', () => {
            assert.strictEqual(numberOperations.numberChecker(99),'The number is lower than 100!')
            assert.strictEqual(numberOperations.numberChecker(50),'The number is lower than 100!')
            assert.strictEqual(numberOperations.numberChecker(-1),'The number is lower than 100!')
            assert.strictEqual(numberOperations.numberChecker(1),'The number is lower than 100!')
            assert.strictEqual(numberOperations.numberChecker(0),'The number is lower than 100!')
        });
        it('testNumberCheckerGivenCorrectInputAboveOrEqual100', () => {
            assert.strictEqual(numberOperations.numberChecker(100),'The number is greater or equal to 100!')
            assert.strictEqual(numberOperations.numberChecker(101),'The number is greater or equal to 100!')
            assert.strictEqual(numberOperations.numberChecker(10000),'The number is greater or equal to 100!')
        });
        it('testNumberCheckerShouldThrowForInputNotANuber', () => {
            assert.throw(() => numberOperations.numberChecker(undefined),'The input is not a number!');
            assert.throw(() => numberOperations.numberChecker(),'The input is not a number!');
            assert.throw(() => numberOperations.numberChecker('a'),'The input is not a number!');
            assert.throw(() => numberOperations.numberChecker('{}'),'The input is not a number!');
        });
    });
    describe('test_SumArrays', () => {
        it('test_is_Missing_Arr_Params_Throw_TypeError', () => {
            assert.throw(() => numberOperations.sumArrays([]),TypeError,'Cannot read property \'length\' of undefined');
            assert.throw(() => numberOperations.sumArrays(),TypeError,'Cannot read property \'length\' of undefined');
            assert.throw(() => numberOperations.sumArrays(),TypeError,'Cannot read property \'length\' of undefined');
            assert.throw(() => numberOperations.sumArrays(null,[]),TypeError,'Cannot read property \'length\' of null');
            assert.throw(() => numberOperations.sumArrays({}, {}),TypeError,'longerArr.slice is not a function');
            assert.throw(() => numberOperations.sumArrays(12, 12),TypeError,'longerArr.slice is not a function');
        });
        it('test_is_Unexpected_Arr_Params_Works', () => {
            assert.deepEqual(numberOperations.sumArrays('',''),[]);
            assert.deepEqual(numberOperations.sumArrays('12','12'),['11', '22']);
            assert.deepEqual(numberOperations.sumArrays(12,'12'),[ 'undefined1', 'undefined2' ]);
            assert.deepEqual(numberOperations.sumArrays([-1,],'12'),[ '-11', '2' ]);
        });
        it('test_is_Work_Arr1_Bigger', () => {
            assert.deepEqual(numberOperations.sumArrays([12,34,56,78],[ 24, 68,]),[36, 102, 56, 78]);
            assert.deepEqual(numberOperations.sumArrays([12,13],[]),[12,13]);
            assert.deepEqual(numberOperations.sumArrays(['12','5','6'],['1']),['121', '5', '6']);
            assert.deepEqual(numberOperations.sumArrays(['a','a','a'],['ac','b']),['aac', 'ab', 'a']);
        });
        it('test_is_Work_Arr2_Bigger_NumberArr', () => {
            assert.deepEqual(numberOperations.sumArrays([ 24, 68],[12,34,56,78]),[36, 102, 56, 78]);
            assert.deepEqual(numberOperations.sumArrays([1],[34,56]),[35, 56]);
            assert.deepEqual(numberOperations.sumArrays(['1','3'],['12','5','6']),['112', '35', '6']);
            assert.deepEqual(numberOperations.sumArrays(['ac','b'],['a','a','a']),['aca', 'ba', 'a']);
        });
        it('test_is_Work_With_Nested_Arr', () => {
            assert.deepEqual(numberOperations.sumArrays([ [24], [68]],[[12],[34],[56,78]]),['2412', '6834', [ 56, 78 ]]);
            assert.deepEqual(numberOperations.sumArrays([1],[34,[56]]),[35, [ 56 ]]);
            assert.deepEqual(numberOperations.sumArrays(['1','3',['bla','blabla','blablabla']],['12','5','6']),["112","35","bla,blabla,blablabla6"]);
            assert.deepEqual(numberOperations.sumArrays(['a','a','a'],['ac','b'],['a','a','a'],[33],[99]),[ 'aac', 'ab', 'a']);
        });
    });
});