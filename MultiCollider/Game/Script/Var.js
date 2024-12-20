let canvas
let context

let gameFrame
let gameFrameCurrent
let gameFramePrevious
let delta

let scene = 'Title'
let state = ''
let menu = false

let keyboard = {
    left: false,
    right: false,
    up: false,
    down: false,
}

let player
let enemyList = []

class Character {
    constructor() {
        this.position = {
            x: 200, y: 200
        }
        this.size = 20
        this.speed = 200
    }
}

class Player extends Character {
    constructor() {
        super()
        this.type = 'Player'
        this.speed = 320
    }
}

class Enemy extends Character {
    constructor() {
        super()
        this.position = {
            x: Math.random() * 1280, y: Math.random() * 720
        }
        this.direction = {
            x: 0, y: 0,
        }
        this.type = 'Enemy'
    }

    followTarget(target) {
        let diff = {
            x: target.position.x - this.position.x,
            y: target.position.y - this.position.y
        }

        if (vectorSize(diff) > 10) {
            let diffNormalized = vectorNormalize(diff)
            this.position.x += diffNormalized.x * this.speed * delta / 1000
            this.position.y += diffNormalized.y * this.speed * delta / 1000
        }
    }

    collideAdjust(target) {
        let distance = distanceTwoPoint(this.position.x, this.position.y, target.position.x, target.position.y)
        let sizeSum = this.size + target.size
        if (distance < sizeSum) {
            let directionVector = vectorNormalize({
                x: this.position.x - target.position.x, y: this.position.y - target.position.y
            })
            this.position.x = target.position.x + directionVector.x * sizeSum
            this.position.y = target.position.y + directionVector.y * sizeSum
        }
    }
}

let field = {
    
}
