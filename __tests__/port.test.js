const { Port } = require("../src/index");

describe('port', () => {
    let port;
    let ship;
    let titanic;
    let queenmary;
    let diamondPrincess;

    beforeEach(() => {
        port = new Port('Sydney')
        ship = {};
        titanic = {};
        queenmary = {};
        diamondPrincess = {};
    })

    describe('constructor function', () => {
        
        it('returns an object', () => {
            expect(port).toBeInstanceOf(Object);
        })
        it('has a name', () => {
            expect(port.portName).toBe('Sydney');
        })
    })

    describe('add ship', () => {
        it('adds a ship to a port', () => {            
            port.addShip(ship);
            expect(port.ships).toContain(ship);
        })
    })
    describe('remove ship', () => {
        it('removes a ship from a port', () => {
            port.addShip(titanic);
            port.addShip(queenmary);
            port.addShip(diamondPrincess)
            port.removeShip(queenmary);

            expect(port.ships).toEqual([titanic,diamondPrincess]);
        })   
    })
})

    




