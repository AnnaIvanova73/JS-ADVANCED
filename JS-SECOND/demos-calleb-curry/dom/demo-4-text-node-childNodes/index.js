{
    let paragraph = document
        .getElementsByTagName("p")[0]; //първия елемент
    console.log(paragraph)

    let paragraphs = document
        .getElementsByTagName("p");
    console.log(paragraphs)
    //When we're working with a node that is of a text type,
    // is going to have a property called nodeValue,
    // if we going to a node that's not nodeType === 3 is not going to have that nodeValue
}