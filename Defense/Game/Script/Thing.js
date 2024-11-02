class Player {
    life = 20
    energy = 8
    energyMax = 8
    energyGen = 1
    generatorLevel = 1
    generatorEnergy = [0, 4, 5, 6, 8, 999]
    drawRecharge = 4
    
    hand = []
    deck = [new Card(1), new Card(1), new Card(1), new Card(1)]

    constructor() {

    }

    playerTick() {
        this.autoDraw()
        this.autoEnergyGen()
    }

    autoEnergyGen() {
        if (this.energy + this.energyGen * delta / 1000 > this.energyMax) {
            this.energy = this.energyMax
        } else {
            this.energy += this.energyGen * delta / 1000
        }
    }

    autoDraw() {
        if (this.drawRecharge < 0) {
            if (this.deck.length > 0) {
                if (this.hand.length < 8) {
                    this.hand.push(this.deck.shift())
                    this.drawRecharge = 4
                }
            }
        } else {
            this.drawRecharge -= delta / 1000
        }
    }

    generatorLevelUp() {
        if (this.generatorLevel < 5) {
            if (this.energy > this.generatorEnergy[this.generatorLevel]) {
                this.generatorLevel += 1
                this.energyMax += 2
                this.energyGen += 0.2
            } 
        }
    }

    drawCard() {
        if (this.deck.length > 0) {
            if (this.hand.length < 8) {
                this.hand.push(this.deck.shift())
            }
        }
    }
}

class Vector {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
}

class Character {
    position = new Vector(0, 0)
    life = 0
    lifeMax = 0
    attack = 0
    attackID = 0

    constructor() {
        
    }
}

class UnitPlayer extends Character {
    constructor(properties) {
        super()
        this.life = properties['Life']
        this.lifeMax = properties['Life']
    }
}

class Cardlike {
    constructor() {

    }
}

class Card extends Cardlike {
    energy = 0
    effect = []
    
    constructor(ID) {
        super()

        this.energy = data.card[ID]['Energy']
        this.effect = JSON.parse(JSON.stringify(data.card[ID]['Effect']))
    }
}

class Wave {
    time = 0
    enemy = []
    constructor(time, enemy) {
        this.time = time
        this.enemy = enemy
    }
}

class Level {
    wave = []
    constructor(l) {
        for (let i = 0; i < data.level[l].length; i++) {
            this.wave.push(new Wave(data.level[l][i]['Time'], data.level[l][i]['Enemy']))
        }
    }
}

class Game {
    level = 0
    time = 0
    constructor() {
        this.time = 0
        this.level = 1
    }
}

class Field {
    spawnList = []
    unitList = []
    emenyList = []
    projectileList = []

    constructor() {
        this.spawnList = [[760, 40], [760, 120], [760, 200]]
        this.unitList = []
        this.enemyList = []
        this.projectileList = []
    }
}