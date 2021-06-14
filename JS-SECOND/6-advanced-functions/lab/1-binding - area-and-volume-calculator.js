function area() {
    return Math.abs(this.x * this.y);

}

function vol() {

    return Math.abs(this.x * this.y * this.z);

}

function solve(func1, func2, input) {

    let arr = JSON.parse(input);
    for (const obj of arr) {
        obj.area = func1.call(obj, Number(obj.x), Number(obj.y));
        obj.volume = func2.call(obj, Number(obj.x), Number(obj.z));
        delete obj.x
        delete obj.y
        delete obj.z
    }
   return arr
}

solve(area, vol, '[{"x":"1","y":"2","z":"10"},{"x":"7","y":"7","z":"10"},{"x":"5","y":"2","z":"10"}]');
