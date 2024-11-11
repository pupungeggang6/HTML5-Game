function gameInit() {
    player = new Player()
    battle = new Battle()
    board = new Board()
}

function adventureStart() {
    field = new Field()
}

function battleStart() {
    board = new Board()
}

function gameTick() {
    board.moveThing()
}

function blockInput(time) {
    inputEnabled = false
    inputStop = time
}

function handleInputEnable() {
    if (inputStop <= 0) {
        inputEnabled = true
    } else {
        inputStop -= delta / 1000
    }
}