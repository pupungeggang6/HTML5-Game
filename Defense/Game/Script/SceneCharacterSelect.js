function loopCharacterSelect() {
    renderCharacterSelect()
}

function renderCharacterSelect() {
    renderInit()

    strokeRect(UI.characterSelect.buttonBack)
    strokeRect(UI.characterSelect.buttonStart)
    context.fillText(`Start`, UI.characterSelect.textStart[0], UI.characterSelect.textStart[1])
}

function mouseUpCharacterSelect(x, y, button) {
    let pos = {x: x, y: y}

    if (button === 0) {
        if (menu === false) {
            if (state === '') {
                if (pointInsideRectUI(pos, UI.characterSelect.buttonStart)) {
                    scene = 'Battle'
                    state = ''
                }
            }
        }
    }
}
