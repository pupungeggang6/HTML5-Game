class Battle {
    unitList = []

    constructor() {
        this.unitList = []
    }

    spawn() {
        let x = Math.random() * 1280
        let y = Math.random() * 800
        this.unitList.push(new Unit(x, y, 40, 40))
    }

    render() {
        for (let i = 0; i < this.unitList.length; i++) {
            this.unitList[i].render()
        }
    }
}

class Player {
    constructor() {
    }
}

class Unit {
    canvas = null
    context = null
    size = null
    position = null

    constructor(x, y, w, h) {
        this.position = new Vector2(x, y)
        this.size = new Vector2(w, h)
        this.canvas = document.createElement('canvas')
        this.context = this.canvas.getContext('2d')
        this.canvas.width = this.size.x
        this.canvas.height = this.size.y
    }

    render() {
        this.context.fillRect(0, 0, this.size.x, this.size.y)
        context.drawImage(this.canvas, this.position.x - this.size.x / 2, this.position.y - this.size.y / 2)
    }
}

class Tower extends Unit {

}
