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

    context.fillText(`Build your deck.`, UI.game.start.textTitle[0], UI.game.start.textTitle[1])
    context.strokeRect(UI.game.start.descriptionArea[0], UI.game.start.descriptionArea[1], UI.game.start.descriptionArea[2], UI.game.start.descriptionArea[3])

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 8; j++) {
            context.strokeRect(UI.game.start.cardStart[0] + UI.game.start.cardInterval[0] * j, UI.game.start.cardStart[1] + UI.game.start.cardInterval[1] * i, UI.game.start.cardSize[0], UI.game.start.cardSize[1])
        }
    }

    context.strokeRect(UI.game.start.buttonPrev[0], UI.game.start.buttonPrev[1], UI.game.start.buttonPrev[2], UI.game.start.buttonPrev[3])
    context.strokeRect(UI.game.start.buttonNext[0], UI.game.start.buttonNext[1], UI.game.start.buttonNext[2], UI.game.start.buttonNext[3])
    context.fillText(`${deckPage + 1}/${deckPage + 1}`, UI.game.start.textPage[0], UI.game.start.textPage[1])

    context.strokeRect(UI.game.start.deckArea[0], UI.game.start.deckArea[1], UI.game.start.deckArea[2], UI.game.start.deckArea[3])

    context.strokeRect(UI.game.start.buttonStart[0], UI.game.start.buttonStart[1], UI.game.start.buttonStart[2], UI.game.start.buttonStart[3])
    context.fillText(`Start`, UI.game.start.textStart[0], UI.game.start.textStart[1])
}

function drawField() {

}

function drawLower() {
    context.strokeRect(UI.game.lower.buttonGenerator[0], UI.game.lower.buttonGenerator[1], UI.game.lower.buttonGenerator[2], UI.game.lower.buttonGenerator[3])

    for (let i = 0; i < 8; i++) {
        context.strokeRect(UI.game.lower.handStart[0] + UI.game.lower.handInterval[0] * i, UI.game.lower.handStart[1] + UI.game.lower.handInterval[1] * i, UI.game.lower.handSize[0], UI.game.lower.handSize[1])
    }
}

function drawHand() {

}

function drawMenu() {
    context.fillStyle = 'White'
    context.fillRect(UI.menu.rect[0], UI.menu.rect[1], UI.menu.rect[2], UI.menu.rect[3])
    context.strokeRect(UI.menu.rect[0], UI.menu.rect[1], UI.menu.rect[2], UI.menu.rect[3])
    context.fillStyle = 'Black'

    context.fillText('Paused', UI.menu.textPause[0], UI.menu.textPause[1])
    context.strokeRect(UI.menu.buttonResume[0], UI.menu.buttonResume[1], UI.menu.buttonResume[2], UI.menu.buttonResume[3])
    context.fillText('Resume', UI.menu.textResume[0], UI.menu.textResume[1])
    context.strokeRect(UI.menu.buttonExit[0], UI.menu.buttonExit[1], UI.menu.buttonExit[2], UI.menu.buttonExit[3])
    context.fillText('Exit', UI.menu.textExit[0], UI.menu.textExit[1])
}