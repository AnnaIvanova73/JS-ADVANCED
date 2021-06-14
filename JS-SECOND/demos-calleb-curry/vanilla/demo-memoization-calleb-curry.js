{
    pow.calculated = {};

    function pow(x, y) {
        let stringVersion = x + "^" + y;

        //console.log(stringVersion);
        if (stringVersion in pow.calculated) {
            console.log('power found')
            return pow.calculated[stringVersion];
        }

        console.log('calculating')
        let total = 1;

        for (let i = 0; i < y; i++) {
            total *= x;
        }
        //pow.calculated.push(total);
        pow.calculated[stringVersion] = total;
        console.log(pow.calculated);
        return total;
    }

    pow(3, 3);
    pow(3, 3);
    pow(10, 4);
    pow(10, 3);
}