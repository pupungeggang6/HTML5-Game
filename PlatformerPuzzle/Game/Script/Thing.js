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
        this.size = {
            x: 40, y: 40
        }
    }
}

class Enemy extends Thing {
    constructor() {
        super()
    }
}