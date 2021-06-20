describe('Repository', () => {

    let newRepo = {};
    let entityIncorrectKeyName = {};
    let entityIncorrectKeyAge = {};
    let entityIncorrectKeyBirthday = {};
    let entity = {};
    beforeEach(function () {
        newRepo = new Repository({name: "string", age: "number", birthday: "object"});
        entityIncorrectKeyName = {nameSome: "Pesho", age: 22, birthday: new Date(1998, 0, 7)};
        entityIncorrectKeyAge = {nameSome: "Pesho", ageSome: 22, birthday: new Date(1998, 0, 7)};
        entityIncorrectKeyBirthday = {nameSome: "Pesho", ageSome: 22, b: new Date(1998, 0, 7)};
        entity = {name: "Pesho", age: 22, birthday: new Date(1998, 0, 7)};

    })
    describe('Tests initialization', () => {
        it('should test initialization', () => {
            assert.instanceOf(newRepo, Repository);
            assert.property(new Repository, 'data');
            assert.property(new Repository, 'props');
            assert.property(new Repository, 'nextId');
        })
        it('should test id func', () => {
            assert.instanceOf(newRepo, Repository);
            assert.strictEqual(newRepo.nextId(), 0);
        });
        it('should test map property and props', () => {
            assert.deepEqual(newRepo.props, {name: "string", age: "number", birthday: "object"});
            assert.deepEqual(newRepo.data, new Map);
        })
    })

    describe('Tests method count', () => {
        it('Should return correct size data property', () => {
            assert.strictEqual(newRepo.count, 0);
            newRepo.add(entity);
            assert.strictEqual(newRepo.count, 1);
            newRepo.add(entity);
            newRepo.add(entity);
            newRepo.add(entity);
            assert.strictEqual(newRepo.count, 4);

        })
    })
    describe('Tests method private method _validate through method add', () => {
        it('Should throw error for incorrect keys', () => {
            assert.throw(() => newRepo.add(entityIncorrectKeyName), Error, 'Property name is missing from the entity!');
            assert.throw(() => newRepo.add(entityIncorrectKeyAge), Error, 'Property name is missing from the entity!');
            assert.throw(() => newRepo.add(entityIncorrectKeyBirthday), Error, 'Property name is missing from the entity!');
        });
        it('Should throw error for incorrect typeof values', () => {
            assert.throw(() => newRepo.add({
                name: 11,
                age: 22,
                birthday: new Date(1998, 0, 7)
            }), TypeError, 'Property name is not of correct type!');
            assert.throw(() => newRepo.add({
                name: 'Stamat',
                age: '22',
                birthday: new Date(1998, 0, 7)
            }), TypeError, 'Property age is not of correct type!');
            assert.throw(() => newRepo.add({
                name: 'Pesho',
                age: 22,
                birthday: 11
            }), TypeError, 'Property birthday is not of correct type!');

        });
        it('Should test for another weakness in input', () => {
            assert.throw(() => newRepo.add({}), Error, 'Property name is missing from the entity!');
            assert.throw(() => newRepo.add(), TypeError, 'Cannot read property \'hasOwnProperty\' of undefined');
            assert.throw(() => newRepo.add(44), Error, 'Property name is missing from the entity!');
            assert.throw(() => newRepo.add(null), 'Cannot read property \'hasOwnProperty\' of null');
            assert.equal(newRepo.add({name: 'Pesho', age: 22, birthday: new Date()}), 0)
        });
    });

    describe('Tests method add', () => {
        it('Should add correct', () => {
            newRepo.add(entity);
            assert.deepEqual(newRepo.data.values().next().value, entity);
            assert.strictEqual(newRepo.add(entity),1)
            assert.strictEqual(newRepo.add({name: "Ivan", age: 22, birthday: new Date(1998, 0, 7)}),2)
        });
    });

    describe('Tests method getId', () => {
        it('Should throw for unexciting id', () => {
            assert.throw(() => newRepo.getId(100), Error, 'Entity with id: 100 does not exist!');
            assert.throw(() => newRepo.getId(-1), Error, 'Entity with id: -1 does not exist!');
            assert.throw(() => newRepo.getId(0), Error, 'Entity with id: 0 does not exist!');
            assert.throw(() => newRepo.getId(), Error, 'Entity with id: undefined does not exist!');
            assert.throw(() => newRepo.getId(null), Error, 'Entity with id: null does not exist!');
            assert.throw(() => newRepo.getId([]), Error, 'Entity with id:  does not exist!');
        });
        it('Should return correct object', () => {
            let idIvan = newRepo.add({name: "Ivan", age: 22, birthday: new Date(1998, 0, 7)})
            assert.deepEqual(newRepo.getId(idIvan),{name: "Ivan", age: 22, birthday: new Date(1998, 0, 7)})
            let idPesho = newRepo.add({name: "Pesho", age: 22, birthday: new Date(1998, 0, 7)})
            assert.deepEqual(newRepo.getId(idPesho),{name: "Pesho", age: 22, birthday: new Date(1998, 0, 7)})
            let idStamat = newRepo.add({name: "Stamat", age: 22, birthday: new Date(1998, 0, 7)})
            assert.deepEqual(newRepo.getId(idStamat),{name: "Stamat", age: 22, birthday: new Date(1998, 0, 7)})
        });
    })
    describe('Tests method update', () => {
        it('Should throw for unexciting id', () => {
            assert.throw(() => newRepo.update(100), Error, 'Entity with id: 100 does not exist!');
            assert.throw(() => newRepo.update(-1), Error, 'Entity with id: -1 does not exist!');
            assert.throw(() => newRepo.update(0), Error, 'Entity with id: 0 does not exist!');
            assert.throw(() => newRepo.update(), Error, 'Entity with id: undefined does not exist!');
            assert.throw(() => newRepo.update(null), Error, 'Entity with id: null does not exist!');
            assert.throw(() => newRepo.update([]), Error, 'Entity with id:  does not exist!');
        });
        it('Should throw for invalid entity', () => {
            newRepo.add(entity);
            newRepo.add({name: "Stamat", age: 22, birthday: new Date(1998, 0, 7)});
            newRepo.add({name: "Pesho", age: 22, birthday: new Date(1998, 0, 7)});
            newRepo.add({name: "Ivan", age: 22, birthday: new Date(1998, 0, 7)});
            assert.throw(() => newRepo.update(1,entityIncorrectKeyName), Error, 'Property name is missing from the entity!');
            assert.throw(() => newRepo.update(2,entityIncorrectKeyAge), Error, 'Property name is missing from the entity!');
            assert.throw(() => newRepo.update(3,entityIncorrectKeyBirthday), Error, 'Property name is missing from the entity!');
        });
        it('Should update an existing entity successful', () => {
            newRepo.add(entity);
            newRepo.add({name: "Stamat", age: 22, birthday: new Date(1998, 0, 7)});
            assert.deepEqual(newRepo.getId(1),{name: "Stamat", age: 22, birthday: new Date(1998, 0, 7)});
            newRepo.update(1,{name: "Pesho", age: 22, birthday: new Date(1998, 0, 7)})
            assert.deepEqual(newRepo.getId(1),{name: "Pesho", age: 22, birthday: new Date(1998, 0, 7)} );
        });
    });
    describe('Tests method del', () => {
        it('Should throw for unexciting id', () => {
            assert.throw(() => newRepo.del(100), Error, 'Entity with id: 100 does not exist!');
            assert.throw(() => newRepo.del(-1), Error, 'Entity with id: -1 does not exist!');
            assert.throw(() => newRepo.del(0), Error, 'Entity with id: 0 does not exist!');
            assert.throw(() => newRepo.del(), Error, 'Entity with id: undefined does not exist!');
            assert.throw(() => newRepo.del(null), Error, 'Entity with id: null does not exist!');
            assert.throw(() => newRepo.del([]), Error, 'Entity with id:  does not exist!');
        });
        it('Should throw for invalid entity', () => {
            newRepo.add({name: "Stamat", age: 22, birthday: new Date(1998, 0, 7)});
            assert.throw(() => newRepo.del(4,{}), Error, 'Entity with id: 4 does not exist!');
            assert.isUndefined(newRepo.del(0,{}))
            assert.throw(() => newRepo.update(-1,entityIncorrectKeyAge), Error, 'Entity with id: -1 does not exist!');
        });
        it('Should update an existing entity successful', () => {
            newRepo.add(entity);
            newRepo.add({name: "Stamat", age: 22, birthday: new Date(1998, 0, 7)});
            assert.strictEqual(newRepo.count,2);
            newRepo.del(1);
            assert.strictEqual(newRepo.count,1);
            newRepo.del(0);
            assert.strictEqual(newRepo.count,0);
        });
    });
})
