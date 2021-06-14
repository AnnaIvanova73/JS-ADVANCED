function extract(content) {
    let regexWithGlobalGroup = /\([^(]*\)/g;
    let text = document.getElementById(content).innerHTML;
    return Array.from(text.matchAll(regexWithGlobalGroup))
        .reduce((acc,el) =>[...acc,el],[]).join('; ');
}
