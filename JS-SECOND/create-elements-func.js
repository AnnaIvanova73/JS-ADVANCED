function createElement(type, text, attributes = []) {
    let element = document.createElement(type);
    if (text) {
        element.textContent = text;
    }
    attributes
        .map(attr => attr.split('='))
        .forEach(([name, value]) => {
            element.setAttribute(name, value);
        })

    return element;
}

function appendChildren(pr, children) {
    children.forEach(child => pr.appendChild(child));
}
function createElement1(type, content, attribute, appender) {
    const el = document.createElement(type);
    if (attribute) {
        el.setAttribute('class', attribute);
        el.textContent = content;
    } else if (content) {
        el.textContent = content;
    }
    if (appender) {
        appender.appendChild(el);
    }
    return el;
}
Array.from(ul.children).sort((a, b) =>  a.title.localeCompare(b.title)).forEach(x => ul.appendChild(x));