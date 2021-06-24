class StringBuilder {
    constructor(string) {
        if (string !== undefined) {
            StringBuilder._vrfyParam(string);
            this._stringArray = Array.from(string);
        } else {
            this._stringArray = [];
        }
    }

    append(string) {
        StringBuilder._vrfyParam(string);
        for(let i = 0; i < string.length; i++) {
            this._stringArray.push(string[i]);
        }
    }

    prepend(string) {
        StringBuilder._vrfyParam(string);
        for(let i = string.length - 1; i >= 0; i--) {
            this._stringArray.unshift(string[i]);
        }
    }

    insertAt(string, startIndex) {
        StringBuilder._vrfyParam(string);
        this._stringArray.splice(startIndex, 0, ...string);
    }

    remove(startIndex, length) {
        this._stringArray.splice(startIndex, length);
    }

    static _vrfyParam(param) {
        if (typeof param !== 'string') throw new TypeError('Argument must be а string');
    }

    toString() {
        return this._stringArray.join('');
    }
}

let assert = require('chai').assert;
describe('StringBuilder', function () {

    let withString = '';
    let noString = '';
    let emptyString = '';
    let arrInit = '';
    let arrEmpty = '';
    beforeEach(function () {
        withString = new StringBuilder('Stamat')
        noString = new StringBuilder()
        emptyString = new StringBuilder('')
        arrInit = ['S', 't', 'a', 'm', 'a', 't'];
        arrEmpty = [];

    });


    describe('test-class-constructor correct init', () => {

        it('Should be instanceof StringBuilder', () => {
            assert.instanceOf(withString, StringBuilder);
        });
        it('Should have described properties', () => {
            assert.property(withString, '_stringArray')
        });
        it('Should init correctly with no value', () => {
            assert.instanceOf(noString, StringBuilder)
        });
        it('Should have correct values init', () => {
            assert.typeOf(noString, 'object')
            assert.typeOf(withString, 'object')
        });

        it('Should be array', () => {
            assert.isArray(noString._stringArray);
        });
        it('Check array values', () => {
            let actual = noString._stringArray;
            assert.deepEqual(actual, []);
            assert.deepEqual(withString._stringArray, ['S', 't', 'a', 'm', 'a', 't']);
            assert.deepEqual(emptyString._stringArray, []);
            assert.strictEqual(withString._stringArray.length, 6);
            assert.strictEqual(emptyString._stringArray.length, 0);
        });
    });
    describe('test-class-constructor should throw errors', () => {
        it('throw for invalid input', () => {
            assert.throws(() => new StringBuilder({}), TypeError);
            assert.throws(() => new StringBuilder([]), TypeError);
            assert.throws(() => new StringBuilder(null), TypeError);
            assert.throws(() => new StringBuilder(12), TypeError);
            assert.throws(() => new StringBuilder(0.1), TypeError);
        });
    });
    describe('test-append-method', () => {
        it('throw for invalid input', () => {
            assert.throws(() => withString.append({}), TypeError);
            assert.throws(() => emptyString.append({}), TypeError);
        });
        it('should work properly', () => {
            for (let i = 0; i < 3; i++) {
                arrInit.push('a');
                arrEmpty.push('a');
            }
            withString.append('aaa')
            emptyString.append('aaa')
            assert.deepEqual(withString._stringArray, arrInit)
            assert.deepEqual(emptyString._stringArray, arrEmpty)
            assert.lengthOf(withString._stringArray, arrInit.length)
            assert.lengthOf(emptyString._stringArray, arrEmpty.length)
        });
    });

    describe('test-prepend-method', () => {
        it('throw for invalid input', () => {
            assert.throws(() => withString.prepend({}), TypeError);
            assert.throws(() => emptyString.prepend({}), TypeError);
        });

        it('prepend should work properly', () => {
            for (let i = 0; i < 3; i++) {
                arrInit.unshift('q');
                arrEmpty.unshift('q');
            }
            withString.prepend('qqq')
            emptyString.prepend('qqq')
            assert.deepEqual(withString._stringArray, arrInit)
            assert.deepEqual(emptyString._stringArray, arrEmpty)
            assert.lengthOf(withString._stringArray, arrInit.length)
            assert.lengthOf(emptyString._stringArray, arrEmpty.length)
        });
    });
    describe('test-insertAt-method', () => {
        it('throw for invalid input', () => {
            assert.throws(() => withString.prepend({}, 1), TypeError);
            assert.throws(() => emptyString.prepend({}, 1), TypeError);
        });
        it('should insert element in correct index', () => {
            let string = 'whoop'
            arrEmpty.splice(1, 0, ...string);
            arrInit.splice(1, 0, ...string);
            withString.insertAt(string, 1)
            emptyString.insertAt(string, 1)
            assert.deepEqual(withString._stringArray, arrInit)
            assert.deepEqual(emptyString._stringArray, arrEmpty)
            assert.lengthOf(withString._stringArray, arrInit.length)
            assert.lengthOf(emptyString._stringArray, arrEmpty.length)
        });
    });
    describe('test-remove-method', () => {
        it('splice array work with no error', () => {
            arrEmpty.splice(5, 20);
            arrInit.splice(1, 0);
            withString.remove(1, 0)
            emptyString.remove(5, 20)
            assert.deepEqual(withString._stringArray, arrInit)
            assert.deepEqual(emptyString._stringArray, arrEmpty)
            assert.lengthOf(withString._stringArray, arrInit.length)
            assert.lengthOf(emptyString._stringArray, arrEmpty.length)
        });
    });
    describe('test-static-_vrfyParam-method', () => {
        it('throw for invalid input', () => {
        });
    });
    describe('test-toString-method', () => {
        it('should work ok', () => {
            let string = 'pneumonoultramicroscopicsilicovolcanoconiosis'
            arrEmpty.splice(34, 0, ...string);
            arrInit.splice(22, 0, ...string);
            withString.insertAt(string, 22)
            emptyString.insertAt(string, 34)
            assert.deepEqual(withString.toString(), arrInit.join(''))
            assert.deepEqual(emptyString.toString(), arrEmpty.join(''))
            assert.equal(withString.toString().length, arrInit.length)
            assert.equal(emptyString.toString().length, arrEmpty.length)
        })
    });
});


