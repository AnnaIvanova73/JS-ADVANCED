function focused() {
  let sectionElements =  document.querySelectorAll('div > div');

    Array.from(sectionElements).forEach(section => {
        section.addEventListener('focus',focusEvent,true)
        section.addEventListener('blur', blurEvent,true)

    });

    function focusEvent (event){
        event.target.parentNode.classList.add('focused')
    }

    function blurEvent (event) {
        event.target.parentNode.classList.remove('focused')
    }
}