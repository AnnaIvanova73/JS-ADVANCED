describe("Repository", function () {

    describe("test_constructor", function () {
        it('constructor', function() {
            let repo = new Repository({name: "string", age: "number", birthday: "object"});
            let properties = {name: "string", age: "number", birthday: "object"}
            assert.instanceOf(repo, Repository);
            assert.deepEqual(repo.props, properties);
            assert.deepEqual(repo.data, new Map());
            assert.equal(repo.nextId(), 0);
            assert.equal(repo.count, 0);
        });
    });

    describe("test_addMethod", function () {
        it("test_shouldThrowForIncorrectInput", function () {
            let repository = new Repository({name: "string", age: "number", birthday: "object"});
            assert.throws(() => repository.add({
                something: 'asd',
                age: 22,
                birthday: new Date(1998, 0, 7)
            }), 'Property name is missing from the entity!');
            assert.throws(() => repository.add({}, 'properties is not defined'));
            assert.throws(() => repository.add(234, 'properties is not defined'));
        });
        it("test_shouldThrowIncorrectTypeOfInput", function () {
            let repository = new Repository({name: "string", age: "number", birthday: "object"});
            assert.throws(() => repository.add({
                "name": "Pesho",
                "age": 22,
                "birthday": "1998-01-06T22:00:00.000Z"
            }), 'Property birthday is not of correct type!');
            assert.throws(() => repository.add({
                name: 123,
                age: 'asd',
                birthday: new Date(1998, 0, 7)
            }), 'Property name is not of correct type!');
            assert.throws(() => repository.add({
                name: 'Pesho',
                age: 'asd',
                birthday: new Date(1998, 0, 7)
            }), 'Property age is not of correct type!');
        });


        it("test_AddWorkOkey", function () {
            let repo = new Repository({name: "string", age: "number", birthday: "object"});
            let entity = {name: "Pesho", age: 22, birthday: new Date(1998, 0, 7)}
            assert.equal(repo.add(entity), 0);
            assert.equal(repo.add(entity), 1);
            assert.deepEqual(repo.data.get(1), entity);
            assert.equal(repo.count, 2);
        });

    });
    describe("test_countMethod", function () {
        it("test_shouldReturnCorrectSizeAfterAdd", function () {
            let repository = new Repository({name: "string", age: "number", birthday: "object"});
            repository.add({name: "Pesho", age: 22, birthday: new Date(1998, 0, 7)});
            assert.equal(repository.count, 1)
            repository.add({name: "Pesho", age: 22, birthday: new Date(1998, 0, 7)});
            assert.equal(repository.count, 2)
        });
    });
    it("test_shouldReturnCorrectSizeAfterDel", function () {
        let repository = new Repository({name: "string", age: "number", birthday: "object"});
        let actual = repository.add({name: "Pesho", age: 22, birthday: new Date(1998, 0, 7)});
        assert.equal(repository.count, 1)
        repository.del(actual);
        assert.equal(repository.count, 0)
    });
    it("test_initValueShouldBeZero", function () {
        let repository = new Repository({name: "string", age: "number", birthday: "object"});
        assert.equal(repository.count, 0)

    });
    describe("test_delMethod", function () {

        it("test_shouldThrowForInvalidIndex", function () {
            let repository = new Repository({name: "string", age: "number", birthday: "object"});
            assert.throws(() => repository.del(5), 'Entity with id: 5 does not exist!');
            assert.throws(() => repository.del(), 'Entity with id: undefined does not exist!');
            assert.throws(() => repository.del('0'), 'Entity with id: 0 does not exist!');
        });

        it("test_shouldDelete", function () {
            let repository = new Repository({name: "string", age: "number", birthday: "object"});
            let actual = repository.add({name: "Pesho", age: 22, birthday: new Date(1998, 0, 7)});
            let addAnother = repository.add({name: "Pesho", age: 22, birthday: new Date(1998, 0, 7)});
            assert.equal(repository.count, 2)
            repository.del(addAnother);
            assert.equal(repository.count, 1)
            repository.del(actual);
            assert.equal(repository.count, 0)
        });

        it("test_shouldDeleteExactObject", function () {
            let repository = new Repository({name: "string", age: "number", birthday: "object"});
            let obj = {name: "Pesho", age: 22, birthday: new Date(1998, 0, 7)}
            let actual = repository.add(obj);
            assert.isTrue(repository.data.has(actual));
            repository.del(0);
            assert.isFalse(repository.data.has(actual));

        });
    });
    describe("test_getId and update", function () {

        it("test_shouldReturnCorrectObj", function () {
            let repository = new Repository({name: "string", age: "number", birthday: "object"});
            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            repository.add(entity); // Returns 0
            repository.add(entity);
            let actual = repository.getId(0);
            assert.deepEqual(actual, entity)
        });
        it("test_getIdShouldThrowAnError", function () {
            let repository = new Repository({name: "string", age: "number", birthday: "object"});
            assert.throw(() => {repository.getId(5);}, `Entity with id: 5 does not exist!`);
            assert.throw(() => {repository.getId();}, `undefined does not exist!`);
        });
        it("test_updateProper", function () {
            let repository = new Repository({name: "string", age: "number", birthday: "object"});
            repository.add({name: "Pesho", age: 22, birthday: new Date(1998, 0, 7)});
            let newObj = {name: "Ivan", age: 22, birthday: new Date(2000, 10, 7)}
            repository.update(0, newObj)
            assert.equal(repository.count, 1);
            assert.deepEqual(repository.getId(0), newObj);
        });
        it("test_updateShouldThrow", function () {
            let repository = new Repository({name: "string", age: "number", birthday: "object"});
            let obj = {name: "Ivan", age: 22, birthday: new Date(2000, 10, 7)};
            repository.add(obj)
            assert.throw(() => repository.update(1, obj), `Entity with id: 1 does not exist!`);
            assert.throws(() => repository.update(5,obj), 'Entity with id: 5 does not exist!');
            assert.throws(() => repository.update(), 'Entity with id: undefined does not exist!');
            assert.throws(() => repository.update('0',obj), 'Entity with id: 0 does not exist!')

            let entity3 = { age: 22, birthday: new Date(2000, 10, 7)};
            let entity4 = {name: 123, age: 22, birthday: new Date(2000, 10, 7)};

            assert.throw(() => {repository.update(0, entity3)}, `Property name is missing from the entity!`);
            assert.throw(() => {repository.update(0, entity4)}, `Property name is not of correct type!`);
        });
    });
});