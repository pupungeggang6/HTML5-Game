function loopMap() {
    displayMap()
}

function displayMap() {
    drawSceneInit()
}

function mouseUpMap(x, y, button) {
    if (button === 0) {
        if (menu === false) {
            if (state === '') {
                scene = 'Game'
                state = 'Ready'
                gameStart()
            }
        }
    }
}