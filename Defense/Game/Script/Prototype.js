class Vector {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
}

class Player {
    life = 999
    energy = 3
    energyMax = 6
    energyGen = 1
    generatorUpgradeEnergy = 4
    generatorLevel = 1
    hand = []
    deck = []
    drawRecharge = 4
    drawRechargeMax = 4
    selectedCard = -1

    constructor(properties) {
        this.life = 999
        this.energy = 3
        this.energyMax = 6
        this.energyGen = 1
        this.generatorUpgradeEnergy = 4
        this.generatorLevel = 1
        
        this.deck = []
        for (let i = 0; i < properties['Deck'].length; i++) {
            this.deck.push(new Card(data.card[properties['Deck'][i]]))
        }
    }

    upgradeGenerator() {
        if (this.generatorLevel < 5) {
            if (this.energy > this.generatorUpgradeEnergy) {
                this.generatorLevel += 1
                this.energy -= this.generatorUpgradeEnergy
                this.energyMax += 2
                this.energyGen += 0.15
                this.generatorUpgradeEnergy += 2
            }
        }
    }

    generateEnergy() {
        if (this.energy + this.energyGen * delta / 1000 > this.energyMax) {
            this.energy = this.energyMax
        } else {
            this.energy += this.energyGen * delta / 1000
        }
    }

    drawCardHandle() {
        if (this.drawRecharge <= 0) {
            this.drawRecharge = this.drawRechargeMax
            this.drawCard()
        } else {
            this.drawRecharge -= delta / 1000
        }
    }

    drawCard() {
        if (this.deck.length > 0) {
            if (this.hand.length < 8) {
                this.hand.push(this.deck.shift())
            }
        }
    }

    playCard(field) {

    }
}

class Field {
    name = 'Plain'
    start = new Vector(280, 280)
    row = 3
    col = 10
    cell = []
    spawn = []
    endPoint = []
    unitPlayer = []
    unitEnemy = []

    constructor() {
        for (let i = 0; i < this.row; i++) {
            let temp = []
            for (let j = 0; j < this.col; j++) {
                if (j > 0 && j < this.col - 1) {
                    temp.push(0)
                } else {
                    temp.push(1)
                }
            }
            this.cell.push(temp)
        }

        for (let i = 0; i < 3; i++) {
            this.endPoint.push(new Vector(this.start.x, this.start.y + 80 * i))
            this.spawn.push(new Vector(this.start.x + (this.col - 1) * 80, this.start.y + 80 * i))
        }
    }

    summonPlayerUnit(unit, row, col) {
        if (this.cell[row][col] === 0) {
            this.cell[row][col] = 1
        }
    }

    summonEnemyUnit(unit) {
        let index = Math.floor(Math.random() * this.spawn.length)
        unit.position = new Vector(this.spawn[index].x, this.spawn[index].y)
        unit.destination = new Vector(this.endPoint[index].x, this.endPoint[index].y)
        this.unitEnemy.push(unit)
    }

    enemyReachCheck(player) {
        for (let i = this.unitEnemy.length - 1; i >= 0; i--) {
            let diff = new Vector(this.unitEnemy[i].destination.x - this.unitEnemy[i].position.x, this.unitEnemy[i].destination.y - this.unitEnemy[i].position.y)
            if (VectorOP.size(diff) <= 10) {
                this.unitEnemy.splice(i, 1)
                player.life -= 1

                if (player.life < 1) {
                    state = 'GameOver'
                }
            }
        }
    }
}

class Level {
    time = 0
    wave = []

    constructor(level) {
        this.wave = []
        for (let w of level['Wave']) {
            this.wave.push(w)
        }
    }

    handleLevel(field) {
        this.time += delta / 1000

        for (let i = this.wave.length - 1; i >= 0; i--) {
            if (this.time > this.wave[i][0]) {
                for (let j of this.wave[i][1]) {
                    field.summonEnemyUnit(new UnitEnemy())
                }
                this.wave.splice(i, 1)
            }
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
    effect = []
    position = new Vector(0, 0)

    constructor() {
        
    }
}

class UnitPlayer extends Unit {

}

class UnitEnemy extends Unit {
    speed = 200
    destination = new Vector(0, 0)

    constructor() {
        super()
        this.life = 60
        this.lifeMax = 60
        this.attack = 3
        this.attackType = 1
        this.speed = 200
    }

    move() {
        let diff = new Vector(this.destination.x - this.position.x, this.destination.y - this.position.y)
        let direction = VectorOP.normalize(diff)

        this.position.x += direction.x * this.speed * delta / 1000
        this.position.y += direction.y * this.speed * delta / 1000
    }
}

class Card {
    type = 'Unit'
    name = 'Name'
    ID = 0
    element = ''
    attack = 0
    energy = 0
    life = 0
    weapon = 0
    effect = []

    constructor(property) {
        this.ID = property['ID']
        this.type = property['Type']
        this.element = property['Element']
        this.energy = property['Energy']
        this.life = property['Life']
        this.energy = property['Energy']
        this.weapon = property['Weapon']
        this.effect = property['Effect']
    }
}