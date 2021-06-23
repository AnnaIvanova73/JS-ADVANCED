describe('HolidayPackage', () => {

    let summer = {};
    let winter = {};
    let autumn = {};
    let spring = {};
    let vacationers = [];
    beforeEach(() => {
        summer = new HolidayPackage('Italy', 'Summer');
        winter = new HolidayPackage('Italy', 'Winter');
        autumn = new HolidayPackage('Italy', 'Autumn');
        spring = new HolidayPackage('Italy', 'Spring');
        vacationers = [`Ivan Ivanov`, `Petar Petrov`, `Georgi Georgiev`]
    })
    describe('Test showVacationers', () => {
        it('Should display correct msg - empty array vacationers', () => {
            assert.strictEqual(summer.showVacationers(), `No vacationers are added yet`);
        });
        it('Should display correct msg when has vacationers', () => {
            vacationers.forEach(e => summer.addVacationer(e));
            vacationers.unshift(`Vacationers:`)
            assert.strictEqual(summer.showVacationers(), vacationers.join('\n'));
        });
    });

    describe('Test addVacationer', () => {
        it('Should return error for invalid type of vacationer', () => {
            assert.throw(() => summer.addVacationer(), Error, `Vacationer name must be a non-empty string`);
            assert.throw(() => summer.addVacationer(1), Error, `Vacationer name must be a non-empty string`);
        });
        it('Should display correct msg when name is incorrect', () => {
            assert.throw(() => summer.addVacationer(''), Error, `Name must consist of first name and last name`);
            assert.throw(() => summer.addVacationer(' '), Error, `Vacationer name must be a non-empty string`);
            assert.throw(() => summer.addVacationer('', 'Ivanov'), Error, `Name must consist of first name and last name`);
        });
        it('Should add vacationer successfully', () => {
            vacationers.forEach(e => summer.addVacationer(e));
            assert.deepEqual(summer.vacationers, vacationers);
            assert.strictEqual(summer.vacationers.length, vacationers.length);
        });
    });
    describe('Should test mutator methods of insuranceIncluded', () => {
        it('Should throw for any other type of input excluding boolean', () => {
            assert.throw(() => summer.insuranceIncluded = '', Error, `Insurance status must be a boolean`);
            assert.throw(() => summer.insuranceIncluded = 12, Error, `Insurance status must be a boolean`);
        });
        it('Should change insuranceIncluded correctly', () => {
            assert.isFalse(summer.insuranceIncluded);
            summer.insuranceIncluded = true;
            assert.isTrue(summer.insuranceIncluded);
            summer.insuranceIncluded = false;
            assert.isFalse(summer.insuranceIncluded);
        });

    });

    describe('Should test generateHolidayPackage()', () => {
        it('Should throw for empty arr vacationers', () => {
            assert.throw(() => summer.generateHolidayPackage(), Error, `There must be at least 1 vacationer added`);
        });
        it('Should test Summer season with insuranceIncluded === true', () => {
            summer.insuranceIncluded = true;
            vacationers.forEach(e => summer.addVacationer(e));
            vacationers.unshift('Vacationers:');
            let dummyPackage = ['Holiday Package Generated', `Destination: Italy`, vacationers.join('\n'), `Price: 1500`];
            assert.strictEqual(summer.generateHolidayPackage(), dummyPackage.join('\n'))
        });

        it('Should test Winter season with insuranceIncluded === false', () => {
            vacationers.forEach(e => winter.addVacationer(e));
            vacationers.unshift('Vacationers:');
            let dummyPackage = ['Holiday Package Generated', `Destination: Italy`, vacationers.join('\n'), `Price: 1400`];
            assert.strictEqual(winter.generateHolidayPackage(), dummyPackage.join('\n'))
        });

        it('Should test Autumn season with insuranceIncluded === false', () => {
            vacationers.forEach(e => autumn.addVacationer(e));
            vacationers.unshift('Vacationers:');
            let dummyPackage = ['Holiday Package Generated', `Destination: Italy`, vacationers.join('\n'), `Price: 1200`];
            assert.strictEqual(autumn.generateHolidayPackage(), dummyPackage.join('\n'))
        });
        it('Should test Spring season with insuranceIncluded === true', () => {
            spring.insuranceIncluded = true;
            vacationers.forEach(e => spring.addVacationer(e));
            vacationers.unshift('Vacationers:');
            let dummyPackage = ['Holiday Package Generated', `Destination: Italy`, vacationers.join('\n'), `Price: 1300`];
            assert.strictEqual(spring.generateHolidayPackage(), dummyPackage.join('\n'))
        });
    })
})