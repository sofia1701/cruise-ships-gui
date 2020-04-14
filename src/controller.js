(function exportController() {
  class Controller {
    constructor(ship) {
      this.ship = ship;
      this.initialiseSea();

      document.querySelector("#sailbutton").addEventListener("click", () => {
        this.setSail();
      })
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

    renderShip() {
      const ship = this.ship;
      const shipPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
    // finds the index of the ship's currentPort inside of its itinerary.ports  
      const portElement = document.querySelector(`[data-port-index = '${shipPortIndex}']`);
    // attribute selector to find a .port element that has a portIndex data attribute which corresponds to this index

      const shipElement = document.querySelector('#ship');
      shipElement.style.top = `${portElement.offsetTop + 32}px`;
      shipElement.style.left = `${portElement.offsetLeft - 32}px`;

    // set the top and left CSS properties of your ship element to the offsetTop and offsetLeft values for the port element.  
    }

    setSail() {
      const ship = this.ship;
      const currentPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
      const nextPortIndex = currentPortIndex + 1;
      const nextPortElement = document.querySelector(`[data-port-index = '${nextPortIndex}']`);

      if (!nextPortElement) {
        return this.renderMessage(`${ship.currentPort.portName} is your final destination!`)
      }

      this.renderMessage(`Departing from ${ship.currentPort.portName}`)
      ship.setSail();

      const shipElement = document.querySelector('#ship');
      const sailInterval = setInterval(() => {
        const shipLeft = parseInt(shipElement.style.left, 10);
        if(shipLeft === (nextPortElement.offsetLeft - 32)){
          
          ship.dock();
          this.renderMessage(`Arriving at ${ship.currentPort.portName}`)
          clearInterval(sailInterval);
        }
        shipElement.style.left = `${shipLeft + 1}px`;
      }, 20);
    }

    renderMessage(message) {
      const messageElement = document.createElement('div');
      messageElement.id = 'message';
      messageElement.innerHTML = message;

      const viewport = document.querySelector('#viewport');
      viewport.appendChild(messageElement);

      setTimeout(() => {
        viewport.removeChild(messageElement)
      }, 3000);

    }
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Controller;
  } else {
    window.Controller = Controller;
  }


}())


