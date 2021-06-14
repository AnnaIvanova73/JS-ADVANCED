class Stringer {
    constructor(string, length) {
        this.innerString = string;
        this.innerLength = length;
        this.manipulated = this.innerString;
    };

    decrease(val) {
        this.innerLength - val <= 0 ? this.innerLength = 0 : this.innerLength -= val;
    };

    increase(val) {
        this.innerLength += val;
    };

    toString() {
        let dots = '.';

        if (this.innerLength === 0) {
            return dots.repeat(3);
        }
        if (this.innerString.length > this.innerLength) {
            return this.innerString.substring(0, this.innerLength) + dots.repeat(3)
        }
        return this.innerString;
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test