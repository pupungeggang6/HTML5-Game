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
            if (pointInsideRect(mouse[0], mouse[1], UI.gameBoardStoneStart[0] + UI.gameBoardInterval[0] * j, UI.gameBoardStoneStart[1] + UI.gameBoardInterval[1] * i, UI.gameBoardCellSize[0], UI.gameBoardCellSize[1])) {
                game.cursor[0] = i
                game.cursor[1] = j
            }
        }
    }
}

function placeStone(pattern, row, col) {
    
}
