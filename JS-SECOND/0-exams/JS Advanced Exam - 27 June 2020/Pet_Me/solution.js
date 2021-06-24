function solve() {
    let btnAdd = document.querySelector('#container > button');

    const isInvalid = (p1, p2, p3, p4) => !p1.trim() || !p2.trim() || !p3.trim() || !p4.trim();
    const cleanInputFields = (arr) => arr.forEach(e => e.value = '');
    let isNotANumber = (p) => {
        let num = Number(p);
        return num !== num;
    };
    const appendChildren = (pr, children) => children.forEach(child => pr.appendChild(child));
    btnAdd.addEventListener('click', (e) => {
        e.preventDefault();
        let name = document.querySelector('input[placeholder="Name"]').value.trim();
        let age = document.querySelector('input[placeholder="Age"]').value.trim();
        let kind = document.querySelector('input[placeholder="Kind"]').value.trim();
        let currOwner = document.querySelector('input[placeholder="Current Owner"]').value.trim()

        console.log(name)
        if (isInvalid(name, age, kind, currOwner) || isNotANumber(age)) {

            cleanInputFields(Array.from(document.querySelectorAll('input')));
            return;
        }

        let adoptionUl = document.querySelector('#adoption > ul');

        let liElement = createElement('li');

        let pElement = createElement('p');
        let strongName = createElement('strong', name);
        let firstTextNode = document.createTextNode(" is a ");
        let strongYears = createElement('strong', Number(age));
        let secondTextNode = document.createTextNode(" year old ");
        let strongTypePet = createElement('strong', kind);
        appendChildren(pElement, [strongName, firstTextNode, strongYears, secondTextNode, strongTypePet]);
        let spanOwner = createElement('span', `Owner: ${currOwner}`);
        let btnContact = createElement('button', 'Contact with owner');

        btnContact.addEventListener('click', () => {
            btnContact.remove();
            let divWrapper = createElement('div');
            let input = createElement('input', null, ['placeholder=Enter your names']);
            let btnTakeIt = createElement('button', 'Yes! I take it!');

            btnTakeIt.addEventListener('click', (e) => {
                e.preventDefault();
                let newOwnerNames = document.querySelector('input[placeholder="Enter your names"]');
                if (!newOwnerNames.value) {
                    return;
                }
                liElement.remove();
                let adoptedUl = document.querySelector('#adopted > ul');
                divWrapper.remove();
                spanOwner.textContent = `New Owner: ${newOwnerNames.value}`;
                let buttonChecked = createElement('button', 'Checked');
                buttonChecked.addEventListener('click', () => liElement.remove());
                liElement.appendChild(buttonChecked);
                adoptedUl.appendChild(liElement);

            });

            appendChildren(divWrapper, [input, btnTakeIt]);
            liElement.appendChild(divWrapper);
        })

        appendChildren(liElement, [pElement, spanOwner, btnContact]);
        adoptionUl.appendChild(liElement);
        cleanInputFields(Array.from(document.querySelectorAll('input')));
    })

    function createElement(type, text, attributes = []) {
        let element = document.createElement(type);
        if (text) {
            element.textContent = text;
        }
        attributes.map(attr => attr.split('=')).forEach(([name, value]) => {element.setAttribute(name, value);});
        return element;
    }
}

