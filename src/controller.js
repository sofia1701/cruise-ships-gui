(function exportController() {
  class Controller {
    constructor() {
      this.initialiseSea();
    }
  
    initialiseSea() {
      const backgrounds = [
        './images/water0.png',
        './images/water1.png',
      ]
      
      let backgroundIndex = 0;
  
      window.setInterval(() => {
        document.querySelector("#viewport").style.backgroundImage = `url(${backgrounds[backgroundIndex % backgrounds.length]})`;
        backgroundIndex += 1;
      },1000)
    }

    renderPorts(ports) {
      const portsElement = document.querySelector('#ports');
      portsElement.style.width = '0px';

      ports.forEach((port, index) => {
        const newPortElement = document.createElement('div');
        newPortElement.className = 'port';

        newPortElement.dataset.portName = port.name;
        newPortElement.dataset.portIndex = index;
      
        portsElement.appendChild(newPortElement);
      // This will insert our new element newPortElement into the DOM as a child of the #ports div.

  
        const portsElementWidth = parseInt(portsElement.style.width, 10);
        portsElement.style.width = `${portsElementWidth + 256}px`;

      // Add 256px to the #ports div every time a new port element is appended to it  
      })
    }

    renderShip(ship) {
      const shipPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
      const portElement = document.querySelector(`[data-port-index = '${shipPortIndex}']`);

      const shipElement = document.querySelector('#ship');
      shipElement.style.top = `${portElement.offsetTop + 32}px`;
      shipElement.style.left = `${portElement.offsetLeft - 32}px`;

    // set the top and left CSS properties of your ship element to the offsetTop and offsetLeft values for the port element.  
    
    }
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Controller;
  } else {
    window.Controller = Controller;
  }


}())


