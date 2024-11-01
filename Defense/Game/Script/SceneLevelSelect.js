function loopLevelSelect() {
    displaLevelSelect()
}

function displaLevelSelect() {
    drawSceneInit()
}

function mouseUpLevelSelect(x, y, button) {
    if (button === 0) {
        if (menu === false) {
            if (state === '') {
                scene = 'Game'
                state = 'Start'
            }
        }
    }
}