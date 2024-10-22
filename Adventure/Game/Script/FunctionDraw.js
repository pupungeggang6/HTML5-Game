function drawSceneInit() {
    context.font = '32px Opensans'
    context.textAlign = 'left'
    context.textBaseline = 'top'
    context.strokeStyle = 'Black'
    context.lineWidth = 2
    context.fillStyle = 'White'
    context.clearRect(0, 0, 1280, 720)
    context.fillRect(0, 0, 1280, 720)
    context.fillStyle = 'Black'
}

function drawField() {
    context.strokeRect(varField.positionPlayer[0] - 20, varField.positionPlayer[1] - 20, 40, 40)
}

function drawHand() {
    for (let i = 0; i < 6; i++) {
        context.strokeRect(UI.game.lower.cardStart[0] + UI.game.lower.cardInterval[0] * i, UI.game.lower.cardStart[1], UI.game.lower.cardSize[0], UI.game.lower.cardSize[1])
    }
}