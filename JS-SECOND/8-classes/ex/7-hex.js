class Hex {
    constructor(number) {
        this.number = number;
    };

    valueOf() {
        return this.number;
    };

    toString() {
        const prefix = '0x'
        return prefix + String(this.number.toString(16)).toUpperCase();
    };

    plus(param) {
        if (typeof param !== 'number') {
            param = param.valueOf();
        }
        let number = this.number + param;
        return new Hex(number)
    };

    minus(param) {
        if (typeof param !== 'number') {
            param = param.valueOf();
        }
        let number = this.number - param;
        return new Hex(number)
    };

    parse(hexString) {
        return parseInt(hexString, 16)
    };
}

let FF = new Hex(255);

console.log(FF.toString());
FF.valueOf() + 1 === 256;

let a = new Hex(10);

let b = new Hex(5);

console.log(a.plus(b).toString());

console.log(a.plus(b).toString()==='0xF');