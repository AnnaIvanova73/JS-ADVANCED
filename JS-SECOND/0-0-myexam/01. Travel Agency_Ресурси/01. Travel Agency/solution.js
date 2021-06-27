window.addEventListener('load', solution);

function solution() {
    console.log('TODO: Write the missing functionality!');

    let btnSubmit = document.querySelector('#submitBTN');
    const appendChildren = (pr, children) => children.forEach(child => pr.appendChild(child));
    const isInvalid = (pr1, pr2) => !pr1 || !pr2;
    const cleanInputFields = (arr) => arr.forEach(e => e.value = '');
    btnSubmit.addEventListener('click', () => {

        let fullName = document.querySelector('#fname').value;
        let email = document.querySelector('#email').value;
        let phoneNumber = document.querySelector('#phone').value;
        let address = document.querySelector('#address').value;
        let postalCode = document.querySelector('#code').value;

        if (isInvalid(fullName, email)) {
            return;
        }
        let currValues = [fullName, email, phoneNumber, address, postalCode];
        let liNameElement = createElement('li', `Full Name: ${fullName}`)
        let liEmailElement = createElement('li', `Email: ${email}`)
        let liPhoneElement = createElement('li', `Phone Number: ${phoneNumber}`)
        let liAddressElement = createElement('li', `Address: ${address}`)
        let liCodeElement = createElement('li', `Postal Code: ${postalCode}`)
        let previewUl = document.querySelector('#infoPreview');
        appendChildren(previewUl, [liNameElement, liEmailElement, liPhoneElement, liAddressElement, liCodeElement])

        let btnSubmit = document.querySelector('#submitBTN');
        btnSubmit.disabled = true;

        let editBtn = document.querySelector('#editBTN');
        editBtn.disabled = false;

        editBtn.addEventListener('click', () => {

            document.querySelector('#fname').value = currValues[0];
            document.querySelector('#email').value = currValues[1];
            document.querySelector('#phone').value = currValues[2];
            document.querySelector('#address').value = currValues[3];
            document.querySelector('#code').value = currValues[4];
            previewUl.innerHTML = '';
            let btnSubmit = document.querySelector('#submitBTN');
            btnSubmit.disabled = false;
            let continueBtn = document.querySelector('#continueBTN');
            continueBtn.disabled = true;
            let editBtn = document.querySelector('#editBTN');
            editBtn.disabled = true;
        })
        let continueBtn = document.querySelector('#continueBTN');
        continueBtn.disabled = false;
        continueBtn.addEventListener('click', () => {
            let blockElement = document.querySelector('#block');
            blockElement.innerHTML = '';
            let h3 = createElement('h3',`Thank you for your reservation!`);
            blockElement.appendChild(h3);
        });

        let arr = Array.from(document.querySelectorAll('input'));
        cleanInputFields(arr.slice(0, 5))
    })

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
