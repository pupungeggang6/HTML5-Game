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
}

function mouseUpGame(x, y, button) {
    if (button === 0) {
        if (menu === false) {
            if (state === 'Start') {
                if (pointInsideRectArray(x, y, UI.game.start.buttonStart)) {
                    state = ''
                }
            }
        }
    }
}

function keyDownGame(key) {

}

function keyUpGame(key) {

}