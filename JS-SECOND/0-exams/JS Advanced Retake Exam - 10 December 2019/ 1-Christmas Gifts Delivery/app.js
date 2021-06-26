function solution() {
    let addBtn = document.querySelector('.card > div > button');

    const appendChildren = (pr, children) => children.forEach(child => pr.appendChild(child));
    const sortListElement = (ulElement) => Array.from(ulElement.children)
        .sort((a, b) => a.textContent.localeCompare(b.textContent)).forEach(x => ulElement.appendChild(x));

    function createElement(type, text, attributes = []) {
        let element = document.createElement(type);
        if (text) {
            element.textContent = text;
        }
        attributes.map(attr => attr.split('=')).forEach(([name, value]) => {element.setAttribute(name, value);})
        return element;
    }

    addBtn.addEventListener('click', (e) => {
        e.preventDefault();

        let input = document.querySelector('input[placeholder="Gift name"]');
        let mainSections = Array.from(document.querySelectorAll('section.card')).slice(1);
        let currInputValue = input.value;

        let listGiftsUl = mainSections[0].querySelector('ul');
        let liElement = createElement('li', currInputValue, ['class=gift']);
        let sendBtn = createElement('button', `Send`, ['id=sendButton']);
        let discardBtn = createElement('button', `Discard`, ['id=discardButton']);

        sendBtn.addEventListener('click', () => {
            liElement.remove();
            let giftSection = mainSections[1].querySelector('ul');
            let li = createElement('li', currInputValue, ['class=gift']);
            giftSection.appendChild(li);
        });
        discardBtn.addEventListener('click',() =>{
            liElement.remove();
            let giftSection = mainSections[2].querySelector('ul');
            let li = createElement('li', currInputValue, ['class=gift']);
            giftSection.appendChild(li);
        });

        appendChildren(liElement, [sendBtn, discardBtn]);
        listGiftsUl.appendChild(liElement);

        sortListElement(listGiftsUl);
        input.value = '';
    });
}