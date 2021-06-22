function solve() {
    const validateInput = (a, b) => !a || !b;
    const appendChildren = (pr, children) => children.forEach(child => pr.appendChild(child));
    const formatDate = (v) => v.split('-').join('/').split('T').join(' - ');
    let elements = [];

    document.querySelector('button').addEventListener('click', (e) => {
        e.preventDefault();

        let module = document.querySelector('select[name="lecture-module"]').value;
        let name = document.querySelector('input[name="lecture-name"]').value;
        let date = document.querySelector('input[name="lecture-date"]').value;

        let select = document.querySelector('select');

        if (validateInput(name, date) || module === 'Select module') {
            return;
        }
        let currModelValue = `${select.value.toUpperCase()}-MODULE`;
        let currModule = elements.filter(e => e.module === currModelValue);

        if (currModule.length === 0) {
            let divElementModule = createElement('div', null, ['class=module']);
            let h3ElementNameModule = createElement('h3', currModelValue);
            let ulElement = createElement('ul', null);

            elements.push({module:currModelValue, ulElement, lists: [], divElementModule});
            appendChildren(divElementModule, [h3ElementNameModule, ulElement]);
            document.querySelector('.modules').appendChild(divElementModule);
        }

        let liElement = createElement('li', null, ['class=flex']);
        let h4ElementName = createElement('h4', `${name} - ${formatDate(date)}`);
        let btnDelete = createElement('button', 'Del', ['class=red']);
        appendChildren(liElement, [h4ElementName, btnDelete]);

        btnDelete.addEventListener('click', () => {
            liElement.remove();
            if (currModule[0].ulElement.childElementCount <= 0) {
                currModule[0].divElementModule.remove();
                elements = elements.filter(e => e.module !== module);
            }
        })
        currModule = elements.filter(e => e.module === currModelValue);
        date = formatDate(date);
        currModule[0].lists.push({date:date, liElement});
        currModule[0].lists.sort((a, b) => a.date.localeCompare(b.date)).forEach(el => currModule[0].ulElement.appendChild(el.liElement));
    });

    function createElement(type, text, attributes = []) {
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
