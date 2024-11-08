class Vector {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
}

class Thing {
    position = new Vector(0, 0)

    constructor() {

    }
}

class Player extends Thing {
    life = 60
    lifeMax = 60
    speed = 200
    
    jump = {
        ground: false,
        num: 0,
        power: 0,

    }

    constructor() {
        super()
        this.life = 60
        this.lifeMax = 60
        this.speed = 200
    }
}

class Camera extends Thing {
    constructor() {
        super()
    }
}

class Wall extends Thing {
    rect = []

    constructor(rect) {
        super()
        this.rect = rect
    }
}

class Platform extends Thing {

}

class Field {
    gravity = 800

    thing = []
    tile = []

    constructor() {
        this.thing.push(new Wall([80, 80, 80, 80]))
    }
}