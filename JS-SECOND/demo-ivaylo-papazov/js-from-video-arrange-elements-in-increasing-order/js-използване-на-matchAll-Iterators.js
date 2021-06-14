/*
Начини за създаване на regex в JavaScript
 */

function solve (){
    //1.вариант за създаване на regex в случая обект
 //let pattern = new RegExp('[a-zA-Z0-9]+','g'); // втория параметър се нарича flag,
// той определя начина на търсене, в случая е флага е глобален, това значи, че ще търси всички съвпадения,
// ако махнем g ще намери само първото съвпадение
// Можем да подадем променливи при първия вариант

    //2.чрез литералл
    //let regexLiteral = /[a-zA-Z0-9]+/g;

    //3.
    'text'.replace('pesho','gosho') //подаваме на regex, като стринг


        //Методи

    //1. Regex methods-objects - методи върху regex обекта - могат да се извикват само над обекти тип Regex
    //     exec();
    //     test();

    let text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor'
    let regex = /[A-z][a-z]+/g;

    let resultMethodTest = regex.test(text); // само true или false, отговаря ли на шаблона
    let resultMethodExec = regex.exec(text);// когато подадете на exec стринг той си запомня стринга
    // и върху него прави нещо, като итерация, всяко следващо извикване, ще връща следващия резултат
    console.log(resultMethodTest)
    console.log(regex.exec(text))
    console.log(resultMethodExec)

    //2.String methods-objects - могат да се извикват само над обекти тип String
    // match()
    // matchAll()
    let regexWithGlobalGroup = /[A-z][a-z]+/g;

    let methodMatch = text.match(regexWithGlobalGroup)
    console.log(methodMatch)

    let regexNoGlobalWithGroup = /(?<firstLetter>[A-z])[a-z]+/;
    //match връща цялата информация, само без глобален флаг,
    // за първия намерен елемент иначе връща само съвпаденията
    let resultMatch = text.match(regexNoGlobalWithGroup)
    console.log(resultMatch)

    let iterator = text.matchAll(regexWithGlobalGroup)//match all e итератор, работи с концепцията за итератори връща поинтер към всичко открито
    //Итераторите дават възможност да се прочетат множество данни на парчета
    console.log(iterator)

    let currentResult = iterator.next();
    console.log(currentResult)
    console.log(currentResult.done);
    console.log(currentResult.value);
    // едно от пропъртита done: ти дава boolean, което казва имаме ли още съвпадения или не

}
solve();