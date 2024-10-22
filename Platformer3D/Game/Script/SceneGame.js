let a = 0

function loopGame() {
    a += 0.01
    displayGame()
}

function displayGame() {
    drawSceneUIInit()
    drawSceneGLInit()
    drawObject({translate : [0.5, 0, 0], rotate : [0, 0, 0], scale : [1, 1, 1]}, modeling.player, null, false, true)
}

function mouseUpGame(x, y, button) {
    
}

function keyDownGame(key) {
    
}

function keyUpGame(key) {
    
}
