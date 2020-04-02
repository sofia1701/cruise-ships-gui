const { Port } = require("../src/index");
const { Itinerary } = require("../src/index");

describe('itinerary',() => {

    let itinerary;
    let port0;
    let port1;

    beforeEach(() => {

        port0 = new Port('Sydney');
        port1 = new Port('Long Beach');
        itinerary = new Itinerary([port0,port1]);     
    });
  
    describe('constructor function', () => {
        it('returns an object', () => {
            expect(itinerary).toBeInstanceOf(Object);
        })
        it('has ports',() => {
            expect(itinerary.ports).toEqual([port0,port1]);
        })
    })  
})
