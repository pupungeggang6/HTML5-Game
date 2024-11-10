function loopReady() {
    displayReady()   
}

function displayReady() {
    drawSceneInit()
    context.fillText(`Select Character`, UI.ready.textTitle[0], UI.ready.textTitle[1])

    for (let i = 0; i < 6; i++) {
        context.strokeRect(UI.ready.buttonCharacter[i][0], UI.ready.buttonCharacter[i][1], UI.ready.buttonCharacter[i][2], UI.ready.buttonCharacter[i][3])
    }

    context.strokeRect(UI.ready.descriptionRect[0], UI.ready.descriptionRect[1], UI.ready.descriptionRect[2], UI.ready.descriptionRect[3])

    context.strokeRect(UI.ready.buttonStart[0], UI.ready.buttonStart[1], UI.ready.buttonStart[2], UI.ready.buttonStart[3])
    context.fillText(`Start`, UI.ready.textStart[0], UI.ready.textStart[1])
}

function mouseUpReady(x, y, button) {
    if (button === 0) {
        if (menu === false) {
            if (state === '') {
                for (let i = 0; i < 6; i++) {
                    if (pointInsideRectArray(x, y, UI.ready.buttonCharacter[i])) {
                        selected.character = i
                    }
                }

                if (pointInsideRectArray(x, y, UI.ready.buttonStart)) {
                    scene = 'Map'
                    state = ''
                    adventureStart()
                }
            }
        }
    }
}