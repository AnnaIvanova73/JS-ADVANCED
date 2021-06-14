function colorize() {
    //Time: 1.006 s  по-бързо
    Array.from(document.getElementsByTagName('table')[0].childNodes[1].childNodes).slice(1)
        .filter((el, i) => i % 2 !== 0).filter((el, i) => i % 2 === 0)
        .forEach(el => el.style.backgroundColor = 'teal');
}
//Time: 1.037 s
function colorize1() {
    Array.from(document.getElementsByTagName("tr")).filter((el, i) => i % 2 !== 0)
        .forEach(el => el.style.backgroundColor = 'teal');
}