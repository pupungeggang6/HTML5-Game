function loopMain() {
    displayMain()
}

function displayMain() {
    drawSceneInit()
    drawText()
    drawBoard()
}

function keyDownMain(key) {
    let col = Math.floor((mouse.x - UI.start[0]) / UI.cellSize[0])
    let row = Math.floor((mouse.y - UI.start[1]) / UI.cellSize[1])

    if (row >= 0 && col >= 0 && row < board.length && col < board[0].length) {
        if (key === '0') {
            board = [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            ]

            visited = [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            ]

            path = []

            start = [0, 0]
            goal = [9, 9]
        }
        
        if (key === '1') {
            if (!(row === start[0] && col === start[1]) && !(row === goal[0] && col === goal[1])) {
                board[row][col] = 1 - board[row][col]   
            }
        }
    
        if (key === '2') {
            if (board[row][col] === 0) {
                start = [row, col]
            }
        }
    
        if (key === '3') {
            if (board[row][col] === 0) {
                goal = [row, col]
            }
        }
    
        if (key === '4') {
            let result = findPathB(board, start, goal)
            path = result['Path']
            visited = result['Visited']
        }

        if (key === '5') {
            let result = findPathA(board, start, goal)
            path = result['Path']
            visited = result['Visited']
        }
    }
}