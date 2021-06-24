function solve() {
    let onScreenBtn = document.querySelector('#container > button');

    const isInvalid = (p1, p2, p3) => !p1 || !p2 || !p3;
    const appendChildren = (pr, children) => children.forEach(child => pr.appendChild(child));

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

    onScreenBtn.addEventListener('click', (e) => {
        e.preventDefault();
        let nameInput = document.querySelector('input[placeholder="Name"]').value;
        let hallInput = document.querySelector('input[placeholder="Hall"]').value;
        let ticketPriceElement = document.querySelector('input[placeholder="Ticket Price"]').value;

        if (isInvalid(nameInput.trim(), hallInput.trim(), ticketPriceElement.trim()) || !(!isNaN(Number(ticketPriceElement)))) {
            return;
        }

        let moviesSectionUl = document.querySelector('#movies > ul');

        let li = createElement('li')
        let movieNameSpanElement = createElement('span', nameInput);
        let hallStrongElement = createElement('strong', `Hall: ${hallInput}`);

        let divWrapper = createElement('div');
        let priceTicketsStrongElement = createElement('strong', ticketPriceElement);
        let ticketsCountInput = createElement('input', `Tickets Sold`, ['placeholder=Tickets Sold']);
        let archiveBtn = createElement('button', `Archive`);
        // () => moveToArchive(li, spanElement, ticketPrice, input)
        archiveBtn.addEventListener('click', function () {
            moveElementToArchive(e, ticketsCountInput, li, movieNameSpanElement, ticketPriceElement)
        })

        appendChildren(divWrapper, [priceTicketsStrongElement, ticketsCountInput, archiveBtn]);
        appendChildren(li, [movieNameSpanElement, hallStrongElement, divWrapper]);
        moviesSectionUl.appendChild(li);


        Array.from(document.querySelectorAll('input')).forEach(e => e.value = '');
    });

    function moveElementToArchive(e, ticketsCountInput, li, movieNameSpanElement, ticketPriceElement) {
        e.preventDefault();
        if (!ticketsCountInput.value.trim() || !(!isNaN(Number(ticketsCountInput.value)))) {
            return;
        }
        let archiveSectionUl = document.querySelector('#archive > ul');
        li.remove();
        let totalPrice = ticketsCountInput.value * ticketPriceElement;

        let liArchive = createElement('li');
        let totalAmountStrong = createElement('strong', `Total amount: ${totalPrice.toFixed(2)}`)
        let deleteBtn = createElement('button', `Delete`);
        deleteBtn.addEventListener('click', () => liArchive.remove());
        appendChildren(liArchive, [movieNameSpanElement,totalAmountStrong, deleteBtn])
        archiveSectionUl.appendChild(liArchive);
    }

    document.querySelector('#archive > button').addEventListener('click', () => {
        let archiveSectionUl = document.querySelector('#archive > ul');
        archiveSectionUl.innerHTML = '';
    })
}