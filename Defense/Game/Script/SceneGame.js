function loopGame() {
    if (menu === false) {
        if (state === '') {
            gameTick()
        }
    }

    displayGame()
}

function displayGame() {
    drawSceneInit()

    drawGameTitle()
    drawGameField()
    drawGameLower()

    if (state === 'Ready') {
        drawGameReady()
    }

    if (state === 'GameOver') {
        drawGameOver()
    }
}

function mouseUpGame(x, y, button) {
    if (button === 0) {
        if (menu === false) {
            if (state === 'Ready') {
                if (pointInsideRectArray(x, y, UI.game.start.buttonStart)) {
                    state = ''
                }
            } else if (state === '') {
                if (stateClick === '') {
                    if (pointInsideRectArray(x, y, UI.game.lower.buttonGenerator)) {
                        player.upgradeGenerator()
                    }

                    for (let i = 0; i < player.hand.length; i++) {
                        if (pointInsideRect(x, y, UI.game.lower.handStart[0] + UI.game.lower.handInterval[0] * i, UI.game.lower.handStart[1] + UI.game.lower.handInterval[1] * i, UI.game.lower.handSize[0], UI.game.lower.handSize[1])) {
                            stateClick = 'Field'
                            player.selectedCard = i
                        }
                    }
                } else if (stateClick === 'Field') {
                    for (let i = 0; i < field.cell.length; i++) {
                        for (let j = 0; j < field.cell[i].length; j++) {
                            let rect = [field.start.x + UI.field.cellSize[0] * j - 40, field.start.y + UI.field.cellSize[1] * i - 40, UI.field.cellSize[0], UI.field.cellSize[1]]

                            if (pointInsideRectArray(x, y, rect)) {
                                player.playCard(field)
                            }

                            stateClick = ''
                        }
                    }
                }
                
            } else if (state === 'GameOver') {
                if (pointInsideRectArray(x, y, UI.game.gameOver.buttonOK)) {
                    scene = 'Title'
                    state = ''
                }
            }
        }
    }
}