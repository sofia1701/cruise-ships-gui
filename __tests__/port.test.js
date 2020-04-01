const Port = require('../src/port.js')

describe('port',() => {
    let port;

    beforeEach(() => {
        
        port = new Port('Belem')
    })

    describe('constructor function', () => {
        
        it('returns an object', () => {
            expect(port).toBeInstanceOf(Object);
        })
        it('has a name', () => {
            expect(port.name).toBe('Belem');
        })
    })
});

