function drawSceneInit() {
    context.font = '32px Opensans'
    context.textAlign = 'left'
    context.textBaseline = 'top'
    context.strokeStyle = 'Black'
    context.lineWidth = 2
    context.fillStyle = 'White'
    context.clearRect(0, 0, 1280, 800)
    context.fillRect(0, 0, 1280, 800)
    context.fillStyle = 'Black'
}

function drawText() {
    context.fillText(`${1}`, UI.text[0], UI.text[1])
}

function drawBoard() {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === 1) {
                context.fillRect(UI.start[0] + UI.cellSize[0] * j, UI.start[1] + UI.cellSize[1] * i, UI.cellSize[0], UI.cellSize[1])
            }
        }
    }

    context.fillStyle = 'Blue'
    context.fillRect(UI.start[0] + UI.cellSize[0] * start[1], UI.start[1] + UI.cellSize[1] * start[0], UI.cellSize[0], UI.cellSize[1])
    context.fillStyle = 'Green'
    context.fillRect(UI.start[0] + UI.cellSize[0] * goal[1], UI.start[1] + UI.cellSize[1] * goal[0], UI.cellSize[0], UI.cellSize[1])

    context.fillStyle = 'LightYellow'
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (visited[i][j] === 1 && !(i === start[0] && j === start[1]) && !(i === goal[0] && j === goal[1])) {
                context.fillRect(UI.start[0] + UI.cellSize[0] * j, UI.start[1] + UI.cellSize[1] * i, UI.cellSize[0], UI.cellSize[1])
            }
        }
    }

    context.fillStyle = 'Lime'
    for (let i = 1; i < path.length - 1; i++) {
        context.fillRect(UI.start[0] + UI.cellSize[0] * path[i][1], UI.start[1] + UI.cellSize[1] * path[i][0], UI.cellSize[0], UI.cellSize[1])
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            context.strokeRect(UI.start[0] + UI.cellSize[0] * j, UI.start[1] + UI.cellSize[1] * i, UI.cellSize[0], UI.cellSize[1])
        }
    }
}