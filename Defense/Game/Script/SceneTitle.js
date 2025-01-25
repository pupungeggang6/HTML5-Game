function loopTitle() {
    renderTitle()
}

function renderTitle() {
    renderInit()
    context.fillText('Ceramic Defense', UI.title.textTitle[0], UI.title.textTitle[1])
    strokeRect(UI.title.buttonStart)
    context.fillText('Start Game', UI.title.textStart[0], UI.title.textStart[1])
}

function mouseUpTitle(x, y, button) {
    let pos = {x: x, y: y}

    if (button === 0) {
        if (menu === false) {
            if (state === '') {
                if (pointInsideRectUI(pos, UI.title.buttonStart)) {
                    scene = 'CharacterSelect'
                    state = ''
                }
            }
        }
    }
}
