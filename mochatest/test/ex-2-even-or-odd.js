function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

let assert = require('chai').assert;


describe('isOddOrEven',function () {

    let invalidValues = '';
    let evenLength = '';
    let oddLength = '';
    let odd;
    let even;
    beforeEach(function () {
        invalidValues = [1,{},[],null];
        evenLength = 'durabura'
        oddLength = 'aha';
        even = 'even';
        odd = 'odd'
    });

    it('should be undefined for !== string',() => {
        invalidValues.forEach(val => {
           assert.isUndefined(isOddOrEven(val));
        });
        assert.isUndefined(isOddOrEven(),even)
    });
    it('should be odd',() => {
        assert.equal(isOddOrEven(oddLength),odd);
        assert.equal(isOddOrEven('b'),odd)
    });

    it('should be even',() => {
        assert.equal(isOddOrEven(evenLength),even);
        assert.equal(isOddOrEven(''),even)
    });

});

