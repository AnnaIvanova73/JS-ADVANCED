class Circle {
    constructor(radius){
        this.radius = radius;
        this._diameter = 0;
        this._area = 0;
    };

    get diameter() {
        this._diameter = this.radius * 2;
        return this._diameter;
    };

    set diameter(value) {
        this._diameter = Number(value);
        this.radius = this._diameter / 2;

    };

    get area (){
        this._area = Math.PI * Math.pow(this.radius, 2);
        return this._area;
    };
}
let c = new Circle(2);


// the setter needs to calculate
// the radius and change it and the getter needs to use the radius to calculate the diameter and return it.

console.log(`Radius: ${c.radius}`);

console.log(`Diameter: ${c.diameter}`);

console.log(`Area: ${c.area}`);

c.diameter = 1.6;

console.log(`Radius: ${c.radius}`);

console.log(`Diameter: ${c.diameter}`);

console.log(`Area: ${c.area}`);
