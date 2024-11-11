function gameInit() {

}

function adventureStart() {
    player = new Player()
    field = new Field()
}

function battleStart() {
    player.buildDeck()
    battle = new Battle()
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