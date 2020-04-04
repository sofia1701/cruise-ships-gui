const { Port } = require("../src/index");


    describe('constructor function', () => {
        
        it('returns an object', () => {
            const port = new Port('Sydney')
            expect(port).toBeInstanceOf(Object);
        })
        it('has a name', () => {
            const port = new Port('Sydney')
            expect(port.portName).toBe('Sydney');
        })
    })

    describe('add ship', () => {
        it('adds a ship to a port', () => {
            const port = new Port('Sydney')
            const ship = {};
            port.addShip(ship);
            expect(port.ships).toContain(ship);
        })
    })
    describe('remove ship', () => {
        it('removes a ship from a port', () => {
            const port = new Port('Sydney')
            const titanic = {};
            const queenmary = {};
            const diamondPrincess = {};
            port.addShip(titanic);
            port.addShip(queenmary);
            port.addShip(diamondPrincess)
            port.removeShip(queenmary);

            expect(port.ships).toEqual([titanic,diamondPrincess]);
        })
        
    })




