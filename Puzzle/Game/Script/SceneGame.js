function loopGame() {
    displayGame()
}

function displayGame() {
    drawSceneInit()
    drawBattleTitle()
    drawBattleBoard()
    drawBattleLower()

    if (menu === true) {
        drawMenu()
    }
}

function mouseUpGame(x, y, button) {
    if (button === 0) {
        if (menu === false) {
            if (pointInsideRectArray(x, y, UI.battle.buttonMenu)) {
                menu = true
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