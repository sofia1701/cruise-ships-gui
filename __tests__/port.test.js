const { Port } = require("../src/index");

describe('port',() => {
    let port0;

    beforeEach(() => {
        
        port0 = new Port('Sydney')
    })

    describe('constructor function', () => {
        
        it('returns an object', () => {
            expect(port0).toBeInstanceOf(Object);
        })
        it('has a name', () => {
            expect(port0.portName).toBe('Sydney');
        })
    })
});

