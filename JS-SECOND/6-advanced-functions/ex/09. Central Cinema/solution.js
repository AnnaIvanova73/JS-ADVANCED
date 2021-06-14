function solve() {
    let input = Array.from(document.querySelectorAll('#add-new #container')[0].children)
    input[3].addEventListener('click', onscreen);
    let sectionArchiveUlElement = document.querySelector('#archive ul');

    let checkIfItsNumber = (ticketPrice) => {
        ticketPrice = ticketPrice.value.trim()
        let num = Number(ticketPrice);
        return num !== num;
    };

    let checkInputValues = (name, hall, ticketPrice) => (!name.value.trim() || !hall.value.trim() || !ticketPrice.value.trim())

    function onscreen(e) {
        e.preventDefault();

        let [name, hall, ticketPrice] = input.slice(0, -1);

        if (checkInputValues(name, hall, ticketPrice) || checkIfItsNumber(ticketPrice)) {
            return;
        }

        let ulElement = document.querySelector('#movies ul');
        let liElement = createAppendTags('li', ['span', 'strong'], [name.value, `Hall: ${hall.value}`], []);
        let div = createAppendTags('div', ['strong', 'input', 'button'],
            [ticketPrice.value, 'Tickets Sold', 'Archive'], ['placeholder']);

        let inputDiv = div.querySelector('input');
        let price = ticketPrice.value;
        let movieName = name.value


        div.querySelector('button').addEventListener('click', function () {
            if (!checkIfItsNumber(inputDiv) && inputDiv.value.trim()) {
                archive(e, movieName, price, inputDiv, liElement)
            }
        });

        liElement.appendChild(div);
        ulElement.appendChild(liElement);
        input.forEach(e => e.value = '');
    }

    function archive(e, nameMovie, priceTickets, inputDiv, elementToRemove) {
        let profit = Number(priceTickets) * Number(inputDiv.value);

        let liElement = createAppendTags('li', ['span','strong','button'],
            [nameMovie,`Total amount: ${profit.toFixed(2)}`,'Delete'], []);

        liElement.querySelector('button').addEventListener('click', () => (liElement.remove()) )

        sectionArchiveUlElement.appendChild(liElement);
        elementToRemove.remove();
    }

    function createAppendTags(parentTag, tags, textNode, attrForForms) {
        let parent = document.createElement(parentTag);

        tags.forEach((tag, i) => {
            let textNodeValue = textNode[i];

            let currTag = document.createElement(tag);

            if (['option', 'input', 'form'].includes(tag)) {

                if (attrForForms.length !== 0) {
                    let attr = attrForForms.pop();
                    currTag.setAttribute(attr, textNodeValue);
                }

            } else if (textNodeValue !== -1) {
                currTag.textContent = textNodeValue;
            }
            parent.appendChild(currTag);
        })
        return parent;
    }

    document.querySelector('#archive button').addEventListener('click',() =>(sectionArchiveUlElement.innerHTML = ''));
}

/* почти същото работи
function solve() {
    let buttonOnScreen = document.querySelector('#add-new button');
    buttonOnScreen.addEventListener('click', onscreen);
    let sectionArchiveUlElement = document.querySelector('#archive ul');

    let checkIfItsNumber = (ticketPrice) => {
        ticketPrice = ticketPrice.value.trim()
        let num = Number(ticketPrice);
        return num !== num;
    };

    let checkInputValues = (name, hall, ticketPrice) => (!name.value.trim() || !hall.value.trim() || !ticketPrice.value.trim())


    function onscreen(e) {
        e.preventDefault();

        let input = Array.from(document.querySelectorAll('#add-new #container')[0].children).slice(0, -1);
        let [name, hall, ticketPrice] = input;

        if (checkInputValues(name, hall, ticketPrice) || checkIfItsNumber(ticketPrice)) {
            return;
        }

        let ulElement = document.querySelector('#movies ul');
        let liElement = createAppendTags('li', ['span', 'strong'], [name.value, `Hall: ${hall.value}`], []);
        let div = createAppendTags('div', ['strong', 'input', 'button'],
            [ticketPrice.value, 'Tickets Sold', 'Archive'], ['placeholder']);

        let inputDiv = div.querySelector('input');
        let price = ticketPrice.value;
        let movieName = name.value


        div.querySelector('button').addEventListener('click', function () {
            if (!checkIfItsNumber(inputDiv) && inputDiv.value.trim()) {
                archive(e, movieName, price, inputDiv, liElement)
            }
        });

        liElement.appendChild(div);
        ulElement.appendChild(liElement);
        input.forEach(e => e.value = '');
    }

    function archive(e, nameMovie, priceTickets, inputDiv, elementToRemove) {
        let profit = Number(priceTickets) * Number(inputDiv.value);

        let liElement = createAppendTags('li', ['span','strong','button'],
            [nameMovie,`Total amount: ${profit.toFixed(2)}`,'Delete'], []);

        liElement.querySelector('button').addEventListener('click', ()=>(liElement.remove()) )

        sectionArchiveUlElement.appendChild(liElement);
        elementToRemove.remove();
    }

    function createAppendTags(parentTag, tags, textNode, typeAttribute) {
        let parent = document.createElement(parentTag);

        tags.forEach((tag, i) => {
            let textNodeValue = textNode[i];

            let currTag = document.createElement(tag);

            if (['option', 'input', 'form'].includes(tag)) {

                if (typeAttribute.length !== 0) {
                    let attr = typeAttribute.pop();
                    currTag.setAttribute(attr, textNodeValue);
                }

            } else if (textNodeValue !== -1) {
                currTag.textContent = textNodeValue;
            }
            parent.appendChild(currTag);
        })
        return parent;
    }

    document.querySelector('#archive button').addEventListener('click',() =>(sectionArchiveUlElement.innerHTML = '') )
}
 */