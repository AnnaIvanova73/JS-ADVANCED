{
    //LESS ARGUMENTS THEN YOU NEED FOR ALL THE PARAMETERS
    //  option 1
    function pow(x, y = 2) {

        let total = 1;
        for (let i = 0; i < y; i++) {
            total *= x;
        }
        return total;
    }

    console.log(pow(3))

    // option 2
    function pow2(x, y) {
        if (y === undefined) {
            y = 2
        }
        let total = 1;
        for (let i = 0; i < y; i++) {
            total *= x;
        }
        return total;
    }

    console.log(pow2(3))

    // option 3
    function pow3(x, y) {
        y = typeof y === "undefined" ? 2 : y;
        let total = 1;
        for (let i = 0; i < y; i++) {
            total *= x;
        }
        return total;
    }

    console.log(pow3(3))


    //TO MANY ARGUMENTS THEN YOU NEED

    function pow4(x, y = 2, ...extra) {

        console.log(extra)

        let total = 1;
        for (let i = 0; i < y; i++) {
            total *= x;
        }
        return total;
    }

    console.log(pow4(3, 3, 4, 6, 3, 4))

    function largest(x, ...extra) {
        let largest = x;
        for (let i = 0; i < extra.length; i++) {
            if (extra[i] > largest) {
                largest = extra[i];
            }
        }
        return largest;
    }
    console.log(largest(3, 3, 4, 6, 3, 4))

    //Implicit -> behind the scene or not explicitly stated -> this, arguments -> arguments is not array
    // ...extra -> rest parameters is array
    function pow5(x, y , ...extra) {

        console.log(this)
        console.log(arguments)
        let total = 1;
        for (let i = 0; i < y; i++) {
            total *= x;
        }
        return total;
    }

    console.log(pow5(3, 3))
}