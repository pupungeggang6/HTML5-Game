class Vector {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
}

class Player {
    life = 20
    lifeMax = 20
    energy = 8
    energyMax = 8
    generatorLevel = 1
    hand = []
    deck = []

    constructor() {

    }
}

class Field {
    tile = []
    spawn = []

    constructor() {

    }
}

class Level {
    time = 0
    wave = []

    constructor(level) {
        this.wave = []
        for (let w of level['Wave']) {
            console.log(w)
        }
    }
}

class Wave {
    time = 0
    unit = []

    constructor(time, unit) {
        this.time = time
        this.unit = unit
    }
}

class Unit {
    attack = 0
    attackType = 0
    life = 0
    lifeMax = 0

    constructor() {
        
    }
}

class UnitPlayer extends Unit {

}

class UnitEnemy extends Unit {
    
}

class Card {
    type = 'Unit'
    name = 'Name'
    element = ''

    attack = 0
    attackType = 0
    energy = 0
    life = 0
    effect = []

    constructor(property) {
        this.type = property['Type']
        this.energy = property['Energy']
    }
}