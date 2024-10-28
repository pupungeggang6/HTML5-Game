class Thing {
    constructor() {
        this.position = {
            x: 0, y: 0
        }
    }
}

class Player extends Thing {
    constructor() {
        super()
    }
}

class Enemy extends Thing {
    constructor() {
        super()
    }
}