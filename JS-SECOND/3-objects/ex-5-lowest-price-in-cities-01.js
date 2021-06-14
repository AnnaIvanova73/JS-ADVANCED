function solve(data) {
    let product = [];
    let params = data.map(e => e.split(' | '));
    params = params.reduce((acc, curr) => {
        let [town, prd, price] = curr;
        price = Number(price);

        if (!product.includes(curr[1])) {
            product.push(curr[1]);
        }
        let currTown = acc.filter(t => t.town === town && t.prd === prd)[0];
        if (currTown) {
            currTown.price = price;
        } else {
            acc.push({town, prd, price});
        }
        return acc;
    }, []);

    return product.reduce((acc, curr) => {
        const sameProducts = params.reduce((acc, e) => {

            if (e.prd === (curr)) {
                acc.push(e);
            }
            return acc
        }, []).sort((a, b) => a.price - b.price).shift()

        acc.push(`${sameProducts.prd} -> ${sameProducts.price} (${sameProducts.town})`);
        return acc
    }, []).join('\n');
}

console.log(solve(['Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'New York City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Mexico City | Audi | 100000',
    'Washington City | Mercedes | 1000']))

// Audi -> 100000 (Sofia City)
// BMW -> 99999 (Mexico City)
// Mitsubishi -> 1000 (New York City)
// Mercedes -> 1000 (Washington City)
// NoOffenseToCarLovers -> 0 (Sofia City)

function solve1(data) {
    let product = [];
    let params = data.map(e => e.split(' | '))
    params = params.reduce((acc, curr) => {
        let town = curr[0];
        let prd = curr[1];
        let price = curr[2];

        if (!product.includes(curr[1])) {
            product.push(curr[1]);
        }
        let currTown = acc.filter(t => t.town === town && t.prd === prd)[0];
        if (currTown) {
            currTown.price = price;
        } else {
            acc.push({town, prd, price});
        }
        return acc;
    }, []);

    let str = [];
    product.forEach(curr => {

        const sameProducts = params.reduce((acc, e) => {
            if (e.prd === (curr)) {
                acc.push(e);
            }
            return acc
        }, []).sort((a, b) => a.price - b.price).shift()

        str.push(`${sameProducts.prd} -> ${sameProducts.price} (${sameProducts.town})`)
    })
    return str.join('\n');
}
