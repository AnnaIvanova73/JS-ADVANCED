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
        it('Should have described properties', () => {
            assert.property(StringBuilder.prototype, 'append')
            assert.property(StringBuilder.prototype, 'prepend')
            assert.property(StringBuilder.prototype, 'insertAt')
            assert.property(StringBuilder.prototype, 'remove')
            assert.property(StringBuilder.prototype, 'toString')
        });
        it('Check array values', () => {
            let actual = noString._stringArray;
            let curr = new StringBuilder(undefined);
            assert.deepEqual(actual, []);
            assert.deepEqual(withString._stringArray, ['S', 't', 'a', 'm', 'a', 't']);
            assert.deepEqual(emptyString._stringArray, []);
            assert.deepEqual(curr._stringArray, []);
            assert.strictEqual(withString._stringArray.length, 6);
            assert.strictEqual(emptyString._stringArray.length, 0);
            assert.strictEqual(curr._stringArray.length, 0);
        });
    });

    describe('test-append-method', () => {

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
        it('append a non-string', function () {
            assert.throws(() => noString.append(5),TypeError,'Argument must be string');
        });
    });

    describe('test-prepend-method', () => {

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
        it('prepend a non-string', function () {
            assert.throws(() => noString.prepend(5),TypeError,'Argument must be string');
        });
    });
    describe('test-insertAt-method', () => {
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
        it('insert non-string', function () {
            assert.throws(() => noString.insertAt(5),TypeError,'Argument must be string');
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