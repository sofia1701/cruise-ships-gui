const { Ship } = require("../src/index");
//const { Port } = require("../src/index");
//const { Itinerary } = require("../src/index");

describe('ship', () => {

    describe('with ports and an itinerary', () => {
        let ship;
        let port0;
        let port1;
        let itinerary;
        
    
        beforeEach(() => {
            const port = {
                removeShip: jest.fn(),
                addShip: jest.fn(),
            };
            port0 = {
                ...port,
                portName: 'Sydney',
                ships: [],
            };
            port1 = {
                ...port,
                portName: 'Long Beach',
                ships: [],
            };
            
            itinerary = { ports: [port0,port1] };

            ship = new Ship(itinerary);    
        });
    
        describe('constructor function', () => {
            it('returns an object', () => {
                expect(ship).toBeInstanceOf(Object);
            })
            it('has a starting port', () => {
                expect(ship.currentPort).toBe(port0)
            })
        })
     
        describe('set sail', () => {
            it('able to set sail', () => {
                ship.setSail()
                expect(ship.currentPort).toBeFalsy();
                expect(ship.previousPort).toStrictEqual(port0);
                expect(port0.removeShip).toHaveBeenCalledWith(ship);
            })
        })
     
        describe('dock', () => {
            it('can dock to different ports', () => {
                ship.setSail()
                ship.dock()
                expect(ship.currentPort).toBe(port1);
                expect(port1.addShip).toHaveBeenCalledWith(ship)
            })
        })
     
        describe('throws an error', () => {
            it('cant sail further than its itinerary', () => {
                 ship.setSail()
                 ship.dock() 
                 expect(() => ship.setSail()).toThrowError('End of itinerary reached')
            })
        })
     
        describe('Ship > gets added to port on instantiation',() => {
            it('gets added to port on instantiation', () => {
                expect(port0.addShip).toHaveBeenCalledWith(ship);
            })
        })
     
    })

})

