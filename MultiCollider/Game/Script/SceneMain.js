function loopMain() {
    if (menu === false) {
        if (state === '') {
            handleGameFrame()
        }
    }
    displayMain()
}

function displayMain() {
    drawSceneInit()
    drawThing(player)

    for (enemy in enemyList) {
        drawThing(enemyList[enemy])
    }
}

function keyDownMain(key) {
    if (key === 'w') {
        keyboard.up = true
    }

    if (key === 'a') {
        keyboard.left = true
    }

    if (key === 's') {
        keyboard.down = true
    }

    if (key === 'd') {
        keyboard.right = true
    }

    if (key === 'e') {
        if (menu === false) {
            menu = true
        } else {
            menu = false
        }
    }
}

function keyUpMain(key) {
    if (key === 'w') {
        keyboard.up = false
    }

    if (key === 'a') {
        keyboard.left = false
    }

    if (key === 's') {
        keyboard.down = false
    }

    if (key === 'd') {
        keyboard.right = false
    }
}
