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

function drawGameReady() {
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

function drawGameTitle() {
    context.fillText(`${field.name}`, UI.game.textTitle[0], UI.game.textTitle[1])
}

function drawGameLower() {
    context.fillText(`Lv.${player.generatorLevel}`, UI.game.lower.levelText[0], UI.game.lower.levelText[1])
    context.drawImage(img.icon.life, UI.game.lower.lifeIcon[0], UI.game.lower.lifeIcon[1])
    context.fillText(`${player.life}`, UI.game.lower.lifeText[0], UI.game.lower.lifeText[1])
    context.drawImage(img.icon.energy, UI.game.lower.energyIcon[0], UI.game.lower.energyIcon[1])
    context.fillText(`${player.energy.toFixed(1)}/${player.energyMax}`, UI.game.lower.energyText[0], UI.game.lower.energyText[1])

    context.font = '24px neodgm'
    context.strokeRect(UI.game.lower.buttonGenerator[0], UI.game.lower.buttonGenerator[1], UI.game.lower.buttonGenerator[2], UI.game.lower.buttonGenerator[3])
    context.fillText(`${player.generatorUpgradeEnergy}`, UI.game.lower.textGenerator[0], UI.game.lower.textGenerator[1])

    for (let i = 0; i < 8; i++) {
        if (i < player.hand.length) {
            drawCard(player.hand[i], [UI.game.lower.handStart[0] + UI.game.lower.handInterval[0] * i, UI.game.lower.handStart[1] + UI.game.lower.handInterval[1] * i])
        }

        context.strokeRect(UI.game.lower.handStart[0] + UI.game.lower.handInterval[0] * i, UI.game.lower.handStart[1] + UI.game.lower.handInterval[1] * i, UI.game.lower.handSize[0], UI.game.lower.handSize[1])
    }
}

function drawGameField() {
    for (let s of field.spawn) {
        drawAtCenterSprite(s, {x: 80, y: 80}, img.spawn)
    }

    for (let e of field.endPoint) {
        drawAtCenterSprite(e, {x: 80, y: 80}, img.endPoint)
    }

    for (let e of field.unitEnemy) {
        drawAtCenterRect(e.position, {x: 80, y: 80}, img)
    }

    for (let p of field.unitPlayer) {
        drawAtCenterSprite(p.position, {x: 80, y: 80}, img.card[p.ID])
    }

    for (let i = 0; i < field.cell.length; i++) {
        for (let j = 0; j < field.cell[0].length; j++) {
            drawAtCenterRect({x: field.start.x + UI.game.field.cellSize[0] * j, y: field.start.y + UI.game.field.cellSize[1] * i}, {x: UI.game.field.cellSize[0], y: UI.game.field.cellSize[1]})
        }
    }
}

function drawGameOver() {
    context.fillStyle = 'White'
    context.fillRect(UI.game.gameOver.rect[0], UI.game.gameOver.rect[1], UI.game.gameOver.rect[2], UI.game.gameOver.rect[3])
    context.strokeRect(UI.game.gameOver.rect[0], UI.game.gameOver.rect[1], UI.game.gameOver.rect[2], UI.game.gameOver.rect[3])
    context.fillStyle = 'Black'

    context.font = '64px neodgm'
    context.fillText(`Game Over`, UI.game.gameOver.text[0], UI.game.gameOver.text[1])

    context.font = '32px neodgm'
    context.strokeRect(UI.game.gameOver.buttonOK[0], UI.game.gameOver.buttonOK[1],  UI.game.gameOver.buttonOK[2], UI.game.gameOver.buttonOK[3])
    context.fillText(`OK`, UI.game.gameOver.textOK[0], UI.game.gameOver.textOK[1])
}

function drawCard(card, position) {
    context.font = '24px neodgm'
    context.drawImage(img.card[card.ID], position[0] + UI.card.image[0], position[1] + UI.card.image[1])
    context.fillText(`${card.energy}`, position[0] + UI.card.textEnergy[0], position[1] + UI.card.textEnergy[1])
}

function drawAtCenterRect(position, size) {
    context.strokeRect(position.x - size.x / 2, position.y - size.y / 2, size.x, size.y)
}

function drawAtCenterSprite(position, size, img) {
    context.drawImage(img, position.x - size.x / 2, position.y - size.y / 2)
}