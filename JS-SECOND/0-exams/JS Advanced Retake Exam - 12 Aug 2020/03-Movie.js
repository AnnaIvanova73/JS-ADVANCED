class Movie {
    constructor(movieName, ticketPrice) {
        this.movieName = movieName;
        this.ticketPrice = Number(ticketPrice);// property of type number, may come as a string;
        this.screenings = [];
        this.totalProfit = 0;
        this.totalSoldTickets = 0;
    };

    newScreening(date, hall, description) {
        let currScreening = this.screenings.filter(e => e.hall === hall && e.date === date);
        if (currScreening.length > 0) {
            throw new Error(`Sorry, ${hall} hall is not available on ${date}`)
        }
        this.screenings.push({date, hall, description});
        return `New screening of ${this.movieName} is added.`
    };

    endScreening(date, hall, soldTickets) {
        soldTickets = Number(soldTickets);
        let currScreening = this.screenings.filter(e => e.hall === hall && e.date === date);
        if (currScreening.length === 0) {
            throw new Error(`Sorry, there is no such screening for ${this.movieName} movie.`)
        }
        let indexObj = this.screenings.indexOf(currScreening[0]);
        this.screenings.splice(indexObj,1);
        //this.screenings = this.screenings.filter(e => e !== currScreening[0]);
        this.totalProfit += soldTickets * this.ticketPrice;
        this.totalSoldTickets += soldTickets;
        return `${this.movieName} movie screening on ${date} in ${hall} hall has ended. Screening profit: ${soldTickets * this.ticketPrice}`
    };

    toString() {
        let output = [`${this.movieName} full information:`, `Total profit: ${this.totalProfit.toFixed(0)}$`,
            `Sold Tickets: ${this.totalSoldTickets}`
        ];
        output[3] = this.screenings.length > 0 ? `Remaining film screenings:` : `No more screenings!`;

        this.screenings.sort((a, b) => a.hall.localeCompare(b.hall))
            .map(e => `${e.hall} - ${e.date} - ${e.description}`).forEach(e => output.push(e));
        return output.join('\n');
    };
}
let m = new Movie('Wonder Woman 1984', '10.00');

console.log(m.newScreening('October 2, 2020', 'IMAX 3D', `3D`));

console.log(m.newScreening('October 3, 2020', 'Main', `regular`));

console.log(m.newScreening('October 4, 2020', 'IMAX 3D', `3D`));

console.log(m.endScreening('October 2, 2020', 'IMAX 3D', 150));

console.log(m.endScreening('October 3, 2020', 'Main', 78));

console.log(m.toString());



m.newScreening('October 4, 2020', '235', `regular`);

m.newScreening('October 5, 2020', 'Main', `regular`);

m.newScreening('October 3, 2020', '235', `regular`);

m.newScreening('October 4, 2020', 'Main', `regular`);

console.log(m.toString());