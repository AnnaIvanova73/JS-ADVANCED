{
    /* Value of this is going to be the same
    * and is determined by where the function is created rather than
    * how the function is called
    * Стойността на this винаги е мястото на където е създадена
    *  window object или друг обект, функция и т.н.
    * има изключение виж примера
    * Не може да се променя стойността на "this" посредством BIND,CALL,APPLY
    * */

    let arrow = () => this;

    function normal(){
        return this;
    }

    console.log(arrow()); // В средата,тук node.js връща {}, в browser-a връща window
    console.log(normal()); // навсякъде връща каквото трябва, в browser-a връща window object,
    // в средата Object [global]

    let functions = {
        this: this,
        arrow:arrow,
        normal:normal,
        arrowTest: () => this // ако използваме, като метод на обект arrow функция,
        // стойността на this пак ще бъде window object
    }
    console.log(functions.arrow()); //в browser-a връща window object
    console.log(functions.normal());//в browser-a връща window object
    console.log(functions.arrowTest());//в browser-a връща window object

}