function deleteByEmail() {
    let elementInput = document.getElementsByTagName('input')[0];
    let email = elementInput.value;

    let emailElements = document.querySelectorAll('td:nth-of-type(2n)');

    Array.from(emailElements).forEach(el => {
        email.localeCompare(el.textContent) === 0 ? appendResult('Deleted', el) : appendResult('Not found.', el)
    })

    function appendResult(arg, el) {
        if (arg === 'Deleted') el.parentElement.remove();

        document.getElementById('result').textContent = arg;
    }
}