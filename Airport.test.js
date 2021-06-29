const Airport = require('./Airport');

describe('Airport object', () => {
    const testAirport = new Airport("DFW");

    test('airport has a name', () => {
        expect(testAirport.name).toBe("DFW");
    })
})