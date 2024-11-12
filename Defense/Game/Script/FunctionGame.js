function gameInit() {
    player = new Player({'Deck': [1, 1, 1, 1, 1, 1]})
    field = new Field()
    level = new Level(data.level[1])
}

function adventureStart() {
    player = new Player({'Deck': [1, 1, 1, 1, 1, 1]})
    field = new Field()
    level = new Level(data.level[1])
}

function gameStart() {
    player.drawCard()
    player.drawCard()
    player.drawCard()
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