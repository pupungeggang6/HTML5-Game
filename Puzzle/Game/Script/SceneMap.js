function loopMap() {
    displayMap()
}

function displayMap() {
    drawSceneInit()
    context.fillText(`Select`, UI.map.textTitle[0], UI.map.textTitle[1])

    if (menu === true) {
        drawMenu()
    }
}

function mouseUpMap(x, y, button) {
    if (button === 0) {
        if (menu === false) {
            if (pointInsideRectArray(x, y, UI.map.buttonMenu)) {
                menu = true
            }
            if (state === '') {
                scene = 'Game'
                state = ''
                battleStart()
            }
        } else if (menu === true) {
            if (pointInsideRectArray(x, y, UI.menu.buttonResume)) {
                menu = false
            } else if (pointInsideRectArray(x, y, UI.menu.buttonExit)) {
                menu = false
                scene = 'Title'
                state = ''
            }
        }
    }
}