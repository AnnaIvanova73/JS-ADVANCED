function solve() {
  const btnCreate = document.querySelector('.create');
  const postSection = document.querySelector('main > section');
  let archiveSectionList = document.getElementsByClassName('archive-section')[0];
  let inputElements = getElementsInput();

  function appendChildren(nestedArr) {
    nestedArr.forEach(arr => {
      arr[1].forEach(child => arr[0].appendChild(child));
    });
  }

  function sort(ol) {
    Array.from(ol.children).sort((a, b) =>
        a.textContent.localeCompare(b.textContent)).forEach(x => ol.appendChild(x));
    return ol;
  }

  function createElement(type, text, attributes = []) {
    let element = document.createElement(type);
    if (text) {
      element.textContent = text;
    }
    attributes.map(attr => attr.split('=')).forEach(([name, value]) => {element.setAttribute(name, value);})
    return element;
  }

  function getElementsInput() {
    return [
      document.getElementById('creator'),
      document.getElementById('title'),
      document.getElementById('category'),
      document.getElementById('content')
    ]
  }

  function createArticle(e) {
    e.preventDefault();

    let article = document.createElement('article');
    let creator = inputElements [0].value;
    let title = inputElements [1].value;
    let category = inputElements [2].value;
    let content = inputElements [3].value;

    const titleElement = createElement('h1', title);
    const categoryElement = createElement('p', 'Category:');
    const currCategoryElement = createElement('strong', category);
    const creatorElement = createElement('p', 'Creator:');
    const currCreatorElement = createElement('strong', creator);
    const currContent = createElement('p', content);

    const wrapperBtnElements = createElement('div', null, ['class=buttons']);
    let deleteBtn = createElement('button', 'Delete', ['class=btn delete']);
    let archiveBtn = createElement('button', 'Archive', ['class=btn archive']);

    deleteBtn.addEventListener('click', () => article.remove())
    archiveBtn.addEventListener('click', () => {
      archiveSectionList.children[1].appendChild(createElement('li', title));
      sort(archiveSectionList.children[1])
      article.remove();
    });
    appendChildren([[categoryElement, [currCategoryElement]], [creatorElement, [currCreatorElement]],
      [wrapperBtnElements, [deleteBtn, archiveBtn]]]);

    appendChildren([[article, [titleElement, categoryElement, creatorElement, currContent, wrapperBtnElements]]]);

    postSection.appendChild(article);
    inputElements.forEach(e => e.value = '');
  }

  btnCreate.addEventListener('click', createArticle);
}

/*
function solve() {
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

    function appendChildren(pr, children) {
        children.forEach(child => pr.appendChild(child));
    }

    let author = document.getElementById('creator');
    let title = document.getElementById('title');
    let category = document.getElementById('category');
    let content = document.getElementById('content');
    let btnCreate = document.getElementsByClassName("create")[0];

    let main = document.getElementsByClassName('site-content')[0].children[0];
    let archive = document.getElementsByClassName('archive-section')[0];

    function sort(ol) {
        let sorting = Array.from(ol.children);
        sorting = sorting.sort((a, b) =>
            a.textContent.localeCompare(b.textContent));
        sorting.forEach(x => ol.appendChild(x))
        return ol;
    }

    function createDivWithBtn(article, title) {
        let div = createElement('div', null, ['class=buttons'])
        let btnDelete = createElement('button', 'Delete')
        btnDelete.setAttribute('class', 'btn delete')
        let btnArchive = createElement('button', 'Archive')
        btnArchive.setAttribute('class', 'btn archive')


        btnArchive.addEventListener('click', () => {
            let content = archive.children[1];
            let li = createElement('li', title)
            content.appendChild(li)
            sort(content)
            article.remove();
        })
        btnDelete.addEventListener('click', () => {
            article.remove();
        })
        appendChildren(div, [btnDelete, btnArchive]);
        return div;
    }

    btnCreate.addEventListener('click', (e) => {
        e.preventDefault();

        let article = createElement('article');

        let h1Title = createElement('h1', title.value)

        let pCategory = createElement('p', 'Category:')
        let strCategory = createElement('strong', category.value)
        pCategory.appendChild(strCategory);

        let pCreator = createElement('p', 'Creator:');
        let strCreator = createElement('strong', author.value);
        pCreator.appendChild(strCreator);

        let pContent = createElement('p', content.value);

        let div = createDivWithBtn(article, title.value);


        appendChildren(article, [h1Title, pCategory, pCreator, pContent, div])
        let sectionPosts = main.children[0];
        sectionPosts.appendChild(article)
    })
}
 */
/*
function solve() {
    const sectionInMain = document.querySelector('main>section');
    const button = document.querySelector('button');
    button.addEventListener('click', function(ev) {
        ev.preventDefault();
        [creator, title, category] = Array.from(ev.target.parentNode.querySelectorAll('input'));
        const content = ev.target.parentNode.querySelector('textarea');

        const article = createElement('article');
        const h1 = createElement('h1', title.value, );

        const p1 = createElement('p', 'Category:');
        createElement('strong', category.value, undefined, p1);

        const p2 = createElement('p', 'Creator:');
        createElement('strong', creator.value, undefined, p2);

        const p3 = createElement('p', content.value)
        const div = createElement('div', undefined, 'buttons');
        const deleteBtn = createElement('button', 'Delete', "btn delete", div);
        const archiveBtn = createElement('button', 'Archive', "btn archive", div);

        [h1, p1, p2, p3, div].forEach((el) => article.appendChild(el));
        sectionInMain.appendChild(article);
        [creator, title, category, content].forEach((el) => el.value = '');

        deleteBtn.addEventListener('click', onClickDelete);
        archiveBtn.addEventListener('click', onClickArchive);

        function onClickDelete() {
            article.parentNode.removeChild(article);
        }

        function onClickArchive() {
            const ol = document.querySelector('ol');
            createElement('li', h1.textContent, undefined, ol);
            Array.from(ol.querySelectorAll('li')).sort((a, b) =>
                a.textContent.localeCompare(b.textContent)).forEach(li => ol.appendChild(li))

            article.parentNode.removeChild(article);
        }
    });

    function createElement(type, content, attribute, appender) {
        const el = document.createElement(type);
        if (attribute) {
            el.setAttribute('class', attribute);
            el.textContent = content;
        } else if (content) {
            el.textContent = content;
        }
        if (appender) {
            appender.appendChild(el);
        }
        return el;
    }
}
 */