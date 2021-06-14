function lockedProfile() {

    function hideElement(hiddenDivElement) {
        hiddenDivElement.style.display = 'block';
        return 'Hide it';
    }

    function showElement(hiddenDivElement) {
        hiddenDivElement.style.display = 'none';
        return 'Show more'
    }

    function showMore(e) {
       let divElement =  e.target.parentNode;
       let btnValue = e.target;
       let hiddenDivElement = e.target.parentNode.querySelector('div');
       let statusLock = divElement.querySelectorAll('input[type=radio]')[0].checked;

        if(!statusLock){
            btnValue.textContent = btnValue.textContent === 'Show more' ? hideElement(hiddenDivElement) : showElement(hiddenDivElement);
        }
    }

    Array.from(document.querySelectorAll('button')).forEach(btn => btn.addEventListener('click', (e) => {
        showMore(e)
    }));
}
