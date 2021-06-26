describe("ChristmasMovies …", function () {

    let init = '';
    let actors = '';
    beforeEach(function () {
        init = new ChristmasMovies();
        actors = ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern'];
    });
    describe("Should test instantiation", function () {
        it('Should test properties for existing by name', () => {
            assert.property(init, 'movieCollection');
            assert.property(init, 'watched');
            assert.property(init, 'actors');
        });
        it('Should test constructor data structures', () => {
            assert.deepEqual(init.movieCollection, []);
            assert.deepEqual(init.watched, {});
            assert.deepEqual(init.actors, []);
        });
        it('Should test type properties', () => {
            assert.typeOf(init.movieCollection, 'Array');
            assert.typeOf(init.watched, 'Object');
            assert.typeOf(init.actors, 'Array');
        });
    });
//'Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']

    describe("Should test buyMovie", function () {
        it('Should work with unexpected iterable input', () => {
            assert.strictEqual(init.buyMovie(), `You just got undefined to your collection in which  are taking part!`);
            assert.strictEqual(init.buyMovie(12), `You just got 12 to your collection in which  are taking part!`);
            assert.strictEqual(init.buyMovie(null), `You just got null to your collection in which  are taking part!`);
            assert.strictEqual(init.buyMovie('    '), `You just got      to your collection in which  are taking part!`);
            assert.strictEqual(init.buyMovie({}), `You just got [object Object] to your collection in which  are taking part!`);
            assert.throw(() => init.buyMovie(undefined), Error, `You already own undefined in your collection!`);
        });


        it('Should throw for not interpretable second param', () => {
            assert.throw(() => init.buyMovie({}, 12), Error, 'number 12 is not iterable (cannot read property Symbol(Symbol.iterator))');
            assert.throw(() => init.buyMovie({}, true), Error,'boolean true is not iterable (cannot read property Symbol(Symbol.iterator))')
        });


        it('Should test standard input for movie not in movieCollection', () => {
            assert.strictEqual(init.buyMovie('Once Upon A Time',['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']),
                'You just got Once Upon A Time to your collection in which Macaulay Culkin, Joe Pesci, Daniel Stern are taking part!');
            console.log(init)
            assert.deepEqual(init.movieCollection,[ { name: 'Once Upon A Time', actors: ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']}]);
        });

        it('Should test standard input for movie not in movieCollection with repeating actors', () => {
            assert.strictEqual(init.buyMovie('Once Upon A Time',['Macaulay Culkin', 'Macaulay Culkin', 'Macaulay Culkin']),
                'You just got Once Upon A Time to your collection in which Macaulay Culkin are taking part!');
            assert.deepEqual(init.movieCollection,[ { name: 'Once Upon A Time', actors: ['Macaulay Culkin']}]);

            assert.strictEqual(init.buyMovie('HomeAlone',['Macaulay Culkin', 'Joe Pesci', 'Macaulay Culkin']),
                'You just got HomeAlone to your collection in which Macaulay Culkin, Joe Pesci are taking part!');
            assert.deepEqual(init.movieCollection,
                [{"actors": ["Macaulay Culkin"],"name": "Once Upon A Time"},{"actors": ["Macaulay Culkin","Joe Pesci"],"name": "HomeAlone"}]);
            assert.strictEqual(init.movieCollection.length,2)
        });

        it('Should throw when you own the movie', () => {
            init.buyMovie('Once Upon A Time');
            assert.throws(() =>
                    init.buyMovie('Once Upon A Time'),Error,
                `You already own Once Upon A Time in your collection!`
            )
            init.buyMovie('HomeAlone');
            assert.throws(() =>
                init.buyMovie('HomeAlone'),Error, `You already own HomeAlone in your collection!`)
        });
    });

    describe("Should test discardMovie", function () {
        it('Should throw with all kinds of input', () => {
            assert.throw(() => init.discardMovie(), Error, `undefined is not at your collection!`);
            assert.throw(() => init.discardMovie(12), Error, `12 is not at your collection!`);
            assert.throw(() => init.discardMovie(null), Error, `null is not at your collection!`);
            assert.throw(() => init.discardMovie({}), Error, `[object Object] is not at your collection!`);
        });
        it('Should throw with string movie that is missing', () => {
            init.buyMovie('New Movie',['Some Actor']);
            assert.throw(() => init.discardMovie('Something movie'), Error, `Something movie is not at your collection!`);
            assert.throw(() => init.discardMovie('Once Upon A Time'), Error, `Once Upon A Time is not at your collection!`);
        });


        it('Should delete/discard watched movie', () => {
            init.buyMovie('Once Upon A Time',['Macaulay Culkin', 'Macaulay Culkin', 'Macaulay Culkin']);
            init.watchMovie('Once Upon A Time')
            init.watchMovie('Once Upon A Time')
            assert.deepEqual(init.watched,{ 'Once Upon A Time': 2 })
            assert.deepEqual(init.movieCollection, [{"actors": ["Macaulay Culkin"], "name": "Once Upon A Time"}]);
            assert.strictEqual(init.discardMovie('Once Upon A Time'),
                'You just threw away Once Upon A Time!');
            assert.deepEqual(init.movieCollection,[]);
            assert.deepEqual(init.watched,{ })
        });

        it('Should discard movies', () => {
            init.buyMovie('Some Movie',['Macaulay Culkin', 'Macaulay Culkin', 'Macaulay Culkin']);
            init.watchMovie('Some Movie')
            init.buyMovie('Once Upon A Time',['Macaulay Culkin', 'Macaulay Culkin', 'Macaulay Culkin']);
            init.watchMovie('Once Upon A Time')
            assert.strictEqual(init.discardMovie('Once Upon A Time'),
                'You just threw away Once Upon A Time!');
            assert.strictEqual(init.discardMovie('Some Movie'),
                'You just threw away Some Movie!');

        });
        it('Should throw if movie is not watched', () => {
            init.buyMovie('New Movie',['Some Actor']);
            assert.throw(() => init.discardMovie('New Movie'), Error, `New Movie is not watched!`);
            init.buyMovie('SpiderMan',['Some Actor']);
            assert.throw(() => init.discardMovie('SpiderMan'), Error, `SpiderMan is not watched!`);
        });

    });

    describe("Should test watchMovie", function () {
        it('Should throw with unexpected input', () => {
            assert.throw(() => init.watchMovie(), Error, `No such movie in your collection!`);
            assert.throw(() => init.watchMovie(12), Error, `No such movie in your collection!`);
            assert.throw(() => init.watchMovie(null), Error, `No such movie in your collection!`);
            assert.throw(() => init.watchMovie({}), Error, `No such movie in your collection!`);
            assert.throw(() => init.watchMovie('someMovie'), Error, `No such movie in your collection!`);

        });
        it('Should check multiply watches', () => {
            init.buyMovie('Once Upon A Time In December',['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern'])
            init.watchMovie('Once Upon A Time In December')
            init.watchMovie('Once Upon A Time In December')
            assert.deepEqual(init.watched,{"Once Upon A Time In December": 2});
            init.buyMovie('Home Alone',['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern'])
            init.watchMovie('Home Alone')
            assert.deepEqual(init.watched,{"Home Alone": 1, "Once Upon A Time In December": 2});
            init.watchMovie('Once Upon A Time In December')
            init.watchMovie('Home Alone')
            assert.deepEqual(init.watched,{"Home Alone": 2, "Once Upon A Time In December": 3});
        });
    });
    describe("Should test favouriteMovie()", function () {
        it('Should throw empty collection', () => {
            assert.throw(() => init.favouriteMovie(), Error, `You have not watched a movie yet this year!`);
        });
        it('Should check multiply watches', () => {
            init.buyMovie('Once Upon A Time In December',['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern'])
            init.watchMovie('Once Upon A Time In December')
            init.watchMovie('Once Upon A Time In December')

            assert.strictEqual(init.favouriteMovie(),"Your favourite movie is Once Upon A Time In December and you have watched it 2 times!");
            init.buyMovie('Home Alone',['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern'])
            init.watchMovie('Home Alone')
            assert.strictEqual(init.favouriteMovie(),"Your favourite movie is Once Upon A Time In December and you have watched it 2 times!");
            init.watchMovie('Home Alone')
            init.watchMovie('Home Alone')
            init.watchMovie('Home Alone')
            assert.strictEqual(init.favouriteMovie(),"Your favourite movie is Home Alone and you have watched it 4 times!");
        });
    });


    describe("Should test  mostStarredActor()", function () {
        it('Should throw empty collection', () => {
            assert.throw(() => init. mostStarredActor(), Error, `You have not watched a movie yet this year!`);
        });
        it('Should check multiply watches', () => {
            init.buyMovie('Once Upon A Time In December',['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern'])

            assert.strictEqual(init.mostStarredActor(),"The most starred actor is Macaulay Culkin and starred in 1 movies!");
            init.buyMovie('Home Alone1',['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern'])
            init.buyMovie('Home Alone2',['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern'])
            assert.strictEqual(init.mostStarredActor(),"The most starred actor is Macaulay Culkin and starred in 3 movies!");

            init.buyMovie('Home1',['Joe Pesci', 'Daniel Stern', 'Daniel Stern'])
            init.buyMovie('Home2',['Daniel Stern', 'Joe Pesci', 'Daniel Stern'])
            init.buyMovie('Home3',['Daniel Stern', 'Joe Pesci', 'Daniel Stern'])
            init.buyMovie('Home4',['Daniel Stern', 'Joe Pesci', 'Daniel Stern'])
            assert.strictEqual(init.mostStarredActor(),"The most starred actor is Joe Pesci and starred in 7 movies!");

        });
    });
});