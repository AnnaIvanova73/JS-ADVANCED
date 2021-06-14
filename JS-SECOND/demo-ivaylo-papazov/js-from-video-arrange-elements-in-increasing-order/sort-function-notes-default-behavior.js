/*
sort() The sort order can be either alphabetic or numeric, and either ascending (up) or descending (down)
Default-но сортира по ascii табле кодове ascending
 // трябва да се подаде делегат функции, ако искаме да се изпълни друг сорт
sort() е мутатор функция, всяка промяна, която прави се отразява върху оригиналния масив
 */

function defaultSortExample() {
    let letters = ['z', 'a', 'h', 'e', 'b']
    console.log(letters);

    // дефаултно подреждане
    letters.sort();
    console.log(letters); //[ 'a', 'b', 'e', 'h', 'z,' ]

    // връщане на стойност
    let returnedValue = letters.sort();
    console.log(returnedValue)
    returnedValue[0] = 'x'; //Една и съща референция в паметта, промяна,
    // на върната стойност от sort(), която е масив, променя и оригиналния масив
    console.log(letters);//[ 'x', 'b', 'e', 'h', 'z,' ]
    console.log(returnedValue)//[ 'x', 'b', 'e', 'h', 'z,' ]


    // дефаултно подреждане, при стрингове
    function defaultLetters() {
        let names = ['pesho', 'gosho', 'stamat', 'ivan', 'Ivaylo']
        console.log(names);

        names.sort();
        console.log(names); //[ 'a', 'b', 'e', 'h', 'z,' ]

    }

    function defaultNumbers() {
        let numbers = [9,3,6,10,4] // обръща ги към стрингове, ако сложим кавички и ги направим стринг, ще произведе същото сортиране
        console.log(numbers);

        numbers.sort();
        console.log(numbers); //[ 10, 3, 4, 6, 9 ]

    }
    defaultLetters()
    defaultNumbers()
}


defaultSortExample();