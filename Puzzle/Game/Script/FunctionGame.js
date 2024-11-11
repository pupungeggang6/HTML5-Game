function gameInit() {

}

function adventureStart() {
    player = new Player()
    field = new Field()
}

function battleStart() {
    battle = new Battle()
    board = new Board()
    player.buildDeck()
    player.drawCard()
    player.drawCard()
    player.drawCard()
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