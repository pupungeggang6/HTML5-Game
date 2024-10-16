function loopGame() {
    if (state === '') {
        handleBoardMouse()
    } else if (state === 'AITurn') {
        handleAITimeout()
    }
    displayGame()
}

function displayGame() {
    drawSceneInit()
    
    if (state === '') {
        context.fillText(`Player ${game.turnWho + 1}'s turn. Turn ${game.turnNum}`, UI.game.gameTurnText[0], UI.game.gameTurnText[1])
    } else if (state === 'Win') {
        context.fillText(`Player ${game.winner + 1} wins!`, UI.game.gameTurnText[0], UI.game.gameTurnText[1])
    }
    
    drawBoard()

    if (state === '') {
        drawTempPosition()
    }
    
    drawCurrentNext()
}

function mouseUpGame(x, y, button) {
    if (menu === false) {
        if (state === '') {
            if (game.mode === 'Multi') {
                if (moveValidityCheck(game.currentMove, game.cursor[0], game.cursor[1])) {
                    placeStone(game.currentMove, game.cursor[0], game.cursor[1])
                    if (game.turnWho === 1) {
                        game.turnNum += 1
                    }
                    game.turnWho = 1 - game.turnWho
                    game.currentMove = game.nextMove
                    game.nextMove = generateMove(1 - game.turnWho)
                    if (game.rule === 'Classic') {
                        winCheckClassic()
                    }
                } else {
                    alert('Stones cannot be overlapped.')
                }
            } else if (game.mode === 'Single') {
                if (moveValidityCheck(game.currentMove, game.cursor[0], game.cursor[1])) {
                    placeStone(game.currentMove, game.cursor[0], game.cursor[1])
                    if (game.rule === 'Classic') {
                        if (winCheckClassic() === false) {
                            game.currentMove = game.nextMove
                            game.nextMove = generateMove(0)
                            state = 'AITurn'
                            AITimeout = 0.5
                        }
                    }
                } else {
                    alert('Stones cannot be overlapped.')
                }
            }
        } else if (state === 'Win') {
            scene = 'Title'
            state = ''
        }
    }
}
