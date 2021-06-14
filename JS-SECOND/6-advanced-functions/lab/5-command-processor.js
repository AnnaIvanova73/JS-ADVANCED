function solution() {
let inner = '';

    return {
        append: (string) => {
            inner += string;
        },

        removeStart: (n) => {
           return inner = inner.slice(n);
        },
        removeEnd: (n) => {
            return inner = inner.slice(0,inner.length - n);
        },
        print: () => {console.log(inner)}
    }
}
let secondZeroTest = solution();



secondZeroTest.append('123');

secondZeroTest.append('45');

secondZeroTest.removeStart(2);

secondZeroTest.removeEnd(1);

secondZeroTest.print();