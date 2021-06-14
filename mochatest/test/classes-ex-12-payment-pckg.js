class PaymentPackage {
    constructor(name, value) {
        this.name = name;
        this.value = value;
        this.VAT = 20;      // Default value
        this.active = true; // Default value
    }

    get name() {
        return this._name;
    }

    set name(newValue) {
        if (typeof newValue !== 'string') {
            throw new Error('Name must be a non-empty string');
        }
        if (newValue.length === 0) {
            throw new Error('Name must be a non-empty string');
        }
        this._name = newValue;
    }

    get value() {
        return this._value;
    }

    set value(newValue) {
        if (typeof newValue !== 'number') {
            throw new Error('Value must be a non-negative number');
        }
        if (newValue < 0) {
            throw new Error('Value must be a non-negative number');
        }
        this._value = newValue;
    }

    get VAT() {
        return this._VAT;
    }

    set VAT(newValue) {
        if (typeof newValue !== 'number') {
            throw new Error('VAT must be a non-negative number');
        }
        if (newValue < 0) {
            throw new Error('VAT must be a non-negative number');
        }
        this._VAT = newValue;
    }

    get active() {
        return this._active;
    }

    set active(newValue) {
        if (typeof newValue !== 'boolean') {
            throw new Error('Active status must be a boolean');
        }
        this._active = newValue;
    }

    toString() {
        const output = [
            `Package: ${this.name}` + (this.active === false ? ' (inactive)' : ''),
            `- Value (excl. VAT): ${this.value}`,
            `- Value (VAT ${this.VAT}%): ${this.value * (1 + this.VAT / 100)}`
        ];
        return output.join('\n');
    }
}

let clazz = new PaymentPackage('st', 100000);
console.log(clazz.toString())

const assert = require('chai').assert;
describe('PaymentPackage', function () {

    let correctInstance = '';
    beforeEach(function () {
        correctInstance = new PaymentPackage('Stamat', 1000)
    });


    describe('test-class-constructor correct init', () => {

        it('Should be instanceof PaymentPackage', () => {
            assert.instanceOf(correctInstance, PaymentPackage);
        });
        it('Should have described properties', () => {

            assert.property(correctInstance, 'name');
            assert.property(correctInstance, 'value');
            assert.property(correctInstance, 'VAT');
            assert.property(correctInstance, 'active');
            assert.property(correctInstance, 'toString');

        });
        it('Should have correct types', () => {

            assert.typeOf(correctInstance.name, 'string');
            assert.typeOf(correctInstance.value, 'number');
            assert.typeOf(correctInstance.VAT, 'number');
            assert.typeOf(correctInstance.active, 'boolean');

        });

        it('Should have correct values on initial properties', () => {
            assert.deepEqual(correctInstance.name, 'Stamat')
            assert.deepEqual(correctInstance.value, 1000)
            assert.deepEqual(correctInstance.VAT, 20)
            assert.deepEqual(correctInstance.active, true)
        });
    })

    describe('test-class-constructor should throw', () => {

        it('Should throw for name not typeof string', () => {
            assert.throw(() => {
                new PaymentPackage(12, 12)
            }, 'Name must be a non-empty string')
            assert.throw(() => {
                new PaymentPackage()
            }, 'Name must be a non-empty string')

        });
        it('Should throw for name emty string', () => {
            assert.throw(() => {
                new PaymentPackage('', 12)
            }, 'Name must be a non-empty string');
        });

        it('Should throw for value not a number', () => {
            assert.throw(() => {
                new PaymentPackage('Pesho', 'Gosho')
            }, 'Value must be a non-negative number');
            assert.throw(() => {
                new PaymentPackage('Pesho')
            }, 'Value must be a non-negative number');
        });

        it('Should throw for negative number', () => {
            assert.throw(() => {
                new PaymentPackage('Pesho', -1)
            }, 'Value must be a non-negative number')
        });
        it('Should create instance correct', () => {
            let i1 = new PaymentPackage('Pesho', 0);
            assert.equal(i1.value, 0)
        });
    });
    describe('test-method-VAT', () => {

        it('Should throw for VAT not a number', () => {
            assert.throw(() => correctInstance.VAT = 'Stamat', 'VAT must be a non-negative number');
            assert.throw(() => correctInstance.VAT = [], 'VAT must be a non-negative number');
        });
        it('Should throw for negative VAT', () => {
            assert.throw(() => correctInstance.VAT = -1, 'VAT must be a non-negative number');

        });

        it('Should change VAT successfully', () => {
            let currClazz = new PaymentPackage('Stamat', 1000);
            currClazz.VAT = 10;
            correctInstance.VAT = 10;
            assert.deepEqual(correctInstance.VAT, currClazz.VAT);
        });

        it('Should get value of vat correct', () => {
            let actual = correctInstance.VAT;
            let expected = 20;
            assert.equal(actual, expected)
        });
    });
    describe('test-method-active', () => {

        it('Should throw for active not a boolean', () => {
            assert.throw(() => correctInstance.active = 'Stamat', 'ctive status must be a boolean');
            assert.throw(() => correctInstance.active = 12, 'ctive status must be a boolean');
            assert.throw(() => correctInstance.active = [], 'ctive status must be a boolean');
        });
        it('Should change active successfully', () => {
            correctInstance.active = true;
            assert.isTrue(correctInstance.active)
            correctInstance.active = false;
            assert.isFalse(correctInstance.active)
        });

    });
    describe('test-method-toString', () => {

        it('Should return proper string with active true', () => {
            let expectedObj = new PaymentPackage('Stamat', 1000)
            expectedObj.active = true;
            correctInstance.active = true;
            const output = [
                `Package: ${expectedObj.name}` + (expectedObj.active === false ? ' (inactive)' : ''),
                `- Value (excl. VAT): ${expectedObj.value}`,
                `- Value (VAT ${expectedObj.VAT}%): ${expectedObj.value * (1 + expectedObj.VAT / 100)}`
            ];
            let expected = output.join('\n')
            assert.deepEqual(correctInstance.toString(), expectedObj.toString());
            assert.strictEqual(correctInstance.toString(), expected);
        });

        it('Should return proper string with active false', () => {
            let expectedObj = new PaymentPackage('Stamat', 1000)
            expectedObj.active = false;
            correctInstance.active = false;
            const output = [
                `Package: ${expectedObj.name}` + (expectedObj.active === false ? ' (inactive)' : ''),
                `- Value (excl. VAT): ${expectedObj.value}`,
                `- Value (VAT ${expectedObj.VAT}%): ${expectedObj.value * (1 + expectedObj.VAT / 100)}`
            ];
            let expected = output.join('\n')
            assert.deepEqual(correctInstance.toString(), expectedObj.toString());
            assert.strictEqual(correctInstance.toString(), expected);
        });
    });
});

/*
describe('PaymentPackage', function () {

    let correctInstance = '';
    beforeEach(function () {
        correctInstance = new PaymentPackage('Stamat', 1000)
    });


    describe('test-class-constructor correct init', () => {

        it('Should be instanceof PaymentPackage', () => {
            assert.instanceOf(correctInstance, PaymentPackage);
        });
        it('Should have described properties', () => {

            assert.property(correctInstance, 'name');
            assert.property(correctInstance, 'value');
            assert.property(correctInstance, 'VAT');
            assert.property(correctInstance, 'active');
            assert.property(correctInstance, 'toString');

        });
        it('Should have correct types', () => {

            assert.typeOf(correctInstance.name, 'string');
            assert.typeOf(correctInstance.value, 'number');
            assert.typeOf(correctInstance.VAT, 'number');
            assert.typeOf(correctInstance.active, 'boolean');

        });

        it('Should have correct values on initial properties', () => {
            assert.deepEqual(correctInstance.name, 'Stamat')
            assert.deepEqual(correctInstance.value, 1000)
            assert.deepEqual(correctInstance.VAT, 20)
            assert.deepEqual(correctInstance.active, true)
        });
    })

    describe('test-class-constructor should throw', () => {

        it('Should throw for name not typeof string', () => {
            assert.throw(() => {
                new PaymentPackage(12, 12)
            }, 'Name must be a non-empty string')
            assert.throw(() => {
                new PaymentPackage()
            }, 'Name must be a non-empty string')
            assert.throw(() => {
                new PaymentPackage(null, 12)
            }, 'Name must be a non-empty string')
            assert.throw(() => {
                new PaymentPackage([], 12)
            }, 'Name must be a non-empty string')
            assert.throw(() => {
                new PaymentPackage({}, 12)
            }, 'Name must be a non-empty string')
        });
        it('Should throw for name emty string', () => {
            assert.throw(() => {
                new PaymentPackage('', 12)
            }, 'Name must be a non-empty string');
        });

        it('Should throw for value not a number', () => {
            assert.throw(() => {
                new PaymentPackage('Pesho', 'Gosho')
            }, 'Value must be a non-negative number');
            assert.throw(() => {
                new PaymentPackage('Pesho')
            }, 'Value must be a non-negative number');
            assert.throw(() => {
                new PaymentPackage('Pesho', [])
            }, 'Value must be a non-negative number');
            assert.throw(() => {
                new PaymentPackage('Pesho', {})
            }, 'Value must be a non-negative number');
            assert.throw(() => {
                new PaymentPackage('Pesho', null)
            }, 'Value must be a non-negative number');
        });
        it('Should throw for negative number', () => {
            assert.throw(() => {
                new PaymentPackage('Pesho', -1)
            }, 'Value must be a non-negative number')
            assert.throw(() => {
                new PaymentPackage('Pesho', -1000)
            }, 'Value must be a non-negative number')
        });
        it('Should create instance correct', () => {
            let i1 = new PaymentPackage('Pesho', 0);
            let i2 = new PaymentPackage('Stamat', 1);
            assert.equal(i1.value, 0)
            assert.equal(i2.value, 1)

            i1 = new PaymentPackage('Pesho', 0.1);
            i2 = new PaymentPackage('Stamat', 2.3);
            assert.equal(i1.value, 0.1)
            assert.equal(i2.value, 2.3)
            assert.equal(i1.name, 'Pesho')
            assert.equal(i2.name, 'Stamat')

        });
    });
    describe('test-method-VAT', () => {

        it('Should throw for VAT not a number', () => {
            assert.throw(() => correctInstance.VAT = 'Stamat', 'VAT must be a non-negative number');
            assert.throw(() => correctInstance.VAT = [], 'VAT must be a non-negative number');
        });
        it('Should throw for negative VAT', () => {
            assert.throw(() => correctInstance.VAT = -1, 'VAT must be a non-negative number');

        });

        it('Should change VAT successfully', () => {
            let currClazz = new PaymentPackage('Stamat', 1000);
            currClazz.VAT = 10;
            correctInstance.VAT = 10;
            assert.deepEqual(correctInstance.VAT, currClazz.VAT);
        });

        it('Should get value of vat correct', () => {
            let actual = correctInstance.VAT;
            let expected = 20;
            assert.equal(actual, expected)
        });
    });
    describe('test-method-active', () => {

        it('Should throw for active not a boolean', () => {
            assert.throw(() => correctInstance.active = 'Stamat', 'ctive status must be a boolean');
            assert.throw(() => correctInstance.active = 12, 'ctive status must be a boolean');
            assert.throw(() => correctInstance.active = [], 'ctive status must be a boolean');
        });
        it('Should change active successfully', () => {
            correctInstance.active = true;
            assert.isTrue(correctInstance.active)
            correctInstance.active = false;
            assert.isFalse(correctInstance.active)
        });

    });
    describe('test-method-toString', () => {

        it('Should return proper string with active true', () => {
            let expectedObj = new PaymentPackage('Stamat', 1000)
            expectedObj.active = true;
            correctInstance.active = true;
            const output = [
                `Package: ${expectedObj.name}` + (expectedObj.active === false ? ' (inactive)' : ''),
                `- Value (excl. VAT): ${expectedObj.value}`,
                `- Value (VAT ${expectedObj.VAT}%): ${expectedObj.value * (1 + expectedObj.VAT / 100)}`
            ];
            let expected = output.join('\n')
            assert.deepEqual(correctInstance.toString(), expectedObj.toString());
            assert.strictEqual(correctInstance.toString(), expected);
        });

        it('Should return proper string with active false', () => {
            let expectedObj = new PaymentPackage('Stamat', 1000)
            expectedObj.active = false;
            correctInstance.active = false;
            const output = [
                `Package: ${expectedObj.name}` + (expectedObj.active === false ? ' (inactive)' : ''),
                `- Value (excl. VAT): ${expectedObj.value}`,
                `- Value (VAT ${expectedObj.VAT}%): ${expectedObj.value * (1 + expectedObj.VAT / 100)}`
            ];
            let expected = output.join('\n')
            assert.deepEqual(correctInstance.toString(), expectedObj.toString());
            assert.strictEqual(correctInstance.toString(), expected);
        });
    });
});
 */