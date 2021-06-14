function addItem() {
    let liElement = document.createElement('li');
    liElement.textContent = document.querySelector('#newItemText').value;

    let itemElement = document.querySelector('#items')
    itemElement.appendChild(liElement);
}