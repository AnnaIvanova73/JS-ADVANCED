describe("HolidayPackage", function () {
    let init;
    let names;
    let emptyArray;
    beforeEach(function () {
        init = new HolidayPackage('Rome', 'Spring');
        names = ['Pesho Peshev', 'Gosho Goshev', 'Stamat Stamatov'];

    });
    describe("test_constructor", function () {
        it('should initialize correctly', function () {
            assert.instanceOf(init, HolidayPackage);
            assert.deepEqual(init.vacationers, []);
            assert.typeOf(init.destination, 'string');
            assert.typeOf(init.season, 'string');
            assert.isFalse(init.insuranceIncluded);
        });
    });

    describe("test_addVacationer", function () {
        it('should throw incorrect type of input', function () {
            assert.throw(() => init.addVacationer(), `Vacationer name must be a non-empty string`);
            assert.throw(() => init.addVacationer(123), `Vacationer name must be a non-empty string`);
        });
        it('should throw invalid length of input', function () {
            assert.throw(() => init.addVacationer(' '), `Vacationer name must be a non-empty string`);
            assert.isUndefined(init.addVacationer('Ivan '))
            assert.isUndefined(init.addVacationer(' Ivanov'))
            assert.throw(() => init.addVacationer('i'), 'Name must consist of first name and last name');
            assert.throw(() => init.addVacationer('Ivan'), 'Name must consist of first name and last name');
        });
        it('should addVacationer correctly', function () {
            init.addVacationer(names[0])
            assert.equal(init.vacationers[0], names[0])
            init.addVacationer(names[1])
            init.addVacationer(names[2])
            emptyArray = [names[0], names[1], names[2]];
            assert.deepEqual(init.vacationers, emptyArray)

        });

    });
    describe("test_showVacationers", function () {
        it('should show msg for empty emptyArray of this.vacationers', function () {
            const actual = init.showVacationers();
            assert.equal(actual, 'No vacationers are added yet')
        });

        it('should show all elements init this.vacationers', function () {
            emptyArray = ['Vacationers:', names[0], names[1], names[2]];
            let expected = emptyArray.join('\n');
            init.addVacationer(names[0])
            init.addVacationer(names[1])
            init.addVacationer(names[2])
            let actual = init.showVacationers();
            assert.equal(actual, expected);
            emptyArray.shift()
            assert.deepEqual(init.vacationers, emptyArray)
        });

    });

    describe("test_set insuranceIncluded(insurance)", function () {
        it("should throw for invalid type input", function () {
            assert.throw(() => init.insuranceIncluded = '', `Insurance status must be a boolean`);
            assert.throw(() => init.insuranceIncluded = 123, `Insurance status must be a boolean`);
            assert.throw(() => init.insuranceIncluded = {}, `Insurance status must be a boolean`);
            assert.throw(() => init.insuranceIncluded = [], `Insurance status must be a boolean`);
            assert.throw(() => init.insuranceIncluded = null, `Insurance status must be a boolean`);
            assert.throw(() => init.insuranceIncluded = names[0], `Insurance status must be a boolean`);
            assert.throw(() => init.insuranceIncluded = undefined, `Insurance status must be a boolean`);
        });
        it("should set correct value", function () {
            init.insuranceIncluded = true;
            assert.isTrue(init._insuranceIncluded)
            init.insuranceIncluded = false;
            assert.isFalse(init._insuranceIncluded)
        });
    });

    describe("test_ get insuranceIncluded()", function () {
        it("should get correct value", function () {
            init.insuranceIncluded = true;
            assert.isTrue(init.insuranceIncluded)
            init.insuranceIncluded = false;
            assert.isFalse(init.insuranceIncluded)
            init.insuranceIncluded = true;
            assert.isTrue(init.insuranceIncluded)

        });


    });

    describe("test_generateHolidayPackage()", function () {

        it("should throw for no elements in this.vacationers", function () {
            assert.throw(() => init.generateHolidayPackage(), `There must be at least 1 vacationer added`);
        });

        it("test most expensive option Summer", function () {
            init = new HolidayPackage('Italy', 'Summer')
            init.addVacationer(names[0])
            init.addVacationer(names[1])
            init.addVacationer(names[2])
            init.insuranceIncluded = true;

            emptyArray = ['Vacationers:',names[0], names[1], names[2]]
            let expectedLines = emptyArray.join('\n');
            let expectedArray = ['Holiday Package Generated', 'Destination: Italy', expectedLines, 'Price: 1500']
            let expectedMsg = expectedArray.join('\n')
            assert.equal(init.generateHolidayPackage(), expectedMsg)
        });

        it("test most expensive option Winter", function () {
            init = new HolidayPackage('Italy', 'Winter')
            init.addVacationer(names[0])
            init.addVacationer(names[1])
            init.addVacationer(names[2])
            init.insuranceIncluded = true;

            emptyArray = ['Vacationers:',names[0], names[1], names[2]]
            let expectedLines = emptyArray.join('\n');
            let expectedArray = ['Holiday Package Generated', 'Destination: Italy', expectedLines, 'Price: 1500']
            let expectedMsg = expectedArray.join('\n')
            assert.equal(init.generateHolidayPackage(), expectedMsg)
        });

        it("test most expensive option Winter without insuranceIncluded", function () {
            init = new HolidayPackage('Italy', 'Winter')
            init.addVacationer(names[0])
            init.addVacationer(names[1])
            init.addVacationer(names[2])


            emptyArray = ['Vacationers:',names[0], names[1], names[2]]
            let expectedLines = emptyArray.join('\n');
            let expectedArray = ['Holiday Package Generated', 'Destination: Italy', expectedLines, 'Price: 1400']
            let expectedMsg = expectedArray.join('\n')
            assert.equal(init.generateHolidayPackage(), expectedMsg)
        });
        it("test most expensive option Summer without insuranceIncluded", function () {
            init = new HolidayPackage('Italy', 'Winter')
            init.addVacationer(names[0])
            init.addVacationer(names[1])
            init.addVacationer(names[2])


            emptyArray = ['Vacationers:',names[0], names[1], names[2]]
            let expectedLines = emptyArray.join('\n');
            let expectedArray = ['Holiday Package Generated', 'Destination: Italy', expectedLines, 'Price: 1400']
            let expectedMsg = expectedArray.join('\n')
            assert.equal(init.generateHolidayPackage(), expectedMsg)
        });
        it("test most non-expensive option Spring without insuranceIncluded", function () {
            init = new HolidayPackage('Italy', 'Spring')
            init.addVacationer(names[0])
            init.addVacationer(names[1])
            init.addVacationer(names[2])


            emptyArray = ['Vacationers:',names[0], names[1], names[2]]
            let expectedLines = emptyArray.join('\n');
            let expectedArray = ['Holiday Package Generated', 'Destination: Italy', expectedLines, 'Price: 1200']
            let expectedMsg = expectedArray.join('\n')
            assert.equal(init.generateHolidayPackage(), expectedMsg)
        });
        it("test most non-expensive option Autumn without insuranceIncluded", function () {
            init = new HolidayPackage('Italy', 'Spring')
            init.addVacationer(names[0])
            init.addVacationer(names[1])
            init.addVacationer(names[2])


            emptyArray = ['Vacationers:',names[0], names[1], names[2]]
            let expectedLines = emptyArray.join('\n');
            let expectedArray = ['Holiday Package Generated', 'Destination: Italy', expectedLines, 'Price: 1200']
            let expectedMsg = expectedArray.join('\n')
            assert.equal(init.generateHolidayPackage(), expectedMsg)
        });
        it("test most non-expensive option Autumn with insuranceIncluded", function () {
            init = new HolidayPackage('Italy', 'Spring')
            init.addVacationer(names[0])
            init.addVacationer(names[1])
            init.addVacationer(names[2])
            init.insuranceIncluded = true;

            emptyArray = ['Vacationers:',names[0], names[1], names[2]]
            let expectedLines = emptyArray.join('\n');
            let expectedArray = ['Holiday Package Generated', 'Destination: Italy', expectedLines, 'Price: 1300']
            let expectedMsg = expectedArray.join('\n')
            assert.equal(init.generateHolidayPackage(), expectedMsg)
        });
        it("test most non-expensive option Spring with insuranceIncluded", function () {
            init = new HolidayPackage('Italy', 'Spring')
            init.addVacationer(names[0])
            init.addVacationer(names[1])
            init.addVacationer(names[2])
            init.insuranceIncluded = true;

            emptyArray = ['Vacationers:',names[0], names[1], names[2]]
            let expectedLines = emptyArray.join('\n');
            let expectedArray = ['Holiday Package Generated', 'Destination: Italy', expectedLines, 'Price: 1300']
            let expectedMsg = expectedArray.join('\n')
            assert.equal(init.generateHolidayPackage(), expectedMsg)
        });
    });
});
