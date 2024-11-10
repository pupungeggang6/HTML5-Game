function gameInit() {
    player = new Player({'Deck': [1, 1, 1, 1, 1, 1]})
    field = new Field()
    level = new Level(data.level[1])
}

function gameReady() {
    player = new Player({'Deck': [1, 1, 1, 1, 1, 1]})
    field = new Field()
    level = new Level(data.level[1])
}

function gameStart() {
    
}

function gameTick() {
    level.handleLevel(field)
    field.enemyReachCheck(player)
    player.generateEnergy()
    player.drawCardHandle()

    for (let e of field.unitEnemy) {
        e.move()
    }
}

function debug() {

}