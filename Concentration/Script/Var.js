class Game {
    eventHandler = new EventHandler()
    canvas = new Canvas()

    constructor() {
    }
}

class Canvas {
    constructor() {
        this.canvas = document.getElementById('Screen')
        this.context = this.canvas.getContext('2d')
    }
}

class EventHandler {
    constructor() {

    }

    mouseUp(event, game) {

    }
}