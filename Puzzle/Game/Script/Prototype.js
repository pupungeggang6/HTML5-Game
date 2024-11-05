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

class Player {
    life = 0
    lifeMax = 0
    energy = 0
    energyMax = 0

    hand = []
    deck = []
    equipment = []
    item = []
    
    constructor() {
        this.life = 60
        this.lifeMax = 60
        this.energy = 3
        this.energyMax = 3
    }
}