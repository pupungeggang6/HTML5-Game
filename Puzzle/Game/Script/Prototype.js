class Vector {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
}

class Field {
    cell = []
    pool = ['Battle', 'Shop', 'Mystery']

    constructor() {
        this.cell = []

        for (let i = 0; i < 6; i++) {
            let temp = []
            if (i % 3 === 0) {
                temp.push('Battle')
                temp.push('Battle')
                temp.push('Battle')
            } else if (i % 3 === 1) {
                for (let j = 0; j < 3; j++) {
                    let index = Math.floor(Math.random() * 3)
                    temp.push(this.pool[index])
                }
            } else {
                temp.push('Battle')
                temp.push('Shop')
                temp.push('Mystery')
            }

            this.cell.push(temp)
        }

        this.cell.push(['None', 'Boss', 'None'])
    }
}

class Battle {
    turn = 0
    enemyName = 'Enemy 1'
    selected = {
        card: -1,
    }
}

class Level {

}

class Board {
    start = new Vector(40, 80)
    size = new Vector(640, 560)
    cellPool = []
    crystalPool = []
    cell = []
    thing = []
    connectedRect = []

    constructor() {
        this.cellPool = [['Crystal', 'Earth'], ['Crystal', 'Water'], ['Crystal', 'Dark']]
        this.crystalPool = ['Earth', 'Water', 'Dark']

        for (let i = 0; i < 7; i++) {
            let temp = []
            for (let j = 0; j < 8; j++) {
                let index = Math.floor(Math.random() * this.cellPool.length)
                if (this.cellPool[index][0] === 'Crystal') {
                    temp.push(new Crystal(this.cellPool[index][1]))
                    this.thing.push(new ThingCrystal({'Element': this.cellPool[index][1]}, new Vector(this.start.x + j * 80, this.start.y + i * 80), i, j))
                } else if (this.cellPool[index][0] === 'Obstacle') {
                    temp.push(new Obstacle())
                } else if (this.cellPool[index][0] === 'Enemy') {
                    temp.push(new Enemy())
                }
            }
            this.cell.push(temp)
        }
    }

    findConnectedRect(row, col) {
        if (this.cell.type != 'Crystal') {
            return []
        } else {
            
        }
    }

    moveThing() {
        for (let t of this.thing) {
            t.move()
        }
    }

    removeThing(index) {
        let removed = this.thing.splice(index, 1)[0]
        let rrow = removed.row
        let rcol = removed.col
        for (let i = 0; i < this.thing.length; i++) {
            if (this.thing[i].row < rrow && this.thing[i].col === rcol) {
                this.thing[i].moveMode = true
                this.thing[i].destination.y += 80
                this.thing[i].row += 1
            }
        }

        for (let i = rrow - 1; i >= 0; i--) {
            this.cell[i + 1][rcol] = this.cell[i][rcol]
        }

        let indexCrystal = Math.floor(Math.random() * this.cellPool.length)
        this.cell[0][rcol] = new Crystal(this.crystalPool[indexCrystal])
        let tempThing = new ThingCrystal({'Element': this.crystalPool[indexCrystal]}, new Vector(this.start.x + rcol * 80, this.start.y - 80), 0, rcol)
        tempThing.destination.y = this.start.y
        tempThing.moveMode = true
        this.thing.push(tempThing)
    }
}

class Thing {
    speed = 400
    position = new Vector(0, 0)
    destination = new Vector(0, 0)
    row = 0
    col = 0
    moveMode = false

    constructor() {

    }

    move() {
        if (this.moveMode === true) {
            let diff = VectorOP.sub(this.destination, this.position)
            let diffN = VectorOP.normalize(diff)
            let diffS = VectorOP.size(diff)

            if (diffS > 10) {
                this.position.x += diffN.x * this.speed * delta / 1000
                this.position.y += diffN.y * this.speed * delta / 1000
            } else {
                this.position.x = this.destination.x
                this.position.y = this.destination.y
                this.moveMode = false
            }
        }
    }
}

class ThingCrystal extends Thing {
    type = ''
    element = ''

    constructor(properties, position, row, col) {
        super()
        this.type = 'Crystal'
        this.element = properties['Element']
        this.position.x = position.x
        this.position.y = position.y
        this.destination.x = position.x
        this.destination.y = position.y
        this.row = row
        this.col = col
    }
}

class ThingObstacle extends Thing {

}

class ThingEnemy extends Thing {

}

class CellElement {
    constructor() {

    }
}

class Obstacle extends CellElement {
    type = 'Obstacle'

    constructor() {
        super()
    }
}

class Crystal extends CellElement {
    type = 'Crystal'
    element = ''

    constructor(element) {
        super()
        this.type = 'Crystal'
        this.element = element
    }
}

class EmptyCell extends CellElement {
    type = 'Empty'

    constructor() {
        super()
    }
}

class Enemy extends CellElement {
    life = 60
    attack = 20
}

class Card {
    ID = 0
    energy = 0
    effect = []

    constructor(properties) {
        this.ID = properties['ID']
        this.energy = properties['Energy']
        this.effect = properties['Effect']
    }
}

class Player {
    life = 0
    lifeMax = 0
    energy = 0
    energyMax = 0
    attack = 0

    hand = []
    deck = []
    discarded = []
    deckOriginal = [1, 1, 1, 1, 1, 1]
    equipment = []
    item = []
    
    constructor() {
        this.life = 60
        this.lifeMax = 60
        this.energy = 4
        this.energyMax = 4
        this.attack = 5
    }

    buildDeck() {
        this.deck = []
        for (let i = 0; i < this.deckOriginal.length; i++) {
            this.deck.push(new Card(data.card[this.deckOriginal[i]]))
        }
    }

    deckShuffle() {

    }
    
    drawCard() {
        if (this.deck.length > 0) {
            if (this.hand.length < 5) {
                this.hand.push(this.deck.shift())
            }
        } else {
            this.deck = this.discarded
            this.discarded = []
            if (this.deck.length > 0) {
                if (this.hand.length < 5) {
                    this.hand.push(this.deck.shift())
                }
            }
        }
    }
}