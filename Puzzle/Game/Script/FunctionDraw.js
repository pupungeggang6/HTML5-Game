function drawSceneInit() {
    context.font = '32px neodgm'
    context.textAlign = 'left'
    context.textBaseline = 'top'
    context.strokeStyle = 'Black'
    context.lineWidth = 2
    context.fillStyle = 'White'
    context.clearRect(0, 0, 720, 1280)
    context.fillRect(0, 0, 720, 1280)
    context.fillStyle = 'Black'
}

function drawBattleTitle() {
    context.fillText(`Vs.${battle.enemyName}`, UI.battle.textTitle[0], UI.battle.textTitle[1])
    context.strokeRect(UI.battle.buttonMenu[0], UI.battle.buttonMenu[1], UI.battle.buttonMenu[2], UI.battle.buttonMenu[3])
}

function drawBattleBoard() {
    context.strokeRect(40, 80, 640, 560)
    for (let i = 0; i < board.tile.length; i++) {
        for (let j = 0; j < board.tile[i].length; j++) {
            if (board.tile[i][j].type === 'Crystal') {
                context.drawImage(img.crystal[board.tile[i][j].element], 40 + 80 * j, 80 + 80 * i)
            }
        }
    }
}

function drawBattleLower() {
    context.fillStyle = 'Black'
    context.fillText(`${player.attack}`, UI.battle.lower.attackText[0], UI.battle.lower.attackText[1])

    context.drawImage(img.icon.energy, UI.battle.lower.energyIcon[0], UI.battle.lower.energyIcon[1])
    context.fillText(`${player.energy}/${player.energyMax}`, UI.battle.lower.energyText[0], UI.battle.lower.energyText[1])

    context.fillStyle = 'LightBlue'
    for (let i = 0; i < player.energy; i++) {
        context.fillRect(UI.battle.lower.energyBarStart[0] + UI.battle.lower.energyInterval[0] * i, UI.battle.lower.energyBarStart[1] + UI.battle.lower.energyInterval[1] * i, UI.battle.lower.energyCellSize[0], UI.battle.lower.energyCellSize[1])
    }

    for (let i = 0; i < player.energyMax; i++) {
        context.strokeRect(UI.battle.lower.energyBarStart[0] + UI.battle.lower.energyInterval[0] * i, UI.battle.lower.energyBarStart[1] + UI.battle.lower.energyInterval[1] * i, UI.battle.lower.energyCellSize[0], UI.battle.lower.energyCellSize[1])
    }

    context.fillStyle = 'Black'
    context.drawImage(img.icon.life, UI.battle.lower.lifeIcon[0], UI.battle.lower.lifeIcon[1])
    context.fillText(`${player.life}/${player.lifeMax}`, UI.battle.lower.lifeText[0], UI.battle.lower.lifeText[1])

    context.fillStyle = 'Green'
    let lifeBarWidth = UI.battle.lower.lifeBar[2] * player.life / player.lifeMax
    context.fillRect(UI.battle.lower.lifeBar[0], UI.battle.lower.lifeBar[1], lifeBarWidth, UI.battle.lower.lifeBar[3])
    context.strokeRect(UI.battle.lower.lifeBar[0], UI.battle.lower.lifeBar[1], UI.battle.lower.lifeBar[2], UI.battle.lower.lifeBar[3])
    context.fillStyle = 'Black'

    for (let i = 0; i < 5; i++) {
        context.strokeRect(UI.battle.lower.equipmentStart[0] + UI.battle.lower.equipmentInterval[0] * i, UI.battle.lower.equipmentStart[1] + UI.battle.lower.equipmentInterval[1] * i, UI.battle.lower.equipmentSize[0], UI.battle.lower.equipmentSize[1])
    }

    for (let i = 0; i < 3; i++) {
        context.strokeRect(UI.battle.lower.itemStart[0] + UI.battle.lower.equipmentInterval[0] * i, UI.battle.lower.itemStart[1] + UI.battle.lower.equipmentInterval[1] * i, UI.battle.lower.equipmentSize[0], UI.battle.lower.equipmentSize[1])
    }

    for (let i = 0; i < 5; i++) {
        drawCard([], new Vector(UI.battle.lower.cardStart[0] + UI.battle.lower.cardInterval[0] * i, UI.battle.lower.cardStart[1] + UI.battle.lower.cardInterval[1] * i))
    }

    context.strokeRect(UI.battle.lower.cardBack[0], UI.battle.lower.cardBack[1], UI.battle.lower.cardBack[2], UI.battle.lower.cardBack[3])
}

function drawCard(card, position) {
    context.fillStyle = 'White'
    context.fillRect(position.x, position.y, UI.card.rect[2], UI.card.rect[3])
    context.strokeRect(position.x, position.y, UI.card.rect[2], UI.card.rect[3])
    context.fillStyle = 'Black'
}

function drawMenu() {
    context.fillStyle = 'White'
    context.fillRect(UI.menu.rect[0], UI.menu.rect[1], UI.menu.rect[2], UI.menu.rect[3])
    context.strokeRect(UI.menu.rect[0], UI.menu.rect[1], UI.menu.rect[2], UI.menu.rect[3])
    context.fillStyle = 'Black'

    context.fillText(`Pause`, UI.menu.textPause[0], UI.menu.textPause[1])
    context.strokeRect(UI.menu.buttonResume[0], UI.menu.buttonResume[1], UI.menu.buttonResume[2], UI.menu.buttonResume[3])
    context.fillText(`Resume`, UI.menu.textResume[0], UI.menu.textResume[1])
    context.strokeRect(UI.menu.buttonExit[0], UI.menu.buttonExit[1], UI.menu.buttonExit[2], UI.menu.buttonExit[3])
    context.fillText(`Exit to title`, UI.menu.textExit[0], UI.menu.textExit[1])
}