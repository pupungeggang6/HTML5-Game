function gameInit() {
    player = new Player()
    field = new Field()
    level = new Level(1)
    gameHandler = new GameHandler()
}

function gameReady() {
    
}

function gameStart() {

}

function gameTick() {
    player.playerTick()
}