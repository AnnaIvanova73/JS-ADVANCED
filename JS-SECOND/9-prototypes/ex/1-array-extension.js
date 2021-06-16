(function solve() {
    Array.prototype.last = function () {
        return this[this.length - 1];
    };
    Array.prototype.skip = function (n) {
        return this.slice(n).reduce((acc,e)=> [...acc,e],[]);
    };
    Array.prototype.take = function (n) {
        return this.slice(0,n).reduce((acc,e)=> [...acc,e],[]);
    };
    Array.prototype.sum = function () {
        return this.reduce((acc,el) => acc + el,0);
    };

    Array.prototype.average = function () {
        return this.reduce((acc,el) => acc + el /this.length,0)
    };
})();


let testArray = [1, 2, 3];

console.log(testArray.take(2));
console.log(testArray.average());