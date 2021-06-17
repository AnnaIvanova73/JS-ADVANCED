function solution() {
    let btnAdd = document.getElementsByTagName('button')[0];
    let input = document.getElementsByTagName('input')[0];
    let sectionGifts = document.getElementsByTagName('section')[1];
    let sectionSend = document.getElementsByTagName('section')[2];
    let sectionDiscarded = document.getElementsByTagName('section')[3];

    function createElement(type, text, attributes = []) {
        let element = document.createElement(type);
        if (text) {
            element.textContent = text;
        }

        attributes
            .map(attr => attr.split('='))
            .forEach(([name, value]) => {
                element.setAttribute(name, value);
            })

        return element;
    }

    function moveElements(param, li) {
        let ul = param.getElementsByTagName('ul')[0];
        let lis = createElement('li', li.childNodes[0].textContent, ['class=gift'])
        li.remove()
        ul.appendChild(lis);
    }

    function createLi() {
        let li = createElement('li', input.value, ['class=gift'])
        let btnSend = createElement('button', 'Send', ['id=sendButton'])
        btnSend.addEventListener('click', () => moveElements(sectionSend, li));

        let btnDiscard = createElement('button', 'Discard', ['id=discardButton'])
        btnDiscard.addEventListener('click', () => moveElements(sectionDiscarded, li));
        li.appendChild(btnSend);
        li.appendChild(btnDiscard);
        return li;
    }

    function sort(ul) {
        let sorting = Array.from(ul.children);
        sorting = sorting.sort((a, b) =>
            a.childNodes[0].textContent.localeCompare(b.childNodes[0].textContent));
        sorting.forEach(x => ul.appendChild(x))
        return ul;
    }

    btnAdd.addEventListener('click', (e) => {
        let ul = sectionGifts.getElementsByTagName('ul')[0];
        ul.appendChild(createLi())
        sort(ul)
        input.value = '';
    })

}