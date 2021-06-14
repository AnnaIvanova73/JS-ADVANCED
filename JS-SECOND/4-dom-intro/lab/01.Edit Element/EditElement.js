function editElement(element, matcher, replacer) {
    element.innerHTML = element.innerHTML.replace(new RegExp(matcher, 'gim'), replacer);
}