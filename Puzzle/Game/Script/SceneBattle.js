function loopBattle() {
    if (menu === false) {
        if (state === '') {
            gameTick()
            handleInputEnable()
        }
    }

    displayBattle()
}

function displayBattle() {
    drawSceneInit()
    drawBattleTitle()
    drawBattleBoard()
    drawBattleLower()

    if (menu === true) {
        drawMenu()
    }
}

function mouseUpBattle(x, y, button) {
    if (button === 0) {
        if (menu === false) {
            if (pointInsideRectArray(x, y, UI.battle.buttonMenu)) {
                menu = true
            }

            if (state === '') {
                if (inputEnabled === true) {
                    if (stateClick === '') {
                        
                    } else if (stateClick === 'Board') {

                    }
                }
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