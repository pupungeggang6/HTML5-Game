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

}