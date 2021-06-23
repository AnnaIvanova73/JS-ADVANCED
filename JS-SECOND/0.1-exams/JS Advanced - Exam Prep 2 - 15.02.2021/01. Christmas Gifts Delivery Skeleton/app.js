function solution() {

    let sections = Array.from(document.querySelectorAll('section.card')).slice(1);
    let listOfGifts = sections[0].querySelector('ul');
    let sentGifts = sections[1].querySelector('ul');
    let discardGifts = sections[2].querySelector('ul');
    const appendChildren = (pr, children) => children.forEach(child => pr.appendChild(child));

    document.querySelector('input[placeholder = "Gift name"] + button').addEventListener('click', (e) => {
        e.preventDefault();
        let input = document.querySelector('input[placeholder = "Gift name"]').value;


        let liGiftElement = createElement('li', input, ['class=gift']);
        let btnSend = createElement('button', 'Send', ['class=sendButton']);
        let btnDiscard = createElement('button', 'Discard', ['class=discardButton']);

        btnSend.addEventListener('click', () => {
            sentGifts.appendChild(createElement('li', input, ['class=gift']));
            liGiftElement.remove();
        });
        btnDiscard.addEventListener('click', () => {
            discardGifts.appendChild(createElement('li', input, ['class=gift']));
            liGiftElement.remove();
        });

        appendChildren(liGiftElement, [btnSend, btnDiscard]);
        listOfGifts.appendChild(liGiftElement);

        Array.from(listOfGifts.children).sort((a, b) => a.textContent.localeCompare(b.textContent))
            .forEach(li => listOfGifts.appendChild(li));

        document.querySelector('input[placeholder = "Gift name"]').value = '';
    });

    function createElement(type, text, attributes = []) {
        console.log(type)
        let element = document.createElement(type);
        if (text) {
            element.textContent = text;
        }
        attributes.map(attr => attr.split('=')).forEach(([name, value]) => {
            element.setAttribute(name, value);
        })
        return element;
    }
}

