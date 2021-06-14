{
    /*
    innerHTML parses content as HTML, so it takes longer.
nodeValue uses straight text, does not parse HTML, and is faster.
textContent uses straight text, does not parse HTML, and is faster.
innerText Takes styles into consideration. It won't get hidden text for instance.
     */
    let paragraphs = document
        .getElementsByTagName("p");
    console.log(paragraphs)

    console.log(paragraphs[0].childNodes[0].childNodes[0].nodeValue = 'llams')
    console.log(paragraphs[0].childNodes[0].childNodes[0].nodeValue);

}