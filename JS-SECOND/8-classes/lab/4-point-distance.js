class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    };

    static distance(in1, in2) {
        const a = in1.x - in2.x;
        const b = in1.y - in2.y;
        return Math.sqrt(a * a + b * b);
    };
}

let p1 = new Point(5, 5);

let p2 = new Point(9, 8);

console.log(Point.distance(p1, p2));