(function solve() {
    String.prototype.ensureStart = function (str) {
        return this.startsWith(str) ? this + '' : str + this;
    };
    String.prototype.ensureEnd = function (str) {
        return this.endsWith(str) ? this + '' : this + str;
    };
    String.prototype.isEmpty = function () {
        return this.length === 0;
    };
    String.prototype.truncate = function (n) {
        if (n < 4) {
            return '.'.repeat(n);
        }
        if (this.toString().length <= n) {
            return this.toString();
        } else {
            let lastIndex = this.toString().substr(0,n-2).lastIndexOf(" ");
            if (lastIndex === -1) {
                return this.slice(0, n - 3) + '...';
            } else {

                return this.toString().substr(0, lastIndex) + '...';
            }
        }
    };

    String.format = function (string, ...params) {
        let output = string;
        while (output.includes('{')) {
            let start = output.indexOf('{')
            let end = output.indexOf('}')
            let part1 = output.slice(0, start)
            let part2 = output.slice(end + 1)
            if (params.length > 0) {
                output = part1 + params.shift() + part2;
                continue;
            }
            if (params.length === 0 && output.includes('{')) {
                return output;
            }
        }
        return output;
    };
})()


let str = 'my string';

str = str.ensureStart('my');

str = str.ensureStart('hello ');

str = str.truncate(16);
console.log(str);
str = str.truncate(14);
console.log(str);
str = str.truncate(8);
console.log(str);
str = str.truncate(4);
console.log(str);
str = str.truncate(2);
console.log(str);
str = String.format('The {0} {1} fox',

    'quick', 'brown');
console.log(str);
str = String.format('jumps {0} {1}',

    'dog');
console.log(str);