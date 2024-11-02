function loopGame() {
    if (menu === false) {
        if (state === '') {
            gameTick()
        }
    }
    displayGame()
}

function displayGame() {
    drawSceneInit()

    drawField()
    drawLower()

    if (state === 'Start') {
        drawGameStart()
    }

    if (menu === true) {
        drawMenu()
    }

    context.strokeRect(UI.game.buttonMenu[0], UI.game.buttonMenu[1], UI.game.buttonMenu[2], UI.game.buttonMenu[3])
}

function mouseUpGame(x, y, button) {
    if (button === 0) {
        if (menu === false) {
            if (pointInsideRectArray(x, y, UI.game.buttonMenu)) {
                menu = true
            }
            if (state === 'Start') {
                if (pointInsideRectArray(x, y, UI.game.start.buttonStart)) {
                    state = ''
                }
            }
        } else if (menu === true) {
            if (pointInsideRectArray(x, y, UI.menu.buttonResume)) {
                menu = false
            } else if (pointInsideRectArray(x, y, UI.menu.buttonExit)) {
                menu = false
                scene = 'Title'
                state = ''
            }
        }
    }
}