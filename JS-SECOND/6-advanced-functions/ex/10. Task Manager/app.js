function solve() {
    let openSection = document.getElementsByTagName('section')[1].children[1];
    let progressSection = document.getElementsByTagName('section')[2].children[1];
    let completeSection = document.getElementsByTagName('section')[3].children[1];


    document.getElementById('add').addEventListener('click', addInSectionOpen)
    let checkInputValues = (task, description, date) => (!task.value.trim() || !description.value.trim() || !date.value.trim())

    function moveToSectionInProgress(e, article) {
        let div = article.querySelector('div');
        div.remove();
        let divFlex = createAppendTags('div', ['button', 'button'], ['Delete', 'Finish'], ['red', 'orange']);
        divFlex.className = 'flex';
        divFlex.children[0].addEventListener('click', () => (article.remove()));
        divFlex.children[1].addEventListener('click', (e) => {
            divFlex.remove()
            completeSection.appendChild(article)
        });

        article.appendChild(divFlex);
        progressSection.appendChild(article);
    }

    function addInSectionOpen(e) {
        e.preventDefault();
        let task = document.getElementById('task');
        let description = document.getElementById('description');
        let date = document.getElementById('date');

        if (checkInputValues(task, description, date)) {
            return;
        }

        let article = createAppendTags('article', ['h3', 'p', 'p'],
            [task.value, `Description: ${description.value}`, `Due Date: ${date.value}`], []);

        let divFlex = createAppendTags('div', ['button', 'button'], ['Start', 'Delete'], ['green', 'red']);
        divFlex.className = 'flex';
        divFlex.children[0].addEventListener('click', (e) => {
            moveToSectionInProgress(e, article)
        })
        divFlex.children[1].addEventListener('click', () => (article.remove()));

        article.appendChild(divFlex);
        openSection.appendChild(article);
        Array.from(document.forms[0]).slice(0, -1).forEach(el => el.value = '');
    }


    function createAppendTags(parentTag, tags, textNode, classes) {
        let parent = document.createElement(parentTag);
        tags.forEach((tag, i) => {
            let currTag = document.createElement(tag);

            if (isEmptyArr(textNode)) {
                currTag.textContent = textNode[i];
            }

            if (isEmptyArr(classes)) {
                currTag.classList.add(classes.shift());
            }
            parent.appendChild(currTag);
        })
        return parent;
    }

    function isEmptyArr(arr) {
        return arr.length !== 0;
    }
}

/* short old work
function solve() {
    let openSection = document.getElementsByTagName('section')[1].children[1];
    let progressSection = document.getElementsByTagName('section')[2].children[1];
    let completeSection = document.getElementsByTagName('section')[3].children[1];

    document.getElementById('add').addEventListener('click', (e) => {
        e.preventDefault();
        let task = document.getElementById('task');
        let description = document.getElementById('description');
        let date = document.getElementById('date');

        if (task.value === '' || description.value === '' || date.value === '') {
            return;
        }


        let article = document.createElement('article');
        let h3 = document.createElement('h3');
        h3.innerHTML = task.value;
        let p1 = document.createElement('p');
        p1.innerHTML = `Description: ${description.value}`
        let p2 = document.createElement('p');
        p2.innerHTML = `Due Date: ${date.value}`
        let div = document.createElement('div');
        div.classList.add('flex');

        let btnStart = document.createElement('button');
        btnStart.innerHTML = 'Start'
        btnStart.classList.add('green');

        let btnDelete = document.createElement('button');
        btnDelete.innerHTML = 'Delete'
        btnDelete.classList.add('red');

        btnStart.addEventListener('click', (e) => {
            progressSection.appendChild(article);
            div.removeChild(btnStart)
            //div.removeChild(btnDelete)

           // div.appendChild(btnDelete);
            btnStart.innerHTML = 'Finish'
            btnStart.classList.remove('green');
            btnStart.classList.add('orange')
            div.appendChild(btnStart);

            btnStart.addEventListener('click', (e) => {
                div.remove();
                completeSection.appendChild(article);
            })

        })

        btnDelete.addEventListener('click', (e) => {
            article.remove();
        })

        div.appendChild(btnStart);
        div.appendChild(btnDelete);

        article.appendChild(h3);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(div)
        openSection.appendChild(article);

        task.value = '';
        description.value = '';
        date.value = '';
    })

}
 */
/*it work, alteration
function solve() {
    let openSection = document.getElementsByTagName('section')[1].children[1];
    let progressSection = document.getElementsByTagName('section')[2].children[1];
    let completeSection = document.getElementsByTagName('section')[3].children[1];


    document.getElementById('add').addEventListener('click', addInSectionOpen)
    let checkInputValues = (task, description, date) => (!task.value.trim() || !description.value.trim() || !date.value.trim())

    function addInSectionOpen(e) {
        e.preventDefault();
        let task = document.getElementById('task');
        let description = document.getElementById('description');
        let date = document.getElementById('date');


        if (checkInputValues(task, description, date)) {
            return;
        }

        let article = createAppendTags('article', ['h3', 'p', 'p'],
            [task.value, `Description: ${description.value}`, `Due Date: ${date.value}`], []);

        let divFlex = createAppendTags('div', ['button', 'button'], ['Start', 'Delete'], ['green', 'red']);
        divFlex.className = 'flex';
        let btnStart = divFlex.children[0];

        btnStart.addEventListener('click', (e) => {
            progressSection.appendChild(article);
            divFlex.removeChild(btnStart)
            btnStart.innerHTML = 'Finish'
            btnStart.classList.remove('green');
            btnStart.classList.add('orange')
            divFlex.appendChild(btnStart);

            btnStart.addEventListener('click', (e) => {
                divFlex.remove();
                completeSection.appendChild(article);
            })

        })
        divFlex.children[1].addEventListener('click', () => (article.remove()));

        article.appendChild(divFlex);
        openSection .appendChild(article);
        Array.from(document.forms[0]).slice(0, -1).forEach(el => el.value = '');
    }


    function createAppendTags(parentTag, tags, textNode, classes) {
        let parent = document.createElement(parentTag);
        tags.forEach((tag, i) => {
            let currTag = document.createElement(tag);

            if (isEmptyArr(textNode)) {
                currTag.textContent = textNode[i];
            }

            if (isEmptyArr(classes)) {
                currTag.classList.add(classes.shift());
            }
            parent.appendChild(currTag);
        })
        return parent;
    }

    function isEmptyArr(arr) {
        return arr.length !== 0;
    }
}
 */