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
        this.speed = 200
        this.speedDash = 800
        this.dashTime = 0
        this.dashRecharge = 0
        this.skill = new Skill()
        this.hand = []
        this.deck = []
        
        this.attack = 10
        this.life = 100
        this.lifeMax = 100
        this.level = 1
        this.exp = 0
    }

    drawCard() {

    }
}

class Enemy extends Thing {
    constructor() {
        super()
        this.speed = 200
        
    }
}

class Skill {
    constructor(properties) {
        this.energy = properties['Energy']
        this.effect = properties['Effect']
    }
}

class Cardlike {
    constructor() {
        this.valid = false
    }
}

class Card extends Cardlike {
    constructor() {
        this.valid = true
    }
}