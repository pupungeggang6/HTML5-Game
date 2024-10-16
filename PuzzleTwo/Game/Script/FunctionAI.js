// RandomPlacing
function AIMove(level) {
    if (level === 1) {
        let moves = findPossibleMoves(game.currentMove)
        let index = Math.floor(Math.random() * moves.length)
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

    console.log(moves)
    return moves
}
