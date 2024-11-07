function loopGame() {
    displayGame()
}

function displayGame() {
    drawSceneInit()

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