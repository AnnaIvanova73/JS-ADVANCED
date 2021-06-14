function solve(arg) {
    let data = arg.map(e => e.split(' | '))

    let findObject = (acc, property, element) => {
        return acc.filter(obj => obj[property] === element)
    }

    let sortInput = data.reduce((acc, el) => {
        let price = Number(el[2])
        let town = findObject(acc, 'name', el[0])[0];

        if (!town) {
            acc.push({name: el[0], [el[1]]: price})

        } else if (town && town.name === el[0]) {
            let product = el[1];

            if (town[product]) {
                town[product] = price
            } else {
                town[el[1]] = price;
            }

        }
        return acc;
    }, [])

    let products = [];
    sortInput.forEach(e => {

        Object.entries(e).forEach((key, value) => {

            if (key[0] !== 'name') {

                const productName = key[0];
                const productPrice = Number(key[1]);

                let currProduct = products.find(a => a.product === productName)

                if (currProduct && currProduct.product === productName) {

                    if (Number(productPrice) < Number(currProduct.price)) {
                        currProduct.price = productPrice;
                        currProduct.town = e.name;
                    }
                } else {
                    products.push({product: productName, town: e.name, price: productPrice})
                }
            }
        })

    })
    return products.map(e => `${e.product} -> ${e.price} (${e.town})`).join('\n')
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

/*
function solve(arg) {
    let data = arg.map(e => e.split(' | '))

    let findObject = (acc, property, element) => {
        return acc.filter(obj => obj[property] === element)
    }

    let sortInput = data.reduce((acc, el) => {
        let price = Number(el[2])
        let town = findObject(acc, 'name', el[0])[0];

        if (!town) {
            acc.push({name: el[0], [el[1]]: price})

        } else if (town && town.name === el[0]) {
            let product = el[1];

            if (town[product]) {
                town[product] = price
            } else {
                town[el[1]] = price;
            }

        }
        return acc;
    }, [])

    let products = [];
    sortInput.forEach(e => {

        Object.entries(e).forEach((key, value) => {

            if (key[0] !== 'name') {

                const productName = key[0];
                const productPrice = Number(key[1]);

                let currProduct = products.find(a => a.product === productName)

                if (currProduct && currProduct.product === productName) {

                    if (Number(productPrice) < Number(currProduct.price)) {
                        currProduct.price = productPrice;
                        currProduct.town = e.name;
                    }
                } else {
                    products.push({product: productName, town: e.name, price: productPrice})
                }
            }
        })

    })
    return products.map(e => `${e.product} -> ${e.price} (${e.town})`).join('\n')
}

 */