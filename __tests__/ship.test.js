const Ship = require('../src/ship.js');

describe('ship',() => {
   let ship;

   beforeEach(() => {
       startingPort = {
           name: 'Belem'
       };
       ship = new Ship(startingPort);
       
   });

   describe('constructor function', () => {
       it('returns an object', () => {
           expect(ship).toBeInstanceOf(Object);
       })
       it('has a starting port', () => {
           expect(ship.name).toBe(startingPort.name)
       })
   })



});