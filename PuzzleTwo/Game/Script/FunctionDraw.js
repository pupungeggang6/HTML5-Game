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
            context.strokeRect(UI.gameBoardStart[0] + UI.gameBoardInterval[0] * j, UI.gameBoardStart[1] + UI.gameBoardInterval[1] * i, UI.gameBoardCellSize[0], UI.gameBoardCellSize[1])
        }
    }

    for (let i = 0; i < 15; i++) {
        for (let j = 0; j < 15; j++) {
            if (game.board[i][j] === 1) {
                context.drawImage(img.black, UI.gameBoardStoneStart[0] + UI.gameBoardInterval[0] * j, UI.gameBoardStoneStart[1] + UI.gameBoardInterval[1] * i)
            } else if (game.board[i][j] === 2) {
                context.drawImage(img.white, UI.gameBoardStoneStart[0] + UI.gameBoardInterval[0] * j, UI.gameBoardStoneStart[1] + UI.gameBoardInterval[1] * i)
            }
        }
    }

    context.globalAlpha = 0.5
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            let row = game.cursor[0] + i - 1
            let column = game.cursor[1] + j - 1
            if (row >= 0 && row < 15 && column >= 0 && column < 15) {
                if (game.currentMove[i][j] === 1) {
                    context.drawImage(img.black, UI.gameBoardStoneStart[0] + UI.gameBoardInterval[0] * column, UI.gameBoardStoneStart[1] + UI.gameBoardInterval[1] * row)
                } else if (game.currentMove[i][j] === 2) {
                    context.drawImage(img.white, UI.gameBoardStoneStart[0] + UI.gameBoardInterval[0] * column, UI.gameBoardStoneStart[1] + UI.gameBoardInterval[1] * row)
                }
            }
        }
    }
    context.globalAlpha = 1.0
}

function drawCurrentNext() {
    context.fillText('Current', UI.currentText[0], UI.currentText[1])
    context.strokeRect(UI.currentBox[0], UI.currentBox[1], UI.currentBox[2], UI.currentBox[3])

    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
            context.strokeRect(UI.currentMoveStart[0] + UI.currentMoveInterval[0] * j, UI.currentMoveStart[1] + UI.currentMoveInterval[1] * i, UI.currentMoveCellSize[0], UI.currentMoveCellSize[1])
        }
    }

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (game.currentMove[i][j] === 1) {
                context.drawImage(img.black, UI.currentMoveStoneStart[0] + UI.currentMoveInterval[0] * j, UI.currentMoveStoneStart[1] + UI.currentMoveInterval[1] * i)
            } else if (game.currentMove[i][j] === 2) {
                context.drawImage(img.white, UI.currentMoveStoneStart[0] + UI.currentMoveInterval[0] * j, UI.currentMoveStoneStart[1] + UI.currentMoveInterval[1] * i)
            }
        }
    }

    context.fillText('Next', UI.nextText[0], UI.nextText[1])
    context.strokeRect(UI.nextBox[0], UI.nextBox[1], UI.nextBox[2], UI.nextBox[3])

    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
            context.strokeRect(UI.nextMoveStart[0] + UI.nextMoveInterval[0] * j, UI.nextMoveStart[1] + UI.nextMoveInterval[1] * i, UI.nextMoveCellSize[0], UI.nextMoveCellSize[1])
        }
    }

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (game.nextMove[i][j] === 1) {
                context.drawImage(img.black, UI.nextMoveStoneStart[0] + UI.nextMoveInterval[0] * j, UI.nextMoveStoneStart[1] + UI.nextMoveInterval[1] * i)
            } else if (game.nextMove[i][j] === 2) {
                context.drawImage(img.white, UI.nextMoveStoneStart[0] + UI.nextMoveInterval[0] * j, UI.nextMoveStoneStart[1] + UI.nextMoveInterval[1] * i)
            }
        }
    }
}
