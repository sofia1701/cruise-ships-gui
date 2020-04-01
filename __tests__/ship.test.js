const Ship = require('../src/ship.js');
const Port = require('../src/port.js')

describe('ship',() => {
   let ship;
   let port;
   
   beforeEach(() => {

       port = new Port('Belem');
       ship = new Ship(port);
            
   });

   describe('constructor function', () => {
       it('returns an object', () => {
           expect(ship).toBeInstanceOf(Object);
       })
       it('has a starting port', () => {
           expect(ship.currentPort).toBe(port)
       })
   })

   describe('set sail', () => {
       it('able to set sail', () => {
           ship.setSail()
           expect(ship.currentPort).toBeFalsy()
       })
   })

   describe('dock', () => {
       it('can dock to different ports', () => {
           const newPort = new Port('Calais');
           const newPort1 = new Port('Long Beach');
           ship.dock(newPort)
           expect(ship.currentPort).toBe(newPort);
           ship.dock(newPort1)
           expect(ship.currentPort).toBe(newPort1);
       })
   })



});