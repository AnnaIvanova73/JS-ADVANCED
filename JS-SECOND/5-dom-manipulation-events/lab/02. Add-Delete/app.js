function addItem1() {
    let liElement = document.createElement('li');
    liElement.textContent = document.querySelector('#newItemText').value;

    let a = document.createElement('a');
    let linkText = document.createTextNode("[Delete]");
    a.appendChild(linkText)
    a.href = '#'

    liElement.appendChild(a);
    document.querySelector('#items').appendChild(liElement)

    function removeLiElement(a) {
        liElement.remove();
    }

    a.addEventListener('click', () => { removeLiElement(a);});
}


function addItem() {
    let liElement = document.createElement('li');
    liElement.textContent = document.querySelector('#newItemText').value;

    let a = document.createElement('a');
    a.textContent = '[Delete]';
    liElement.appendChild(a);
    a.href = '#'
    document.querySelector('#items').appendChild(liElement)

    function removeLiElement(a) {
        a.parentNode.remove();
    }
    Array.from(document.querySelectorAll('#items > li > a')).forEach(a => {
        a.addEventListener('click', () => { removeLiElement(a);})
    })
}