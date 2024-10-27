function handleGameFrame() {
    movePlayer()
    moveEnemy()
}

function movePlayer() {
    if (keyboard.up === true) {
        player.position.y -= player.speed * delta / 1000
    }

    if (keyboard.down === true) {
        player.position.y += player.speed * delta / 1000
    }

    if (keyboard.left === true) {
        player.position.x -= player.speed * delta / 1000
    }

    if (keyboard.right === true) {
        player.position.x += player.speed * delta / 1000
    }
}

function moveEnemy() {
    for (enemy in enemyList) {
        enemyList[enemy].followTarget(player)
    }

    for (enemy in enemyList) {
        for (enemyOther in enemyList) {
            if (enemy != enemyOther) {
                enemyList[enemy].collideAdjust(enemyList[enemyOther])
            }
        }
    }
}
