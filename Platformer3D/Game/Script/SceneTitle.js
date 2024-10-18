function loopTitle() {
    displayTitle()
}

function displayTitle() {
    drawSceneInit()

    context.fillStyle = 'White'
    context.fillRect(0, 0, 1280, 720)
    context.fillStyle = 'Black'
    context.fillText(`3D Platformer`, UI.title.textTitle[0], UI.title.textTitle[1])
    context.strokeRect(UI.title.buttonStart[0], UI.title.buttonStart[1], UI.title.buttonStart[2], UI.title.buttonStart[3])
    context.fillText(`Start Game`, UI.title.textStart[0], UI.title.textStart[1])
}

function mouseUpTitle(x, y, button) {
    
}

function keyDownTitle(key) {
    
}

function keyUpTitle(key) {
    
}
