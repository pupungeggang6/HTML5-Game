class Vector {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
}

class Battle {
    turn = 0
    enemyName = '1231233232'
    selected = {
        card: -1,
    }
}

class Level {

}

class Board {
    crystalPool = []
    tile = []

    constructor() {
        
    }
}

class CellElement {
    constructor() {

    }
}

class Obstacle extends CellElement {

}

class Crystal extends CellElement {
    element = ''

    constructor(element) {
        this.element = element
    }
}

class Enemy extends CellElement {
    life = 60
    attack = 20
}

class Player {
    life = 0
    lifeMax = 0
    energy = 0
    energyMax = 0
    attack = 0

    hand = []
    deck = []
    equipment = []
    item = []
    
    constructor() {
        this.life = 60
        this.lifeMax = 60
        this.energy = 3
        this.energyMax = 3
        this.attack = 5
    }
}