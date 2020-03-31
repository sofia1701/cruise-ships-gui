class Ship {
    constructor(startingPort) {
        this.name = startingPort.name;
    }

    setSail() {
        return !this.name ? false : true;
    }
}



module.exports = Ship;