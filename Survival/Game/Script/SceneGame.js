function loopGame() {
    displayGame()
}

function displayGame() {
    drawSceneInit()

    if (state === 'Start') {
        drawGameStart()
    }
}

function mouseUpGame(x, y, button) {
    if (menu === false) {
        if (state === 'Start') {
            if (pointInsideRectArray(x, y, UI.game.start.buttonStart)) {
                state = ''
            }
        }
    }
}

function keyDownGame(key) {

}

function keyUpGame(key) {

}