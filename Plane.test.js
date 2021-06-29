const Plane = require('./Plane');

describe('Plane object', () => {

    const testPlane = new Plane("Jet");
    test('does the plane have a name', () => {
        expect(testPlane.name).toBe("Jet");
    })
})
