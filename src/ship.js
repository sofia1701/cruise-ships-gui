class Ship {
    constructor(startingPort) {
        this.name = startingPort.name;
    }

    get sail() {
        return startingPort;
    }

    setSail() {
        if (!this.sail) {
            return false;
        }
    }
}



module.exports = Ship;