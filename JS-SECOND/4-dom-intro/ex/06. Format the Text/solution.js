function solve() {

    let text = document.getElementById('input').value.split('.').map(e => e.trim()).filter(e => e !== '');
    const n = 3
    const result = new Array(Math.ceil(text.length / n))
        .fill()
        .map(_ => text.splice(0, n))

    const output = document.getElementById('output');
    result.forEach(e => {
        let text = e.reduce((acc, e) => acc +`${e}.`, '');
        createAppendParagraph(document.createTextNode(text))
    });


    function createAppendParagraph(text) {
        let p = document.createElement('p');
        p.appendChild(text)
        output.appendChild(p)
    }

}

/*
function solve() {
    const text = document.getElementById('input').value;
    let div = document.getElementById('output');


    const arrInput = text.split('.');
    let arr = arrInput.filter(e => e.toString().trim().length !== 0);

    console.log(arr)
    for (let i = 0; i < arr.length; i += 3) {
        let paragraphs = arr.slice(i, i+3).join('. ') + '.';
        console.log(paragraphs)
        let p = document.createElement('p');
        p.innerHTML = paragraphs;
        div.appendChild(p);
    }
}

 */
/*
function solve() {

    const output = document.getElementById('output');
    let input = document.getElementById('input').value

        let text = input.split('.').map(e => e.trim()).filter(e => e !== '');
        const n = 3
        const result = new Array(Math.ceil(text.length / n))
            .fill()
            .map(_ => text.splice(0, n))

        result.forEach(e => {
            let text = e.reduce((acc, e) => {
                acc += e
                acc+='.'
                return acc
            }, '');

            createParagraph(document.createTextNode(text))
        })


    function createParagraph(text) {
        let p = document.createElement('p');
        p.appendChild(text)
        output.appendChild(p)
    }
}
 */
