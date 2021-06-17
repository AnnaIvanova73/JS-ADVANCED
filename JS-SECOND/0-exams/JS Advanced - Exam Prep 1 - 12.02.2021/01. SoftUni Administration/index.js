function solve() {
    const modules = document.querySelector('.modules');
    let mapModules = new Map();

    const isEmptyInput = (a, b) => !a || !b;
    const formattedDate = (date) => date.split('-').join('/').split('T').join(' - ');
    const createTextArticle = (name, date) => `${name} - ${formattedDate(date)}`;
    const appendChildren = (pr, children) => children.forEach(child => pr.appendChild(child));

    document.querySelector('button').addEventListener('click', e => {
        e.preventDefault();
        let module = document.querySelector('select[name="lecture-module"]').value;
        let name = document.querySelector('input[name="lecture-name"]').value;
        let date = document.querySelector('input[name="lecture-date"]').value;

        if (isEmptyInput(name, date) || module === 'Select module') {
            return;
        }

        if (!mapModules.has(module)) {
            let divModule = createElement('div', null, ['class=module']);
            let h3Title = createElement('h3', `${module.toUpperCase()}-MODULE`);
            let ul = createElement('ul');
            mapModules.set(module, ul);
            appendChildren(divModule, [h3Title, ul]);
            modules.appendChild(divModule);
        }
        let ul = mapModules.get(module);

        let li = createElement('li', null, ['class=flex',`title=${formattedDate(date)}`]);
        let h4 = createElement('h4', `${createTextArticle(name, date)}`);

        let btnDel = createElement('button', 'Del', ['class=red']);
        appendChildren(li, [h4, btnDel]);

        btnDel.addEventListener('click', () => {
            li.remove();
            if (ul.childElementCount <= 0) {
                mapModules.delete(module);
                ul.parentNode.remove();
            }
        });

        ul.appendChild(li);
        Array.from(ul.children).sort((a, b) =>  a.title.localeCompare(b.title)).forEach(x => ul.appendChild(x));
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
