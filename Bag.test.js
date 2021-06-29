const Bag = require('./Bag');

describe('Bag Object', () => {

    const testBag = new Bag(30);
    test('does thge bag has a weight', () => {
        expect(testBag.weight).toBe(30);

    })
})
