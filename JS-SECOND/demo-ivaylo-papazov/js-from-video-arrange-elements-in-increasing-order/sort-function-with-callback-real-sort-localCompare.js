/*
Local localCompare() method is used to compare any two characters without regard for the case used.
-> it's a string method so it can't be used directly on an array
-> can pass localCompare() as the comparison function
 */

function localComparee() {
    let names1 = ['pesho', 'Ivaylo', 'ivaylo', 'gosho'];
    // поставя ivaylo с малка буква, пред Ivaylo с голяма
    names1.sort((a, b) => a.localeCompare(b)); //[ 'gosho', 'ivaylo', 'Ivaylo', 'pesho' ]

    console.log(names1)

    // поставя Ivaylo с голямабуква, пред ivaylo с малка
    let names2 = ['pesho', 'Ivaylo', 'ivaylo', 'gosho']
    names1.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));//[ 'pesho', 'Ivaylo', 'ivaylo', 'gosho' ]

    console.log(names2)
    //Обратно сортиране
    // names1.sort((a,b) => b.localeCompare(a));
    // names1.sort((a,b) => b.toLowerCase().localeCompare(a.toLowerCase()));

}

localComparee()

function compareNames() {
    let names = ['Ivaylo', 'pesho', 'gosho']
    console.log(names)

    names.sort();
    console.log(names)

    names.sort(compareNames)// подаваме фунцкията, като референция, не изпълняваме фунцкия, като я извикаме със скоби, подаваме я само като име
    console.log(names)

    function compareNames(firstName, secondName) {

        if (firstName.toLowerCase() > secondName.toLowerCase()) {
            return 1;
        } else if (firstName.toLowerCase() === secondName.toLowerCase()) {
            return 0
        } else {
            return -1
        }
    }

    console.log(compareNames('zahari', 'angel'))

    //Още начини за изписване
    //1.
    names.sort((a, b) => a - b)
    //2.
    names.sort((a, b) => {
        if (a.toLowerCase() > b.toLowerCase()) {
            return 1;
        } else if (a.toLowerCase() === b.toLowerCase()) {
            return 0
        } else {
            return -1
        }
    })
}

function compareNumbers() {
    let numbers = [2, 5, 10, 23, 455, 11]

    numbers.sort((a, b) => {
        if (a > b) {
            return 1;
        } else if (a < b) {
            return -1
        } else {
            return 0
        }
    });
    numbers.sort((a, b) => a - b );

}

compareNumbers();