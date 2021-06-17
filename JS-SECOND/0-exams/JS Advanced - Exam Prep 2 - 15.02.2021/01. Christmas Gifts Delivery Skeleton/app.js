function solution() {
    let [inputSection,listGiftsSection,sentGiftsSection,discardedGiftsSection] = Array.from(document.querySelectorAll('section'));
    const listGiftsSectionUl = listGiftsSection.querySelector('ul');
    const sentGiftsSectionUl = sentGiftsSection.querySelector('ul');
    const discardedGiftsSectionUl = discardedGiftsSection.querySelector('ul');

    const appendChildren = (parent, children) => (children.forEach(child => parent.appendChild(child)));
    const moveElements = (element, ul,textContent) => {
        element.remove()
        appendChildren(ul, [createElement('li', textContent, ['class=gift'])]);
    };
    const sortList = (ul) => {
        Array.from(ul.children).sort((a, b) =>  a.textContent.localeCompare(b.textContent)).forEach(x => ul.appendChild(x));
    };
    inputSection.children[1].addEventListener('click', () => {
        let textElement = document.querySelector('input').value;
        let li = createElement('li', textElement, ['class=gift']);
        let sendBtn = createElement('button', 'Send', ['class=sendButton']);
        let discardBtn = createElement('button', 'Discard', ['class=discardButton']);

        sendBtn.addEventListener('click', () => {
            moveElements(li, sentGiftsSectionUl,textElement);
        });
        discardBtn.addEventListener('click', () => {
            moveElements(li, discardedGiftsSectionUl,textElement);
        });
        appendChildren(li, [sendBtn, discardBtn]);
        listGiftsSectionUl.appendChild(li);
        sortList(listGiftsSectionUl);
        document.querySelector('input').value = '';
    });

    function createElement(type, text, attributes = []) {
        let element = document.createElement(type);
        if (text) {
            element.textContent = text;
        }
        attributes.map(attr => attr.split('=')).forEach(([name, value]) => {
            element.setAttribute(name, value);
        });
        return element;
    }
}

