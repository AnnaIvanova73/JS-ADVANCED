describe('Testing dealership', () => {
    it('testing newCarCost', () => {
        assert.equal(dealership.newCarCost('Audi A4 B8', 50000), 35000);
        assert.equal(dealership.newCarCost('Lada Niva', 50000), 50000);
    });

    it('testing carEquipment', () => {
        assert.deepEqual(dealership.carEquipment(['heated seats', 'sliding roof', 'sport rims', 'navigation'], [0,3]), ['heated seats', 'navigation']);
        assert.deepEqual(dealership.carEquipment(['heated seats', 'sliding roof', 'sport rims', 'navigation'], [3]), ['navigation']);
        assert.deepEqual(dealership.carEquipment(['heated seats', 'sliding roof', 'sport rims', 'navigation'], []), []);
    });

    it('testing euroCategory', () => {
        assert.equal(dealership.euroCategory(3), 'Your euro category is low, so there is no discount from the final price!')
        assert.equal(dealership.euroCategory(4),'We have added 5% discount to the final price: 14250.');
    });
});