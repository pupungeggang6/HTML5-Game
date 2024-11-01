function loopTitle() {
    displayTitle()
}

function displayTitle() {
    drawSceneInit()

    context.fillText(`Survival Game`, UI.title.textTitle[0], UI.title.textTitle[1])
    context.strokeRect(UI.title.buttonStart[0], UI.title.buttonStart[1], UI.title.buttonStart[2], UI.title.buttonStart[3])
    context.fillText(`Start Game`, UI.title.textStart[0], UI.title.textStart[1])
    context.strokeRect(UI.title.buttonErase[0], UI.title.buttonErase[1], UI.title.buttonErase[2], UI.title.buttonErase[3])
    context.fillText(`Erase Data`, UI.title.textErase[0], UI.title.textErase[1])
    context.strokeRect(UI.title.buttonTest[0], UI.title.buttonTest[1], UI.title.buttonTest[2], UI.title.buttonTest[3])
    context.fillText(`Test`, UI.title.textTest[0], UI.title.textTest[1])
}

function keyDownTitle(key) {
    
}

function keyUpTitle(key) {

}

function mouseUpTitle(x, y, button) {
    if (menu === false) {
        if (state === '') {
            if (pointInsideRectArray(x, y, UI.title.buttonTest)) {
                scene = 'Game'
                state = 'Start'
                gameStart()
            }
        }
    }
}