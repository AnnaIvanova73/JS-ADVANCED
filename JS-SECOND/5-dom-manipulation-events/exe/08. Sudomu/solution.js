function solve() {
    let buttons = document.getElementsByTagName('button');
    const hasUniqueValues = (arr) => {
        return (new Set(arr)).size !== arr.length;
    }
    const isInRange = (element) => {
        return ['1', '2', '3'].includes(element)
    }
    buttons[0].addEventListener('click', () => {
        let grid = [];
        let arrInputs = Array.from(document.getElementsByTagName('input'))
        arrInputs.forEach(() => {
            grid.push(arrInputs.splice(0, 3).map(e => e.value));
        });

        let hasWin = 'green';
        for (let i = 0; i < grid.length; i++) {
            let row = grid[i];
            let col = grid.map(row => row[i]);

            if (hasUniqueValues(row) || hasUniqueValues(col)) {
                hasWin = 'red';
                break;
            }
        }
        setStyle(hasWin, false)
    });

    buttons[1].addEventListener('click', () => {
        setStyle('', true)
    })


    function setStyle(option, bool) {
        let paragraphFinalText = document.querySelector('#check > p');
        let body = document.querySelector('#exercise table');

        if (option === 'green') {
            body.setAttribute('style', 'border: 2px solid green')
            paragraphFinalText.textContent = "You solve it! Congratulations!";
            paragraphFinalText.style.color = 'green';
        } else if (option === 'red') {
            body.setAttribute('style', 'border: 2px solid red')
            paragraphFinalText.textContent = "NOP! You are not done yet...";
            paragraphFinalText.style.color = 'red';
        }
        if (bool) {
            Array.from(document.getElementsByTagName('input')).map(e => e.value = '');
            body.removeAttribute('style');
            paragraphFinalText.textContent = '';
            paragraphFinalText.removeAttribute('style');
        }

    }
}
