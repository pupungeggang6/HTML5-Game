class Thing {
    constructor() {
        this.position = {
            x: 0, y: 0
        }
        this.image = new Image()
    }
}

class Player extends Thing {
    constructor() {
        super()
        this.position.x = 200
        this.position.y = 200
        this.image = img.sprite.player
        this.animation = {
            state: 'Idle', time: 0, frame: 0
        }
        this.animationData = {
            'Idle': {'Frame': [[0, 0], [0, 1], [0, 2], [0, 3]], 'Time': 0.25, 'Size': [40, 40]},
        }
    }
}

class Enemy extends Thing {
    
}
