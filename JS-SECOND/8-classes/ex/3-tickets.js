function solve(paramArr, parameterSort) {

    class Ticket {
        constructor([destination, price, status]) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        };
    }
    function sorted(a,b) {
       return typeof a[parameterSort] === 'number'? Number(a[parameterSort]) - Number(b[parameterSort]) :
         a[parameterSort].localeCompare(b[parameterSort]);
    }

    return paramArr.map(e => new Ticket(e.split('|')))
        .sort(sorted);
}
//
// function solve(paramArr, parameterSort){
//
//     function Ticket ([destination, price, status]){
//         this.destination = destination;
//         this.price = Number(price);
//         this.status = status;
//     }
//     function sorted(a,b) {
//         return typeof a[parameterSort] === 'number'? Number(a[parameterSort]) - Number(b[parameterSort]) :
//             a[parameterSort].localeCompare(b[parameterSort]);
//     }
//     return paramArr.map(e => new Ticket(e.split('|')))
//         .sort(sorted);
// }


console.log(solve([
        'Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'
    ],

    'destination'));

console.log(solve(['Philadelphia|94.20|available',

        'New York City|95.99|available',

        'New York City|95.99|sold',

        'Boston|126.20|departed'],

    'status'));

console.log(solve(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'price'));
