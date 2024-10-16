function drawSceneInit() {
    context.font = '32px Opensans'
    context.textAlign = 'left'
    context.textBaseline = 'top'
    context.lineWidth = 2
    context.fillStyle = 'White'
    context.strokeStyle = 'Black'
    context.clearRect(0, 0, 1280, 720)
    context.fillRect(0, 0, 1280, 720)
    context.fillStyle = 'Black'
}

function drawBoard() {
    for (let i = 0; i < 14; i++) {
        for (let j = 0; j < 14; j++) {
            context.strokeRect(UI.game.gameBoardStart[0] + UI.game.gameBoardInterval[0] * j, UI.game.gameBoardStart[1] + UI.game.gameBoardInterval[1] * i, UI.game.gameBoardCellSize[0], UI.game.gameBoardCellSize[1])
        }
    }

    for (let i = 0; i < 15; i++) {
        for (let j = 0; j < 15; j++) {
            if (game.board[i][j] === 1) {
                context.drawImage(img.black, UI.game.gameBoardStoneStart[0] + UI.game.gameBoardInterval[0] * j, UI.game.gameBoardStoneStart[1] + UI.game.gameBoardInterval[1] * i)
            } else if (game.board[i][j] === 2) {
                context.drawImage(img.white, UI.game.gameBoardStoneStart[0] + UI.game.gameBoardInterval[0] * j, UI.game.gameBoardStoneStart[1] + UI.game.gameBoardInterval[1] * i)
            }
        }
    }
}

function drawTempPosition() {
    context.globalAlpha = 0.5
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            let row = game.cursor[0] + i - 1
            let column = game.cursor[1] + j - 1
            if (row >= 0 && row < 15 && column >= 0 && column < 15) {
                if (game.currentMove[i][j] === 1 && game.board[row][column] === 0) {
                    context.drawImage(img.black, UI.game.gameBoardStoneStart[0] + UI.game.gameBoardInterval[0] * column, UI.game.gameBoardStoneStart[1] + UI.game.gameBoardInterval[1] * row)
                } else if (game.currentMove[i][j] === 2 && game.board[row][column] === 0) {
                    context.drawImage(img.white, UI.game.gameBoardStoneStart[0] + UI.game.gameBoardInterval[0] * column, UI.game.gameBoardStoneStart[1] + UI.game.gameBoardInterval[1] * row)
                }
            }
        }
    }
    context.globalAlpha = 1.0
}

function drawCurrentNext() {
    context.fillText('Current', UI.game.currentText[0], UI.game.currentText[1])
    context.strokeRect(UI.game.currentBox[0], UI.game.currentBox[1], UI.game.currentBox[2], UI.game.currentBox[3])

    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
            context.strokeRect(UI.game.currentMoveStart[0] + UI.game.currentMoveInterval[0] * j, UI.game.currentMoveStart[1] + UI.game.currentMoveInterval[1] * i, UI.game.currentMoveCellSize[0], UI.game.currentMoveCellSize[1])
        }
    }

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (game.currentMove[i][j] === 1) {
                context.drawImage(img.black, UI.game.currentMoveStoneStart[0] + UI.game.currentMoveInterval[0] * j, UI.game.currentMoveStoneStart[1] + UI.game.currentMoveInterval[1] * i)
            } else if (game.currentMove[i][j] === 2) {
                context.drawImage(img.white, UI.game.currentMoveStoneStart[0] + UI.game.currentMoveInterval[0] * j, UI.game.currentMoveStoneStart[1] + UI.game.currentMoveInterval[1] * i)
            }
        }
    }

    context.fillText('Next', UI.game.nextText[0], UI.game.nextText[1])
    context.strokeRect(UI.game.nextBox[0], UI.game.nextBox[1], UI.game.nextBox[2], UI.game.nextBox[3])

    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
            context.strokeRect(UI.game.nextMoveStart[0] + UI.game.nextMoveInterval[0] * j, UI.game.nextMoveStart[1] + UI.game.nextMoveInterval[1] * i, UI.game.nextMoveCellSize[0], UI.game.nextMoveCellSize[1])
        }
    }

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (game.nextMove[i][j] === 1) {
                context.drawImage(img.black, UI.game.nextMoveStoneStart[0] + UI.game.nextMoveInterval[0] * j, UI.game.nextMoveStoneStart[1] + UI.game.nextMoveInterval[1] * i)
            } else if (game.nextMove[i][j] === 2) {
                context.drawImage(img.white, UI.game.nextMoveStoneStart[0] + UI.game.nextMoveInterval[0] * j, UI.game.nextMoveStoneStart[1] + UI.game.nextMoveInterval[1] * i)
            }
        }
    }
}
