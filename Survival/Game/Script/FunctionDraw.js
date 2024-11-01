function drawSceneInit() {
    context.font = '32px neodgm'
    context.textAlign = 'left'
    context.textBaseline = 'top'
    context.strokeStyle = 'Black'
    context.lineWidth = 2
    context.fillStyle = 'White'
    context.clearRect(0, 0, 1280, 800)
    context.fillRect(0, 0, 1280, 800)
    context.fillStyle = 'Black'
}

function drawGameStart() {
    context.fillStyle = 'White'
    context.fillRect(UI.game.start.rect[0], UI.game.start.rect[1], UI.game.start.rect[2], UI.game.start.rect[3])
    context.strokeRect(UI.game.start.rect[0], UI.game.start.rect[1], UI.game.start.rect[2], UI.game.start.rect[3])
    context.fillStyle = 'Black'

    context.fillText(`Select Start Item.`, UI.game.start.textTitle[0], UI.game.start.textTitle[1])

    for (let i = 0; i < 3; i++) {
        context.strokeRect(UI.game.start.buttonSelect[i][0], UI.game.start.buttonSelect[i][1], UI.game.start.buttonSelect[i][2], UI.game.start.buttonSelect[i][3])
    }

    context.strokeRect(UI.game.start.buttonStart[0], UI.game.start.buttonStart[1], UI.game.start.buttonStart[2], UI.game.start.buttonStart[3])
    context.fillText(`Start`, UI.game.start.textStart[0], UI.game.start.textStart[1])
}

function drawLower() {
    drawHand()
}

function drawHand() {
    for (let i = 0; i < player.hand.length; i++) {
        context.fillStyle = 'White'
        context.fillRect(UI.game.lower.handStart[0] + UI.game.lower.handInterval[0] * i, UI.game.lower.handStart[1] + UI.game.lower.handInterval[1] * i, UI.game.lower.handSize[0], UI.game.lower.handSize[1])
        context.strokeRect(UI.game.lower.handStart[0] + UI.game.lower.handInterval[0] * i, UI.game.lower.handStart[1] + UI.game.lower.handInterval[1] * i, UI.game.lower.handSize[0], UI.game.lower.handSize[1])
        context.fillStyle = 'Black'
        context.fillText(`${player.handRecharge[i].toFixed(1)}`, UI.game.lower.handStart[0] + UI.game.lower.handInterval[0] * i + UI.game.lower.handText[0], UI.game.lower.handStart[1] + UI.game.lower.handInterval[1] * i + UI.game.lower.handText[1])
    }
}

function drawField() {
    drawPlayer()
    context.strokeStyle = 'Blue'
    drawEnemy()
    context.strokeStyle = 'Black'
}

function drawPlayer() {
    drawThing(player.position, player.size, true)
}

function drawEnemy() {
    for (enemy of enemyList) {
        drawThing(enemy.position, enemy.size, true)
    }
}

function drawThing(position, size, strokeMode, img = null) {
    if (strokeMode === true) {
        context.strokeRect(position.x - size.x / 2, position.y - size.y / 2, size.x, size.y)
    } else {
        context.drawImage(img, position.x - size.x / 2, position.y - size.y / 2, size.x, size.y)
    }
}