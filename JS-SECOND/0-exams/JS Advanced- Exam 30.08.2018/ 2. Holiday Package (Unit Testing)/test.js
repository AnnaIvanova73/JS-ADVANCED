describe('HolidayPackage', () => {

    let holidayPackagePriceUp = {};
    let holidayPackage = {};
    beforeEach(function () {
        holidayPackagePriceUp = new HolidayPackage('Puerto Rico', 'Summer')
        holidayPackage = new HolidayPackage('Denmark', 'Spring');
    })

    describe('Test showVacationers', () => {
        it('Should return msg', () => {
            assert.strictEqual(holidayPackagePriceUp.showVacationers(), 'No vacationers are added yet');

        });
        it('Should return string with vacationers', () => {
            let arr = ['Vacationers:','Elon Musk','Pesho Peshev','Stamat Stamatov'];
            let moch = arr.join('\n')
            holidayPackagePriceUp.addVacationer('Elon Musk')
            holidayPackagePriceUp.addVacationer('Pesho Peshev')
            holidayPackagePriceUp.addVacationer('Stamat Stamatov')
            assert.strictEqual(holidayPackagePriceUp.showVacationers(),moch)
            arr.shift()
            assert.deepEqual(holidayPackagePriceUp.vacationers,arr);
        });
    });

    describe('Test addVacationer', () => {
        it('Should throw for name incorrect format', () => {
            assert.throw(() => holidayPackagePriceUp.addVacationer(''), Error, 'Name must consist of first name and last name');
            assert.throw(() => holidayPackagePriceUp.addVacationer(' '), Error, 'Vacationer name must be a non-empty string');
            assert.throw(() => holidayPackagePriceUp.addVacationer('i'), Error, 'Name must consist of first name and last name');
            assert.throw(() => holidayPackagePriceUp.addVacationer('Pesho'), Error, 'Name must consist of first name and last name');
            assert.throw(() => holidayPackagePriceUp.addVacationer('Stamat Pesho Ivan'), Error, 'Name must consist of first name and last name');
        });
    });

    describe('Test insuranceIncluded', () => {
        it('Should throw when set status is not bool', () => {
            assert.throw(() => holidayPackagePriceUp.insuranceIncluded = 'blabla', Error, 'Insurance status must be a boolean');
            assert.throw(() => holidayPackagePriceUp.insuranceIncluded = 12, Error, 'Insurance status must be a boolean');
            assert.throw(() => holidayPackagePriceUp.insuranceIncluded = [], Error, 'Insurance status must be a boolean');
            assert.throw(() => holidayPackagePriceUp.insuranceIncluded = null, Error, 'Insurance status must be a boolean');
        });
        it('Should set value correct', () => {
            holidayPackagePriceUp.insuranceIncluded = true;
            assert.isTrue(holidayPackagePriceUp.insuranceIncluded);
            holidayPackagePriceUp.insuranceIncluded = false;
            assert.isFalse(holidayPackagePriceUp.insuranceIncluded);
        });
    });


    describe('Test generateHolidayPackage', () => {
        it('Should throw when set status is not bool', () => {
            assert.throw(() => holidayPackagePriceUp.generateHolidayPackage(), Error, 'There must be at least 1 vacationer added');
            assert.throw(() => holidayPackagePriceUp.insuranceIncluded = 12, Error, 'Insurance status must be a boolean');
            assert.throw(() => holidayPackagePriceUp.insuranceIncluded = [], Error, 'Insurance status must be a boolean');
            assert.throw(() => holidayPackagePriceUp.insuranceIncluded = null, Error, 'Insurance status must be a boolean');
            assert.throw(() => holidayPackagePriceUp.insuranceIncluded = {}, Error, 'Insurance status must be a boolean');
            assert.throw(() => holidayPackagePriceUp.insuranceIncluded = undefined, Error, 'Insurance status must be a boolean');
            assert.throw(() => holidayPackagePriceUp.insuranceIncluded = '', Error, 'Insurance status must be a boolean');
        });
        it('Should test spring with insurance true', () => {
            holidayPackage.insuranceIncluded = true;
            holidayPackage.addVacationer('Pesho Peshev')
            holidayPackage.addVacationer('Gosho Peshev')
            assert.strictEqual(holidayPackage.generateHolidayPackage(),
                'Holiday Package Generated\nDestination: Denmark\nVacationers:\nPesho Peshev\nGosho Peshev\nPrice: 900');
        });
        it('Should test spring with insurance false', () => {
            holidayPackage.addVacationer('Pesho Peshev')
            holidayPackage.addVacationer('Gosho Peshev')
            assert.strictEqual(holidayPackage.generateHolidayPackage(),
                'Holiday Package Generated\nDestination: Denmark\nVacationers:\nPesho Peshev\nGosho Peshev\nPrice: 800');
        });
        it('Should test summer with insurance true', () => {
            holidayPackagePriceUp.insuranceIncluded = true;
            holidayPackagePriceUp.addVacationer('Pesho Peshev')
            holidayPackagePriceUp.addVacationer('Gosho Peshev')
            assert.strictEqual(holidayPackagePriceUp.generateHolidayPackage(),
                'Holiday Package Generated\nDestination: Puerto Rico\nVacationers:\nPesho Peshev\nGosho Peshev\nPrice: 1100');
        });
        it('Should test summer with insurance false', () => {
            holidayPackagePriceUp.insuranceIncluded = true;
            holidayPackagePriceUp.addVacationer('Pesho Peshev')
            holidayPackagePriceUp.addVacationer('Gosho Peshev')
            assert.strictEqual(holidayPackagePriceUp.generateHolidayPackage(),
                'Holiday Package Generated\nDestination: Puerto Rico\nVacationers:\nPesho Peshev\nGosho Peshev\nPrice: 1100');
        });

    });
});