function gameInit() {
    clearBoard()
    game.turnWho = 0
    game.turnNum = 1
    game.currentMove = generateMove(0)
    game.nextMove = generateMove(1)
}

function clearBoard() {
    game.board = []
    for (let i = 0; i < 15; i++) {
        let temp = []
        for (let j = 0; j < 15; j++) {
            temp.push(0)
        }
        game.board.push(temp)
    }
}

function handleBoardMouse() {
    for (let i = 0; i < 15; i++) {
        for (let j = 0; j < 15; j++) {
            if (pointInsideRect(mouse[0], mouse[1], UI.game.gameBoardStoneStart[0] + UI.game.gameBoardInterval[0] * j, UI.game.gameBoardStoneStart[1] + UI.game.gameBoardInterval[1] * i, UI.game.gameBoardCellSize[0], UI.game.gameBoardCellSize[1])) {
                game.cursor[0] = i
                game.cursor[1] = j
            }
        }
    }
}

function generateMove(turnWho) {
    let shape = JSON.parse(JSON.stringify(dataMoveShape[Math.floor(Math.random() * dataMoveShape.length)]))
    let move = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
    let index = Math.floor(Math.random() * 3)
    
    for (let i = 0; i < shape.length; i++) {
        let row = Math.floor(shape[i] / 3)
        let col = shape[i] - row * 3
        if (turnWho === 0) {
            if (i === index) {
                move[row][col] = 2
            } else {
                move[row][col] = 1
            }
        } else {
            if (i === index) {
                move[row][col] = 1
            } else {
                move[row][col] = 2
            }
        }
    }
    
    return move
}

function moveValidityCheck(pattern, row, col) {
    for (let i = 0; i < pattern.length; i++) {
        for (let j = 0; j < pattern[i].length; j++) {
            let targetRow = row + i - 1
            let targetColumn = col + j - 1
            if (targetRow >= 0 && targetRow < 15 && targetColumn >= 0 && targetColumn < 15) {
                if (pattern[i][j] != 0 && game.board[targetRow][targetColumn] != 0) {
                    return false
                }
            }
        }
    }

    return true
}

function placeStone(pattern, row, col) {
    for (let i = 0; i < pattern.length; i++) {
        for (let j = 0; j < pattern[i].length; j++) {
            let targetRow = row + i - 1
            let targetColumn = col + j - 1
            if (targetRow >= 0 && targetRow < 15 && targetColumn >= 0 && targetColumn < 15) {
                if (game.board[targetRow][targetColumn] === 0) {
                    game.board[targetRow][targetColumn] = pattern[i][j]
                }
            }
        }
    }
}

function winCheckClassic() {
    for (let i = 0; i < 15; i++) {
        for (let j = 0; j < 11; j++) {
            if (game.board[i][j] === 2 && game.board[i][j + 1] === 2 && game.board[i][j + 2] === 2 && game.board[i][j + 3] === 2 && game.board[i][j + 4] === 2) {
                state = 'Win'
                game.winner = 1
                return
            }

            if (game.board[i][j] === 1 && game.board[i][j + 1] === 1 && game.board[i][j + 2] === 1 && game.board[i][j + 3] === 1 && game.board[i][j + 4] === 1) {
                state = 'Win'
                game.winner = 0
                return
            }
        }
    }

    for (let i = 0; i < 11; i++) {
        for (let j = 0; j < 15; j++) {
            if (game.board[i][j] === 2 && game.board[i + 1][j] === 2 && game.board[i + 2][j] === 2 && game.board[i + 3][j] === 2 && game.board[i + 4][j] === 2) {
                state = 'Win'
                game.winner = 1
                return
            }

            if (game.board[i][j] === 1 && game.board[i + 1][j] === 1 && game.board[i + 2][j] === 1 && game.board[i + 3][j] === 1 && game.board[i + 4][j] === 1) {
                state = 'Win'
                game.winner = 0
                return
            }
        }
    }

    for (let i = 0; i < 11; i++) {
        for (let j = 0; j < 11; j++) {
            if (game.board[i][j] === 2 && game.board[i + 1][j + 1] === 2 && game.board[i + 2][j + 2] === 2 && game.board[i + 3][j + 3] === 2 && game.board[i + 4][j + 4] === 2) {
                state = 'Win'
                game.winner = 1
                return
            }

            if (game.board[i][j] === 1 && game.board[i + 1][j + 1] === 1 && game.board[i + 2][j + 2] === 1 && game.board[i + 3][j + 3] === 1 && game.board[i + 4][j + 4] === 1) {
                state = 'Win'
                game.winner = 0
                return
            }
        }
    }

    for (let i = 0; i < 11; i++) {
        for (let j = 4; j < 15; j++) {
            if (game.board[i][j] === 2 && game.board[i + 1][j - 1] === 2 && game.board[i + 2][j - 2] === 2 && game.board[i + 3][j - 3] === 2 && game.board[i + 4][j - 4] === 2) {
                state = 'Win'
                game.winner = 1
                return
            }

            if (game.board[i][j] === 1 && game.board[i + 1][j - 1] === 1 && game.board[i + 2][j - 2] === 1 && game.board[i + 3][j - 3] === 1 && game.board[i + 4][j - 4] === 1) {
                state = 'Win'
                game.winner = 0
                return
            }
        }
    }
}
