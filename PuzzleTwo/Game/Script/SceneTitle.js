function loopTitle() {
    displayTitle()
}

function displayTitle() {
    drawSceneInit()

    context.fillText('Strange 5-in-a-row', UI.title.textTitle[0], UI.title.textTitle[1])
    context.strokeRect(UI.title.buttonStartMulti[0], UI.title.buttonStartMulti[1], UI.title.buttonStartMulti[2], UI.title.buttonStartMulti[3])
    context.fillText('Two Players', UI.title.textStartMulti[0], UI.title.textStartMulti[1])
    context.strokeRect(UI.title.buttonStartSingle[0], UI.title.buttonStartSingle[1], UI.title.buttonStartSingle[2], UI.title.buttonStartSingle[3])
    context.fillText('One Player (vs AI)', UI.title.textStartSingle[0], UI.title.textStartSingle[1])
}

function mouseUpTitle(x, y, button) {
    if (button === 0) {
        if (menu === false) {
            if (state === '') {
                if (pointInsideRectArray(x, y, UI.title.buttonStartMulti)) {
                    scene = 'Game'
                    state = ''
                    game.mode = 'Multi'
                    gameInit()
                } else if (pointInsideRectArray(x, y, UI.title.buttonStartSingle)) {
                    scene = 'Game'
                    state = ''
                    game.mode = 'Single'
                    gameInit()
                }
            }
        }
    }
}
