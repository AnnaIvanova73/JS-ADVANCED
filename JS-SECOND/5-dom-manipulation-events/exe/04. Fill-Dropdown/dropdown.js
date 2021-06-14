function addItem() {
    let text = document.getElementById('newItemText');
    let value = document.getElementById('newItemValue');

    let menu = document.getElementById('menu');

    let newOptionElement = document.createElement('option');
    newOptionElement.textContent = text.value;
    newOptionElement.value = value.value;

    menu.appendChild(newOptionElement);

    text.value = '';
    value.value = '';
}