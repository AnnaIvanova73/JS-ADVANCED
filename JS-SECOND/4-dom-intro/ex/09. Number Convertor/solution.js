function solve() {
    let menu = document.querySelector('#selectMenuTo');

    let liElementBinary = document.createElement('option');
    liElementBinary.innerHTML = 'Binary';
    liElementBinary.value = 'binary';

    let liElementHexadecimal = document.createElement('option');
    liElementHexadecimal.innerHTML = 'Hexadecimal';
    liElementHexadecimal.value = 'hexadecimal';

    menu.appendChild(liElementBinary);
    menu.appendChild(liElementHexadecimal);

    let btn = document.querySelector('button');

    btn.addEventListener('click', () => {

        let output = document.querySelector('footer #result');
        let input = document.querySelector('input[type= number]');
        let value = menu.value;
        if (String(value) === 'binary') {

            output.value = Number(input.value).toString(2)
        }else{
            output.value  = Number(input.value).toString(16).toUpperCase();
        }

        input.value = '';
    });
}
