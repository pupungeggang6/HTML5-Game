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

    drawGameTitle()
    drawGameField()
    drawGameLower()

    if (state === 'Ready') {
        drawGameReady()
    }

    if (state === 'GameOver') {
        drawGameOver()
    }
}

function mouseUpGame(x, y, button) {
    if (button === 0) {
        if (menu === false) {
            if (state === 'Ready') {
                if (pointInsideRectArray(x, y, UI.game.start.buttonStart)) {
                    state = ''
                }
            } else if (state === 'GameOver') {
                if (pointInsideRectArray(x, y, UI.game.gameOver.buttokOK)) {
                    scene = 'Title'
                    state = ''
                }
            }
        }
    }
}