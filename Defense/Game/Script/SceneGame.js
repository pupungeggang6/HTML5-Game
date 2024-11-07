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

    drawGameField()
    drawLower()

    if (state === 'Ready') {
        drawGameReady()
    }
}

function mouseUpGame(x, y, button) {
    if (button === 0) {
        if (menu === false) {
            if (state === 'Ready') {
                if (pointInsideRectArray(x, y, UI.game.start.buttonStart)) {
                    state = ''
                }
            }
        }
    }
}