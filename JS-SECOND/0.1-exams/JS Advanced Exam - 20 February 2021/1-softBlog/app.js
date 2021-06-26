function solve() {

    let createBtn = document.querySelector('button.create');
    const appendChildren = (pr, children) => children.forEach(child => pr.appendChild(child));
    const sortListElement = (ulElement) => Array.from(ulElement.children)
        .sort((a, b) => a.textContent.localeCompare(b.textContent)).forEach(x => ulElement.appendChild(x));
    const cleanInputFields = (arr) => arr.forEach(e => e.value = '');

    createBtn.addEventListener('click', (e) => {
        e.preventDefault();
        let creator = document.querySelector('#creator').value;
        let title = document.querySelector('#title').value;
        let category = document.querySelector('#category').value;
        let content = document.querySelector('#content').value;


        let parentSection = document.querySelector('main > section');

        let article = createElement('article');
        let titleElement = createElement('h1',title);

        let categoryElementWrapper = createElement('p',`Category:`);
        let categoryStrongElement = createElement('strong',category);
        categoryElementWrapper.appendChild(categoryStrongElement);

        let creatorElementWrapper = createElement('p',`Creator:`);
        let creatorStrongElement = createElement('strong',creator);
        creatorElementWrapper.appendChild(creatorStrongElement);

        let contentElement = createElement('p',content);

        let divButtonsWrapper = createElement('div',null,['class=buttons']);
        let deleteBtn = createElement('button',`Delete`,['class=btn delete']);
        let archiveBtn = createElement('button',`Archive`,['class=btn archive']);
        archiveBtn.addEventListener('click',() => {
            let title = titleElement.textContent;
            article.remove()
            let archiveList = document.querySelector('.archive-section > ol')
            let liArchive = createElement('li',title);
            archiveList.appendChild(liArchive);
            sortListElement(archiveList);
        });
        deleteBtn.addEventListener('click',() => {article.remove()})
        appendChildren(divButtonsWrapper,[deleteBtn,archiveBtn]);

        appendChildren(article,[titleElement,categoryElementWrapper,creatorElementWrapper,contentElement,divButtonsWrapper]);
        parentSection.appendChild(article);

        let arr = Array.from(document.querySelectorAll('input'));
        arr.push(document.querySelector('#content'))
        cleanInputFields(arr);
    });

    function createElement(type, text, attributes = []) {
        let element = document.createElement(type);
        if (text) {
            element.textContent = text;
        }
        attributes.map(attr => attr.split('=')).forEach(([name, value]) => {element.setAttribute(name, value);})
        return element;
    }
}


