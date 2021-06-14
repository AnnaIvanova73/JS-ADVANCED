function generateReport() {
    let cols = [];
    Array.from(document.querySelectorAll('input[type=checkbox]')).forEach((e,i) => {
        if (e.checked) {
            let col = e.previousSibling.textContent;
            let nameCol = col.trim().toLowerCase()
            cols.push({[i]: nameCol});
        }
    })

    let isEmpty = (obj) => Object.keys(obj).length === 0;
    if (cols.length === 0) {
        return;
    }

    let arr = Array.from(document.getElementsByTagName('tr')).slice(1);
    let arrResult = [];

    for (let i = 0; i < arr.length; i++) {
        let arrC = Array.from(arr[i].children)
        let obj = {};

        for (let j = 0; j < arrC.length; j++) {
            if (cols.some(e => Number(Object.keys(e)[0]) === j)) {
                let key = cols.filter(e => Number(Object.keys(e)[0]) === j).map(x => Object.values(x))[0][0];
                obj[key] = arrC[j].innerHTML;
            }
        }
        if (!isEmpty(obj)) {
            arrResult.push(obj);
        }

    }

    arrResult = JSON.stringify(arrResult);
    document.getElementById('output').value = arrResult
}

/*
function generateReport() {
    let thElements = document.querySelectorAll('th');
    let trInTbodyElements = document.querySelectorAll('tbody tr');
    let outputElement = document.getElementById('output')
    let infoThElements = [];
    let result = [];
    Array.from(thElements).forEach(th => {
        if (th.children[0].checked) {
            infoThElements.push(th.textContent.toLowerCase().trim());
        } else {
            infoThElements.push(false);
        }
    });
    Array.from(trInTbodyElements).forEach(trEl => {
        let rowObj = {};
        Array.from(trEl.children).forEach((el, i) => {
            if (infoThElements[i]) {
                let currCell = infoThElements[i];
                rowObj[currCell] = el.textContent;
            }
        });
        result.push(rowObj);
    });
    outputElement.textContent = JSON.stringify(result);
}
 */