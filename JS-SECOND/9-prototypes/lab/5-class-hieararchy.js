function solve() {

    class Figure {

        constructor(unit) {
            this.units = unit ? unit : 'cm';
        };

        get area() {
        };

        changeUnits(value) {
            this.units = value;
        };

        toString() {
            return `Figures units: ${this.units}`;
        }

        _getUnits(unit) {
            return {
                mm: 10,
                m: 0.01,
                cm: 1,
            }
        }
    }

    class Circle extends Figure {

        constructor(radius) {
            super('cm');
            this.radius = radius;
        }

        get area() {
            let radius = this._getUnits()[this.units] * this.radius;
            return radius * radius * Math.PI;
        }

        toString() {
            return super.toString() +
                ` Area: ${this.area} - radius: ${this._getUnits()[this.units] * this.radius}`
        }
    }

    class Rectangle extends Figure {
        constructor(width, height, units) {
            super(units);
            this.width = width;
            this.height = height;
        }

        get area() {
            return (this.width * this._getUnits()[this.units]) * (this.height * this._getUnits()[this.units]);
        }

        toString() {
            return super.toString() +
                ` Area: ${this.area} - width: ${this.width * this._getUnits()[this.units]}, height: ${this.height * this._getUnits()[this.units]}`
        }
    }

    return {
        Figure, Circle, Rectangle
    }
}

let c = new Circle(5);
console.log(c)
console.log(c.area); // 78.53981633974483

console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5


let r = new Rectangle(3, 4, 'mm');

console.log(r.area); // 1200

console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40


r.changeUnits('cm');

console.log(r.area); // 12

console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height:4


c.changeUnits('mm');

console.log(c.area); // 7853.981633974483

console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50