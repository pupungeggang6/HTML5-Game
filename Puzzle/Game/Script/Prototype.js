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
    cellPool = []
    tile = []

    constructor() {
        this.cellPool = [['Crystal', 'Earth'], ['Crystal', 'Water'], ['Crystal', 'Dark']]

        for (let i = 0; i < 7; i++) {
            let temp = []
            for (let j = 0; j < 8; j++) {
                let index = Math.floor(Math.random() * this.cellPool.length)
                if (this.cellPool[index][0] === 'Crystal') {
                    temp.push(new Crystal(this.cellPool[index][1]))
                } else if (this.cellPool[index][0] === 'Obstacle') {
                    temp.push(new Obstacle())
                } else if (this.cellPool[index][0] === 'Enemy') {
                    temp.push(new Enemy())
                }
            }
            this.tile.push(temp)
        }
    }
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
    energy = 0
    effect = []

    constructor() {
        this.energy = 2
        this.effect = []
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