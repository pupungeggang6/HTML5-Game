function loopLevelSelect() {
    displaLevelSelect()
}

function displaLevelSelect() {
    drawSceneInit()
}

function mouseUpLevelSelect(x, y, button) {
    if (menu === false) {
        if (state === '') {
            scene = 'Game'
            state = 'Start'
        }
    }
}