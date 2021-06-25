function solveClasses() {

    class Hall {
        get performers() {
            return this._performers;
        }

        set performers(value) {
            this._performers = value;
        }

        constructor(capacity, name) {
            this.capacity = capacity;
            this.name = name;
            this.events = [];
            this.performers = [];

        };

        hallEvent(title) {
            if (this.events.includes(title)) {
                throw new Error(`This event is already added!`)
            }
            this.events.push(title);
            return `Event is added.`;
        };

        close() {
            this.events.length = 0;
            return `${this.name} hall is closed.`;
        };

        toString() {
            let output = [`${this.name} hall - ${this.capacity}`]
            this.events.length !== 0 ? output.push(`Events: ${this.events.join(', ')}`) : '';
            return output.join('\n');
        };
    }

    class MovieTheater extends Hall {
        constructor(capacity, name, screenSize) {
            super(capacity, name);
            this.screenSize = screenSize;
        };

        close() {
            return `${super.close()}Аll screenings are over.`
        };

        toString() {
            return `${super.toString()}\n${this.name} is a movie theater with ${this.screenSize} screensize and ${this.capacity} seats capacity.`
        }
    }

    class ConcertHall extends Hall {
        constructor(capacity, name,) {
            super(capacity, name);
        };

        hallEvent(title, performers) {
            super.performers = performers;
            return super.hallEvent(title);
        };

        close() {
           super.performers.length = 0;
           return `${super.close()}Аll performances are over.`
        };

        toString() {
            let output = [`${super.toString()}`]
            super.performers.length !== 0 ? output.push(`Performers: ${super.performers.join(', ')}`) : '';
            return output.join('\n');
        };
    }

    return {
        Hall, MovieTheater, ConcertHall
    }
}

let classes = solveClasses();


let concert = new classes.ConcertHall(5000, 'Diamond');

console.log(concert.hallEvent('The Chromatica Ball', ['LADY GAGA']));

console.log(concert.toString());

console.log(concert.close());

console.log(concert.toString());

/*
let hall = new classes.Hall(20, 'Main');

console.log(hall.hallEvent('Breakfast Ideas'));

console.log(hall.hallEvent('Annual Charity Ball'));

console.log(hall.toString());

console.log(hall.close());



    let movieHall = new classes.MovieTheater(10, 'Europe', '10m');

console.log(movieHall.hallEvent('Top Gun: Maverick'));

console.log(movieHall.toString());


 */

