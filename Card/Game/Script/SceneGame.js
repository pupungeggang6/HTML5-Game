function loopGame() {
    if (menu === false) {
        if (state === '') {
            detectPointerHand()
        }
    }

    displayGame()
}

function displayGame() {
    drawSceneInit()
    drawField()
    drawHand()
}

function mouseUpGame(x, y, button) {

}