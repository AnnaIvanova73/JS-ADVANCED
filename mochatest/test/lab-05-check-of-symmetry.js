function isSymmetric(arr) {
    if (!Array.isArray(arr)) {
        return false; // Non-arrays are non-symmetric

    }
    let reversed = arr.slice(0).reverse(); // Clone and reverse
    let equal = (JSON.stringify(arr) === JSON.stringify(reversed));
    return equal;

}

let assert = require('chai').assert;

describe('isSymmetric', function () {
    it('should catch if is not array', () => {
        assert.isFalse(isSymmetric('arr'))
        assert.isFalse(isSymmetric(1))
        assert.isFalse(isSymmetric('e'))
        assert.isFalse(isSymmetric({}))
        assert.isFalse(isSymmetric(null))
        assert.isFalse(isSymmetric());
    });

    it('should work ok with symmetric number arr', () => {
        assert.isTrue(isSymmetric([]))
        assert.isTrue(isSymmetric([1,2,3,2,1]))
        assert.isTrue(isSymmetric([1,1]))

    });

    it('should work ok with symmetric str arr', () => {
        assert.isTrue(isSymmetric(['a','n','n','a']))
        assert.isTrue(isSymmetric(['a','a','a']))
    });



    it('should return false when arr not symmetric', () => {
        assert.isFalse(isSymmetric([1,2]))

        assert.isFalse(isSymmetric([1,2,5,1]))
        assert.equal(isSymmetric(['c','a','d']),false)
    });
    it("should return false for arr wit diff types",() => {
        assert.isFalse(isSymmetric(['1',2]));
        assert.isFalse(isSymmetric([1,'1']));
    });

})