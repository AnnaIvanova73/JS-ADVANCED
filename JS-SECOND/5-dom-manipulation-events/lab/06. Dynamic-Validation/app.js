function validate() {
    let rgx = /[a-z]+@[a-z]+.[a-z]+/;

    let inputField = document.querySelector('#email');
    inputField.addEventListener('change', checkEmail);

    function checkEmail(e) {
        rgx.test(e.target.value) ? e.target.classList.remove('error') : e.target.classList.add('error');
    }
}
