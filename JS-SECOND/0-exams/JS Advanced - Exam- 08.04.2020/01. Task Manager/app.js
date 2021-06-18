function solve() {
    let inputFields = Array.from(document.querySelectorAll('input'));
    let sections = Array.from(document.querySelectorAll('section'));

    const isInvalid = (pr1, pr2, pr3) => !pr1 || !pr2 || !pr3;
    const appendChildren = (pr, children) => {
        children.forEach(child => pr.appendChild(child))
    };

    function moveToGreen(e) {
        let article = e.target.parentNode.parentNode;
        article.remove();
        article.querySelector('div').remove();
        document.querySelector('h1.green').parentElement.parentElement.lastElementChild.appendChild(article);
    }

    function moveToProgress(e) {
        let article = e.target.parentNode.parentNode;
        article.remove();
        article.querySelector('button.green').remove();
        let finishBtn = createElement('button', 'Finish', ['class=orange']);
        finishBtn.addEventListener('click', moveToGreen);
        article.querySelector('div').appendChild(finishBtn);
        document.querySelector('.yellow').parentElement.parentElement.lastElementChild.appendChild(article);
    }

    document.getElementById('add').addEventListener('click', (e) => {
        e.preventDefault();
        let [task, dueDate] = inputFields;
        let description = document.getElementById('description');

        if (isInvalid(task.value, description.value, dueDate.value)) {
            return;
        }
        let article = createElement('article');
        let h3ElementTask = createElement('h3', task.value);
        let pElementDescription = createElement('p', `Description: ${description.value}`)
        let pElementDueDate = createElement('p', `Due Date: ${dueDate.value}`);
        let divWrapper = createElement('div', null, ['class=flex']);
        let startBtn = createElement('button', 'Start', ['class=green']);
        let delBtn = createElement('button', 'Delete', ['class=red']);
        startBtn.addEventListener('click', moveToProgress);
        delBtn.addEventListener('click', () => article.remove());

        appendChildren(divWrapper, [startBtn, delBtn]);
        appendChildren(article, [h3ElementTask, pElementDescription, pElementDueDate, divWrapper]);
        let pr = sections[1].lastElementChild;
        pr.appendChild(article);

        inputFields.forEach(el => el.value = '');
        description.value = '';
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

