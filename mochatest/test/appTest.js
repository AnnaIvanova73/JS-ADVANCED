function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

//const assert = require('chai').assert;
const assert = require('chai').assert;
describe('isOddOrEven', () =>{

    it('shouldBeReturnUndefinedForInputNumber', function () {
        let actual = isOddOrEven(2);
        assert.isUndefined(actual)
    });

    it('shouldBeReturnUndefinedForEmptyInput', function () {
        let actual = isOddOrEven();
        assert.isUndefined(actual)
    });
    it('shouldReturnCorrectEvenForEvenInput', function () {
        let actual = isOddOrEven('aa');
        let expected = 'even'
        assert.equal(actual,expected)
    });
    it('shouldReturnCorrectOddForOddInput', function () {
        let actual = isOddOrEven('aad');
        let expected = 'odd'
        assert.equal(actual,expected)
    });
    it('shouldWorkCorrectPassingStringsMultipleTimes', function () {
        let array = ['asdg','asdga','asdasd']
        for (let i = 0; i < array.length; i++) {
            let actual = isOddOrEven(array[i]);
            assert.isOk(actual)
        }

    });

})