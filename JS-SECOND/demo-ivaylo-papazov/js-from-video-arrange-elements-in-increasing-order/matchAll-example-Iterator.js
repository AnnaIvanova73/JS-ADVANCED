function solve() {
    let regexWithGlobalGroup = /(?<firstLetter>[A-Z])[a-z]+/g;//ЩЕ ГРЪМНЕ БЕЗ ГЛОБАЛНИЯ ФЛАГ
    let text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor. An asd'
    // let regexWithGlobalGroup = /[A-z][a-z]+/g;


    for (const page of text.matchAll(regexWithGlobalGroup)) {
        console.log(page)
    }


    /*
    Фороф разпознава итератор, колекцията се итерира поради наличието на итератора,
    достъпва итератора на обектите
     */


    /* с forOf

   let iterator = text.matchAll(regexWithGlobalGroup);
    for (const page of iterator) {
        console.log(page)
    }

     */

    /* с while

    let currentPage = iterator.next();
    while (!currentPage.done) {
        console.log(currentPage.value);
        currentPage = iterator.next();
    }

    */

}

solve();
/*
let firstPage = iterator.next();
    console.log(firstPage.done);
    console.log(firstPage.value);


    let secondPage = iterator.next();
    console.log(secondPage.done);
    console.log(secondPage.value);


    let thirdPage = iterator.next();
    console.log(thirdPage.done);
    console.log(thirdPage.value);


    let fourthPage = iterator.next();
    console.log(fourthPage.done);
    console.log(fourthPage.value);

 */