function loopGame() {
    handleBoardMouse()
    displayGame()
}

function displayGame() {
    drawSceneInit()
    context.fillText(`Player ${game.turnWho + 1}'s Turn, Turn ${game.turnNum}`, UI.gameTurnText[0], UI.gameTurnText[1])
    drawBoard()
    drawCurrentNext()
}

function mouseUpGame(x, y, button) {
    
}
