class Vector {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
}

class Circle {
    constructor(x, y, r) {
        this.position = new Vector(x, y)
        this.radius = r
    }
}

class Thing {
    constructor() {
        this.position = new Vector(200, 200)
    }
}

class Camera extends Thing {
    constructor() {
        super()
        this.viewOffset = {
            left: 640,
            top: 640,
        }
    }

    followTarget(target) {
        this.position.x = target.position.x
        this.position.y = target.position.y
    }
}

class Character extends Thing {
    constructor() {
        super()
        this.size = new Vector(0, 0)
        this.speed = 0
        this.collideCircle = new Circle(0, 0, 0)
        
        this.life = 0
        this.lifeMax = 0
        this.attack = 0
    }
}

class Player extends Character {
    constructor() {
        super()
        this.size = new Vector(40, 40)
        this.collideCircle = new Circle(this.position.x, this.position.y, this.size.x / 2)

        this.speed = 320
        this.speedDash = 800
        this.dashTime = 0
        this.dashRecharge = 0
        
        this.attack = 10
        this.life = 100
        this.lifeMax = 100

        this.level = 1
        this.exp = 0

        this.skill = new Skill({'Effect' : [], 'Energy' : 0})
        this.hand = [new EmptyCard(), new EmptyCard(), new EmptyCard(), new EmptyCard()]
        this.handRecharge = [0, 0, 0, 0]
        this.deck = []
    }

    drawHandle() {
        for (let i = 0; i < this.handRecharge.length; i++) {
            if (this.handRecharge[i] <= 0 && this.hand[i].valid === false && this.deck.length > 0) {
                this.hand[i] = this.deck.shift()
            }
        }
    }

    drawCard() {
        if (this.deck.length > 0) {
            for (let i = 0; i < this.hand.length; i++) {
                if (this.hand[i].valid === false) {
                    this.hand[i] = this.deck.shift()
                }
            }
        }
    }

    movePlayer() {
        if (keyboard.left === true) {
            this.position.x -= this.speed * delta / 1000
        }
        if (keyboard.right === true) {
            this.position.x += this.speed * delta / 1000
        }
        if (keyboard.up === true) {
            this.position.y -= this.speed * delta / 1000
        }
        if (keyboard.down === true) {
            this.position.y += this.speed * delta / 1000
        }
    }
}

class Enemy extends Character {
    constructor() {
        super()
        this.position.x = Math.random() * 1280
        this.position.y = Math.random() * 800
        this.size = new Vector(40, 40)
        this.collideCircle = new Circle(this.position.x, this.position.y, this.size.x / 2)

        this.speed = 200
        this.contactThreshold = 10
    }

    followTarget(target) {
        let diff = VectorOP.sub(target.position, this.position)
        let diffNorm = VectorOP.normalize(diff)

        if (VectorOP.size(diff) > this.contactThreshold) {
            this.position.x += diffNorm.x * this.speed * delta / 1000
            this.position.y += diffNorm.y * this.speed * delta / 1000
            this.collideCircle.position.x = this.position.x
            this.collideCircle.position.y = this.position.y
        }
    }

    collideHandle(target) {
        if (Collider.twoCircles(this.collideCircle, target.collideCircle)) {
            let push = VectorOP.sub(this.position, target.position)
            let diffPush = VectorOP.mulScala(VectorOP.normalize(push), this.collideCircle.radius + target.collideCircle.radius)
            this.position.x = target.position.x + diffPush.x
            this.position.y = target.position.y + diffPush.y
            this.collideCircle.position.x = this.position.x
            this.collideCircle.position.y = this.position.y
        }
    }
}

class Projectile extends Thing {

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

class EmptyCard extends Cardlike {
    constructor() {
        super()
        this.valid = false
    }
}

class Card extends Cardlike {
    constructor(properties) {
        super()
        this.valid = true
        this.energy = properties['Energy']
        this.effect = properties['Effect']
    }
}