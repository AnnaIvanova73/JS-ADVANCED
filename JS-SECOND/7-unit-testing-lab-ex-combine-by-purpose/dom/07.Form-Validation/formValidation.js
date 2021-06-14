function validate() {
    function checkElements() {
        let map = new Map();
        map.set('username', document.getElementById('username'))
        map.set('email', document.getElementById('email'))
        map.set('password', document.getElementById('password'))
        map.set('confirmPassword', document.getElementById('confirm-password'))

        if (checkbox.checked) {
            map.set('company', document.getElementById('companyNumber'))
        }

        Array.from(map).forEach(([key, val]) => {
            if (!object[key](val.value)) {
                controlStyle(val, true)
            } else {
                controlStyle(val, false)
            }
        })

        let hasInvalid = Array.from(map).some(([key, val]) => val.style.cssText === 'border-color: red;');

        if (!hasInvalid) {
            document.getElementById('valid').style.display = 'block';
            map.username.value = '';
            map.email.value = '';
            map.password.value = '';
            map.confirmPassword.value = '';

        } else {
            document.getElementById('valid').style.display = 'none';
        }
    }

    let checkbox = document.getElementById('company');
    checkbox.addEventListener('change', (e) => {
        e.target.checked ? document.getElementById('companyInfo').style.display = 'block' :
            document.getElementById('companyInfo').style.display = 'none';
    });

    let object = {
        _confirmPassword: [],
        username: function (name) {
            let rgx = /^[a-zA-Z0-9]{3,20}$/;
            return rgx.test(name);
        },
        email: function (mail) {
            let rgx = /^.*@.*\..*$/;
            return rgx.test(mail);
        },
        password: function (pass) {
            let pattern = /^\w{5,15}$/;
            if (pattern.test(pass)) {
                this._confirmPassword = [];
                this._confirmPassword.push(pass);
                return true;
            } else {
                return false;
            }
        },
        confirmPassword: function (passSec) {
            return this._confirmPassword[0] !== 0 && this._confirmPassword[0] === passSec;
        },
        company: function (num) {
            return num > 1000 && num < 10000;
        }
    }

    function controlStyle(el, flag) {
        flag ? el.style.borderColor = 'red' : el.removeAttribute('style');
    }

    document.getElementById('submit').addEventListener('click', (e) => {
        checkElements(e)
    })
}

/*
function validate() {

    function checkElements(e) {
        e.preventDefault();
        let username = document.getElementById('username')
        let email = document.getElementById('email')
        let password = document.getElementById('password')
        let confirmPassword = document.getElementById('confirm-password')
        let company = document.getElementById('companyNumber');

        let map = new Map();
        map.set('username', username)
        map.set('email', email)
        map.set('password', password)
        map.set('confirmPassword', confirmPassword)

        if (checkbox.checked) {
            map.set('company', company)
        }

        Array.from(map).forEach(([key, val]) => {
            if (!object[key](val.value)) {
                controlStyle(val, true)
            } else {
                controlStyle(val, false)
            }
        })

        let hasInvalid = Array.from(map).some(([key, val]) => val.style.cssText === 'border-color: red;');

        if (!hasInvalid) {
            document.getElementById('valid').style.display = 'block';
            username.value = '';
            email.value = '';
            password.value = '';
            confirmPassword.value = '';

        } else {
            document.getElementById('valid').style.display = 'none';
        }
    }

    let checkbox = document.getElementById('company');

    checkbox.addEventListener('change', (e) => {
        if (e.target.checked) {
            document.getElementById('companyInfo').style.display = 'block';
        } else {
            document.getElementById('companyInfo').style.display = 'none'
        }
    });

    let object = {
        _confirmPassword: [],
        username: function (name) {
            let rgx = /^[A-Za-z0-9]+$/gm;
            let flag = name.length > 2 && name.length < 21;
            return (flag && rgx.test(name));
        }
        ,
        email: function (mail) {
            let rgx = /[@].*[\.]/gm;
            return rgx.test(mail);
        },
        password: function (pass) {
            let pattern = new RegExp(/^\w+$/, 'gm');
            let flag = pass.length > 4 && pass.length < 16;
            if (flag && pattern.test(pass)) {
                this._confirmPassword = [];
                this._confirmPassword.push(pass);
                return true;
            } else {
                return false;
            }
        },
        confirmPassword: function (passSec) {
            return this._confirmPassword[0] !== 0 && this._confirmPassword[0] === passSec;
        },
        company: function (num) {
            return num > 1000 && num < 10000;
        }
    }

    function controlStyle(el, flag) {
        if (flag) {
            el.style.borderColor = 'red';
        } else {
            el.removeAttribute('style');
        }

    }

    document.getElementById('submit').addEventListener('click', (e) => {
        checkElements(e)
    })
}

 */
/*
function validate() {
    let submitButton = document.getElementById('submit');
    submitButton.addEventListener('click', validateFormHandler);
    let isCompanyCheckbox = document.getElementById('company');
    isCompanyCheckbox.addEventListener('change', onIsCompanyHandler);

    function validateFormHandler(e) {
        e.preventDefault();
        let usernameInput = document.getElementById('username');
        let usernameRegex = /^[a-zA-Z0-9]{3,20}$/;
        let usernameIsValid = usernameRegex.test(usernameInput.value);
        setBorder(usernameInput, usernameIsValid);

        let emailInput = document.getElementById('email');
        let emailRegex = /^.*@.*\..*$/
        let emailIsValid = emailRegex.test(emailInput.value);
        setBorder(emailInput, emailIsValid);

        let passwordRegex = /^\w{5,15}$/;
        let passwordInput = document.getElementById('password');
        let confirmPasswordInput = document.getElementById('confirm-password');
        let passwordIsValid = passwordRegex.test(passwordInput.value);
        let passwordsAreOk = passwordIsValid &&
            passwordInput.value === confirmPasswordInput.value;
        setBorder(passwordInput, passwordsAreOk);
        setBorder(confirmPasswordInput, passwordsAreOk);

        let companyNumberIsValid = false;
        let isCompanyCheckbox = document.getElementById('company');
        if(isCompanyCheckbox.checked) {
            let companyNumberInput = document.getElementById('companyNumber');
            if(companyNumberInput.value.trim() !== '' && !isNaN(Number(companyNumberInput.value))) {
                let companyNumber = Number(companyNumberInput.value);
                if(companyNumber >= 1000 && companyNumber <= 9999) {
                    companyNumberIsValid = true;
                }
            }

            setBorder(companyNumberInput, companyNumberIsValid);
        }

        let validDiv = document.getElementById('valid');
        let mainInputsAreValid = usernameIsValid && emailIsValid && passwordsAreOk
        let companyInfoIsValid = !isCompanyCheckbox.checked || (isCompanyCheckbox.checked && companyNumberIsValid);
        let shouldShowValidDiv = mainInputsAreValid && companyInfoIsValid;
        validDiv.style.display = shouldShowValidDiv ? 'block' : 'none';
    }

    function onIsCompanyHandler(e) {
        let companyInfoFieldset = document.getElementById('companyInfo');
        companyInfoFieldset.style.display = e.target.checked ? 'block' : 'none';
    }

    function setBorder(element, isValid) {
        if (isValid) {
            element.style.setProperty('border', 'none');
        } else {
            element.style.setProperty('border', '2px solid red');
        }
    }
}


 */
