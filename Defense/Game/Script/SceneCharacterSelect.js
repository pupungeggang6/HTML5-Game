function loopCharacterSelect() {
    displayCharacterSelect()
}

function displayCharacterSelect() {
    drawSceneInit()

    context.strokeRect(UI.characterSelect.buttonBack[0], UI.characterSelect.buttonBack[1], UI.characterSelect.buttonBack[2], UI.characterSelect.buttonBack[3])
    context.fillText(`Character Select`, UI.characterSelect.textTitle[0], UI.characterSelect.textTitle[1])

    for (let i = 0; i < 6; i++) {
        context.strokeRect(UI.characterSelect.buttonCharacter[i][0], UI.characterSelect.buttonCharacter[i][1], UI.characterSelect.buttonCharacter[i][2], UI.characterSelect.buttonCharacter[i][3])
    }

    context.strokeRect(UI.characterSelect.buttonStart[0], UI.characterSelect.buttonStart[1], UI.characterSelect.buttonStart[2], UI.characterSelect.buttonStart[3])
    context.fillText(`Start`, UI.characterSelect.textStart[0], UI.characterSelect.textStart[1])
}

function mouseUpCharacterSelect(x, y, button) {
    if (button === 0) {
        if (menu === false) {
            if (state === '') {
                if (pointInsideRectArray(x, y, UI.characterSelect.buttonStart)) {
                    scene = 'Map'
                    state = ''
                    gameReady()
                }
            }
        }
    }
}