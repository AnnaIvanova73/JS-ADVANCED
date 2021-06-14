{

    /*
    let arrowSyntax = () => 5 * 5 * 5;
    let arrowSyntax1 = (a, b, c) => a * b * c;
    let arrowSyntax2 = y => y * y * y;

    console.log(arrowSyntax());
    console.log(arrowSyntax1(1, 2, 3));
    console.log(arrowSyntax2(5));

     */

    function cube(x) {
        return x * x * x;
    }

    let cubeArrow = y => {
        console.log("calculating...")
        return y * y * y
    };

    console.log(cube(5));
    console.log(cubeArrow(5));


    let func = (x) =>{return x*x};
    let func2 = (x) => x* x;
    console.log(func(3));
    console.log(func2(3));
}