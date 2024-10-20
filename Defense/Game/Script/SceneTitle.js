function loopTitle() {
    displayTitle()
}

function displayTitle() {
    drawSceneInit()

    context.fillText(`Defense`, UI.title.textTitle[0], UI.title.textTitle[1])
    context.strokeRect(UI.title.buttonTest[0], UI.title.buttonTest[1], UI.title.buttonTest[2], UI.title.buttonTest[3])
    context.fillText(`Test Game`, UI.title.textTest[0], UI.title.textTest[1])
}

function mouseUpTitle(x, y, button) {
    if (button === 0) {
        if (menu === false) {
            if (state === '') {
                if (pointInsideRectArray(x, y, UI.title.buttonTest)) {
                    scene = 'Game'
                    state = 'Start'
                }
            }
        }
    }
}