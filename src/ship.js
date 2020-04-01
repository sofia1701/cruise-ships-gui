class Ship {
    constructor(currentPort) {
        this.currentPort = currentPort;
        
    }

    setSail() {
        return (this.currentPort = !this.currentPort) ? false : true;
    }
    dock(port) {
        return this.currentPort = port;
    }
}



module.exports = Ship;