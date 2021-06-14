class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.box = this._createInfoBox();
        this._online = false;
    };

    get online() {
        return this._online;
    }

    set online(value) {
        this._online = value;
        this._updateClass(value);
    }

    render(id) {
        let parentElement = document.getElementById(id);
        let currArticle = this.box;
        parentElement.appendChild(currArticle);
    };


    _updateClass(value) {
        if (value) {
            this.box.querySelector('.title').classList.add('online');
        } else {
            this.box.querySelector('.title').classList.remove('online');
        }
    };

    _createInfoBox() {
        const divTitle = this._generateElements('div', `${this.firstName} ${this.lastName}`, ['class=title']);
        const button = this._generateElements('button', 'ℹ', []);
        this._appendChildren(divTitle, [button]);

        const divInfo = this._generateElements('div', '', ['class=info']);
        const spanPhone = this._generateElements('span', `☎ ${this.phone}`, []);
        const spanEmail = this._generateElements('span', `✉ ${this.email}`, []);
        this._appendChildren(divInfo, [spanPhone, spanEmail]);

        const articleMain = this._generateElements('article', '', []);

        button.addEventListener('click', () => {
            divInfo.style.display === 'block' ? divInfo.style.display = 'none' : divInfo.style.display = 'block';
        });
        divInfo.style.display = 'none';
        this._appendChildren(articleMain, [divTitle, divInfo]);
        return articleMain;
    };

    _generateElements(tag, textContent, arrAttributes) {
        let mainElement = document.createElement(tag);
        if (textContent !== '') {
            mainElement.appendChild(document.createTextNode(textContent));
        }
        arrAttributes.forEach(pair => {
            let [attribute, value] = pair.split('=');
            mainElement.setAttribute(attribute, value);
        });
        return mainElement;
    };

    _appendChildren(parent, childrenArr) {
        childrenArr.forEach(child => parent.appendChild(child));
    };
}

let contacts = [

    new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),

    new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),

    new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")

];

contacts.forEach(c => c.render('main'));


// After 1 second, change the online status to true

setTimeout(() => contacts[1].online = true, 2000);