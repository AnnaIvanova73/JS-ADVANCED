function create(data) {
// пример  e.target.matches('#content div')
    data.forEach(el => {
        let divSectionElement = document.createElement('div');

        let elementP = document.createElement('p');
        elementP.style.display = 'none';
        elementP.appendChild(document.createTextNode(el))

        divSectionElement.appendChild(elementP)
        let divContentElement = document.getElementById('content');
        divContentElement.appendChild(divSectionElement)
    })

    Array.from(document.querySelectorAll('#content > div')).forEach(e => {

        let myArg = 'asd';
        e.addEventListener('click', (e) => {doStuff(e,myArg)})
    })
}
function doStuff(e,somePrameter){
    let elementParagraph = e.target.childNodes[0];
    elementParagraph.style.display === 'inline'
        ? elementParagraph.style.display = 'none' : elementParagraph.style.display='inline';
}