// RandomPlacing
function AIMove(level) {
    if (level === 1) {
        let moves = findPossibleMoves(game.currentMove)
        let index = Math.floor(Math.random() * moves.length)
        placeStone(game.currentMove, moves[index][0], moves[index][1])
    } else if (level === 2) {
        let moves = findPossibleMoves(game.currentMove)
        let index = 0
        let maxScore = 0
        
        for (let i = 0; i < moves.length; i++) {
            tempBoard = JSON.parse(JSON.stringify(game.board))
            tempBoard = placeStoneToBoard(game.currentMove, tempBoard, moves[i][0], moves[i][1])
            console.log(tempBoard)
            let tempScore = AIScore(2, tempBoard)

            if (tempScore > maxScore) {
                index = i
                maxScore = tempScore
            }
        }

        placeStone(game.currentMove, moves[index][0], moves[index][1])
    }
}

function findPossibleMoves(pattern) {
    let moves = []

    for (let i = 0; i < 15; i++) {
        for (let j = 0; j < 15; j++) {
            if (moveValidityCheck(pattern, i, j)) {
                moves.push([i, j])
            }
        }
    }

    return moves
}

function AIScore(stone, board) {
    let score = 0

    for (let i = 0; i < 15; i++) {
        for (let j = 0; j < 15; j++) {
            if (board[i][j] === stone) {
                let directions = JSON.parse(JSON.stringify(direction))
                for (let k = 0; k < directions.length; k++) {
                    let row = i
                    let column = j

                    while (true) {
                        row += directions[k][0]
                        column += directions[k][1]

                        if (row < 0 || row > 14 || column < 0 || column > 14) {
                            break
                        }

                        if (board[row][column] != stone) {
                            break
                        }

                        score += 1
                    }
                }
            }
        }
    }

    console.log(score)
    return score
}