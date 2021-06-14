function solve() {
    let divExercise = document.getElementById('exercise');
    let textArea = divExercise.querySelector('textarea')
    document.getElementsByTagName('button')[0].addEventListener('click', generateFurnitureList);
    document.getElementsByTagName('button')[1].addEventListener('click', getBoughtProducts);

    function generateFurnitureList() {
        let arrInput = JSON.parse(textArea.value);
        arrInput.forEach(e => {
            let {name, img, price, decFactor} = e;

            let tdElements = generateElement(Array(5).fill('td'));
            let paragraphElements = generateElement(Array(3).fill('p'));


            paragraphElements[0].textContent = name;
            paragraphElements[1].textContent = price;
            paragraphElements[2].textContent = decFactor;
            let imgElement = document.createElement('img');
            imgElement.src = img;
            paragraphElements.unshift(imgElement);
            let input = document.createElement('input');
            input.type = "checkbox";
            paragraphElements.push(input);

            let tr = document.createElement('tr')
            tdElements.forEach((elem, i) => {
                elem.appendChild(paragraphElements[i]);
                tr.appendChild(elem);
            })
            let tbodyElement = document.querySelector('tbody');
            tbodyElement.appendChild(tr)
        });
    }

    function getBoughtProducts() {
        let priceAndAvg = [0, 0];
        let furn = new Set();
        let matches = document.querySelectorAll('input[type=checkbox]:checked');

        Array.from(matches).forEach(e => {
            let values = e.parentNode.parentNode.querySelectorAll('p');
            priceAndAvg[1] += Number(values[2].textContent)
            priceAndAvg[0] += Number(values[1].textContent)
            furn.add(values[0].textContent)
        });

        document.querySelectorAll('textArea')[1].textContent = [`Bought furniture: ${[...furn].join(', ')}`,
            `Total price: ${priceAndAvg[0].toFixed(2)}`,
            `Average decoration factor: ${priceAndAvg[1] / matches.length}`].join('\n');
    }

    function generateElement(args) {
        return args.reduce((acc, el) => {
            let elem = document.createElement(el);
            acc.push(elem);
            return acc;
        }, [])
    }
}





function solve1() {
    let divExercise = document.getElementById('exercise');
    let textArea = divExercise.querySelector('textarea')
    let btnGenerate = divExercise.querySelector('button')
    btnGenerate.addEventListener('click', e => {
        generateFurnitureList(e)
    });
    let btnBuy = document.getElementsByTagName('button')[1]

    btnBuy.addEventListener('click', e => {
        getBoughtProducts(e)
    });
    let price = 0;
    let avgFactor = 0;

    function generateFurnitureList(event) {
        let arrInput = JSON.parse(textArea.value);
        for (const e of arrInput) {

            price += price;
            decFactor += decFactor;

            let {name, img, price, decFactor} = e;

            let parImg = createIndvElWithTxtAndOrAttr('img', false, [`src= ${img}`])
            let parName = createIndvElWithTxtAndOrAttr('p', name,)
            let parPrice = createIndvElWithTxtAndOrAttr('p', price)
            let parDecFactor = createIndvElWithTxtAndOrAttr('p', decFactor)
            let input = createIndvElWithTxtAndOrAttr('input', false, ['type=checkbox']);

            let tds = createSameParentForEachChild('td', [parImg, parName, parPrice, parDecFactor, input])
            let tr = createIndvElWithTxtAndOrAttr('tr')
            appendChildrenToIndvParent(tr, tds);
            let tbodyElement = document.querySelector('tbody');
            tbodyElement.appendChild(tr)
        }

    }

    function getBoughtProducts() {
        let furn = new Set;
        let checkedFurniture = document.querySelectorAll('input[type=checkbox]:checked');
        Array.from(checkedFurniture).forEach((e, i) => {
            let values = e.parentNode.parentNode.querySelectorAll('p');
            avgFactor += Number(values[2].textContent)
            price += Number(values[1].textContent)
            furn.add(values[0].textContent)

        });

        document.querySelectorAll('textArea').textContent = [`Bought furniture: ${[...furn].join(', ')}`,
            `Total price: ${price.toFixed(2)}`,
            `Average decoration factor: ${avgFactor / checkedFurniture.length}`].text.join('\n');
    }

    function createIndvElWithTxtAndOrAttr(type, text, attributes = []) {
        let element = document.createElement(type);
        if (text) element.appendChild(document.createTextNode(text));
        attributes.map(attr => attr.split('=')).forEach(([name, value]) => element.setAttribute(name, value))
        return element;
    }


    function appendChildrenToIndvParent(parent, children) {
        children.forEach(child => parent.appendChild(child));
    }
}

/* Решение с проверки
function solve() {
    let divExercise = document.getElementById('exercise');
    let textArea = divExercise.querySelector('textarea')
    let btnGenerate = divExercise.querySelector('button')
    btnGenerate.addEventListener('click', e => {
        generateFurnitureList(e)
    });
    let btnBuy = document.getElementsByTagName('button')[1]

    btnBuy.addEventListener('click', e => {
        getBoughtProducts(e)
    });

    function generateFurnitureList(event) {
        if (textArea.value === '') {
            return;
        }
        try {
            let arrInput = JSON.parse(textArea.value);
            for (const e of arrInput) {
                if (!checkInput.hasName(e) || !checkInput.hasImg(e) ||
                    !checkInput.hasPrice(e) || !checkInput.hasDecFactor(e)) {
                    continue;
                }
                let {name, img, price, decFactor} = e;
                let tdElements = generateElement(['td', 'td', 'td', 'td', 'td']);

                let paragraphElements = generateElement(['p', 'p', 'p']);
                paragraphElements[0].textContent = name;
                paragraphElements[1].textContent = price;
                paragraphElements[2].textContent = decFactor;
                let imgElement = document.createElement('img');
                imgElement.src = img;
                paragraphElements.unshift(imgElement);
                let input = document.createElement('input');
                input.type = "checkbox";
                paragraphElements.push(input);
                let tr = document.createElement('tr')

                tdElements.forEach((elem, i) => {
                    elem.appendChild(paragraphElements[i]);
                    tr.appendChild(elem);
                })
                let tbodyElement = document.querySelector('tbody');
                tbodyElement.appendChild(tr)
            }
        } catch {

        }
    }

    function getBoughtProducts(e) {
        let price = 0;
        let avgFactor = 0;
        let furn = [];
        let actualLength = 0;
        Array.from(document.querySelectorAll('input[type=checkbox]')).forEach((e,i)=> {
            if (e.checked) {
                let values = e.parentNode.parentNode.querySelectorAll('p');
                avgFactor += Number(values[2].textContent)
                price += Number(values[1].textContent)
                let currFurniture = values[0].textContent;
                actualLength++;
                if (!furn.includes(currFurniture)) {
                    furn.push(currFurniture)
                }
            }
        })

        let textArea = document.querySelectorAll('textArea');
        let text = [];
        text.push(`Bought furniture: ${furn.join(', ')}`,`Total price: ${price.toFixed(2)}`,`Average decoration factor: ${avgFactor/actualLength}`)
        textArea[1].textContent = text.join('\n');
    }


    let checkInput = {
        hasName: (item) => {
            return !(item.name === 'undefined' || item.name === "");
        },
        hasImg: (item) => {
            return !(item.img === 'undefined' || item.name === '');
        },
        hasPrice: (item) => {
            return !(item.price === 'undefined' || item.price === 0);
        },
        hasDecFactor: (item) => {
            return !(item.decFactor === 'undefined' || item.decFactor === 0);
        },
    }

    function generateElement(args) {
        let elements = [];
        for (const arg of args) {
            let elem = document.createElement(arg)
            elements.push(elem);
        }
        return elements;
    }

}

 */