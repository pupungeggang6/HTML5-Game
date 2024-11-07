function gameInit() {
    player = new Player()
    field = new Field()
    level = new Level(data.level[1])
    unitEnemyList = []
    unitPlayerList = []
}

function gameReady() {

}

function gameStart() {
    
}

function gameTick() {
    level.handleLevel(field)
    field.enemyReachCheck(player)
    player.generateEnergy()

    for (let e of field.unitEnemy) {
        e.move()
    }
}

function debug() {

}