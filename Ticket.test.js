const Ticket = require('./Ticket');

describe('Ticket object', () => {

    const testTicket = new Ticket(true);
    test('Has the ticket been validated', () => {
        expect(testTicket.isValid).toBe(true);
    })
})
