function gameInit() {
    player = new Player()
}

function gameStart() {
    for (let i = 0; i < data.deck[1]['Contents'].length; i++) {
        let index = data.deck[1]['Contents'][i]
        let tempCard = new Card(data.card[index])
        player.deck.push(tempCard)
    }

    for (let i = 0; i < 10; i++) {
        let tempEnemy = new Enemy()
        enemyList.push(tempEnemy)
    }
}

function gameTick() {
    player.movePlayer()
    player.drawHandle()
    moveEnemy()
}

function moveEnemy() {
    for (enemy of enemyList) {
        enemy.followTarget(player)
    }

    for (enemy1 in enemyList) {
        for (enemy2 in enemyList) {
            if (enemy1 != enemy2) {
                enemyList[enemy1].collideHandle(enemyList[enemy2])
            }
        }
    }
}