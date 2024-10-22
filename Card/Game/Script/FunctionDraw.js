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
    
}

function drawHand() {
    for (let i = 0; i < varGame.handCard.length; i++) {
        drawCard(context, varGame.handCard[i], [UI.game.lower.handCard[0] + UI.game.lower.handCardInterval[0] * i, UI.game.lower.handCard[1]])
    }

    if (varGame.pointerHand != -1) {
        drawCard(context, varGame.handCard[varGame.pointerHand], [UI.game.lower.handCardPop[0] + UI.game.lower.handCardInterval[0] * varGame.pointerHand, UI.game.lower.handCardPop[1]])
    }
}

function drawCard(context, card, position) {
    context.fillStyle = 'White'
    context.fillRect(position[0] + UI.card.rect[0], position[1] + UI.card.rect[1], UI.card.rect[2], UI.card.rect[3])
    context.strokeRect(position[0] + UI.card.rect[0], position[1] + UI.card.rect[1], UI.card.rect[2], UI.card.rect[3])
    context.fillStyle = 'Black'

    context.font = '32px Opensans'
    for (let i = 0; i < card['Energy'].length; i++) {
        if (card['Energy'][i][0] === 'Any') {
            context.drawImage(img.crystal.any, position[0] + UI.card.crystal[0] + UI.card.crystalInterval[0] * i, position[1] + UI.card.crystal[1])
        }
        context.fillText(`${card['Energy'][i][1]}`, position[0] + UI.card.crystalText[0] + UI.card.crystalInterval[0] * i, position[1] + UI.card.crystalText[1])
    }

    context.strokeRect(position[0] + UI.card.image[0], position[1] + UI.card.image[1], UI.card.image[2], UI.card.image[3])

    context.font = '16px Opensans'
    context.fillText(`${card['Name']}`, position[0] + UI.card.textName[0], position[1] + UI.card.textName[1])

    for (let i = 0; i < dataDescription[card['ID']]['Description'].length; i++) {
        context.fillText(`${dataDescription[card['ID']]['Description'][i]}`, position[0] + UI.card.textDescription[0], position[1] + UI.card.textDescription[1] + UI.card.textDescriptionInterval[1] * i)
    }

    context.font = '32px Opensans'
    context.fillText(`${card['Stat'][0]}`, position[0] + UI.card.textAttack[0], position[1] + UI.card.textAttack[1])
    context.fillText(`${card['Stat'][1]}`, position[0] + UI.card.textLife[0], position[1] + UI.card.textLife[1])
}