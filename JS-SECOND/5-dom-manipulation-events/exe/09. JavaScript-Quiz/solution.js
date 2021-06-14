function solve() {

    let correctAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents']
    let collectedAnswers = [];
    let parentDiv = document.getElementById('quizzie');

    function appendResult() {

        let msg = collectedAnswers.length === 3 ? "You are recognized as top JavaScript fan!" :
            `You have ${collectedAnswers.length} right answers`;

        let elementResult = document.querySelector('.results-inner').firstElementChild;
        elementResult.innerHTML = msg
        document.getElementById('results').style.display = 'block';
    }

    function toggleSections(section, handler,func) {

        section.style.display = 'none'
        let nextSection = section.nextElementSibling;

        if (nextSection.nodeName === 'SECTION') {
            nextSection.style.display = 'block';

        } else {
            parentDiv.removeEventListener('click', handler)
            func();
        }
    }

    parentDiv.addEventListener('click', function handler(evt) {

        if (evt.target.classList.contains('answer-text')) {

            if(correctAnswers.includes(evt.target.textContent)){
                collectedAnswers.push(evt.target.textContent);
            }
            toggleSections(evt.target.parentNode.parentNode.parentNode.parentNode, handler,appendResult);
        }
    });
}