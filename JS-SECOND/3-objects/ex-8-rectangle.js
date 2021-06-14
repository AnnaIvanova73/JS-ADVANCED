function rectangle(width, height, color) {
    color = color.substring(0, 1).toUpperCase() + color.slice(1);
    return {
        width: width,
        height: height,
        color: color,
        calcArea: function () {
            return this.width * this.height
        }
    }
}

let rect = rectangle(4, 5, 'red');

console.log(rect.width);

console.log(rect.height);

console.log(rect.color);

console.log(rect.calcArea());

function rectangle1(width, height, color) {

    let createRectangleFactoryFunction = {
        width: width,
        height: height,
        color: color,
        calcArea: () => {
            return width * height
        }
    }
    return createRectangleFactoryFunction
}

function rectangle2(width, height, color) {

    let rect = {
        width: width,
        height: height,
        color: color,
        calcArea: () => {
            return rect.width * rect.height
        }
    }
    return rect
}