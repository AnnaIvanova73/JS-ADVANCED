class Textbox {
    constructor(selector, regex) {
        this._elements = this._setElements(selector);
        this._value = document.querySelectorAll(selector)[0].value;
        this._invalidSymbols = regex;
    };

    get value() {
        return this._value;
    };

    set value(val) {
        let el = this.elements;
        el.forEach(e => {
            e.value = val;
        })
        this._value = val;
    };

    get elements() {
        return this._elements;
    };

    isValid() {
        return !this._invalidSymbols.test(this.value);
    };

    _setElements(selector) {
        let el = document.querySelectorAll(selector);
        Array.from(el).forEach(child => {

            child.addEventListener('input', () => {

                Array.from(el).forEach(c => {
                    c.value = child.value;
                });

                this.value = child.value;
            });

        });
        return Array.from(el);
    };
}


let textbox = new Textbox(".textbox", /[^a-zA-Z0-9]/);
let inputs = document.getElementsByClassName('textbox');
Array.from(inputs).forEach(input => {
    input.addEventListener('click', function () {
        console.log(textbox.value);
    });
});