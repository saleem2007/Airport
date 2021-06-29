const Passenger = require('./Passenger');

describe('Passenger object', () => {
    const testPassenger = new Passenger("David Miller");

    test('Passenger has a name', () => {
        expect(testPassenger.name).toBe("David Miller");
    })
})