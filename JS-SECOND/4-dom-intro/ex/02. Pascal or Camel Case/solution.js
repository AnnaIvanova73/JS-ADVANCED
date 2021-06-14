function solve() {
    function capitalize(str) {
        return (str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
    }

    let convention = {
        camelcase: function (text) {
            let firstElement = [text.shift().toLowerCase()]
            return firstElement.concat(text.map(capitalize)).join('')

            // let arr = text.map(capitalize)
            // arr.unshift(firstElement);
            // return arr.join('') --> вариант две работи

           // return text.map(capitalize).unshift(firstElement).join('') не работи защо?
        },
        pascalcase: function (text) {
            return text.map(capitalize).join('');
        },
        default: 'Error!'
    }
    let text = document.getElementById('text').value.split(' ');
    let namingConvention = document.getElementById('naming-convention').value.split(' ').join('').toLowerCase();

    try {
        document.getElementById('result').innerHTML = convention[namingConvention](text);
    } catch {
        document.getElementById('result').innerHTML = 'Error!';
    }
    document.getElementById('text').value = '';
    document.getElementById('naming-convention').value = '';
}

function old() {

    let testModify = document.getElementById('text').value;
    let convention = document.getElementById('naming-convention').value;
    let sentence = testModify.split(' ');
    let result = document.getElementById('result');
    result.textContent = convertToTypeConvention(convention.toLowerCase(), sentence);


    function convertToTypeConvention(caseType, sentence) {

        if (caseType !== 'pascal case' && caseType !== 'camel case') {
            return 'Error!';
        }
        let arr = sentence.reduce((acc, e) => {
            e = e.toLowerCase();
            let letter = e.toString().substring(0, 1);
            e = letter.toUpperCase() + e.slice(1)
            acc.push(e)
            return acc
        }, []);
        msg = arr.join('').toString();

        if (caseType === 'camel case') {
            msg = msg.substring(0, 1).toLowerCase() + msg.slice(1)
        }

        return msg;
    }
}
/*
function solve() {
    function capitalize(str) {
        return (str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
    }
    let convention = {
        camelcase: function (text) {
            let firstElement = [text.shift().toLowerCase()]
            return firstElement.concat(text.map(capitalize)).join('')
        },
        pascalcase: function (text) {
            return text.map(capitalize).join('');
        },
        default: 'Error!'
    }
    let text = document.getElementById('text').value.split(' ');
    let namingConvention = document.getElementById('naming-convention').value.split(' ').join('').toLowerCase();

    try {
        document.getElementById('result').innerHTML = convention[namingConvention](text);
    } catch {
        document.getElementById('result').innerHTML = 'Error!';
    }
}
 */
