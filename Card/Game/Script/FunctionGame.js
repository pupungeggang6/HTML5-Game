function detectPointerHand() {
    varGame.pointerHand = -1

    for (let i = 0; i < varGame.handCard.length; i++) {
        if (pointInsideRect(mouse[0], mouse[1], UI.game.lower.handCard[0] + UI.game.lower.handCardInterval[0] * i, UI.game.lower.handCard[1], UI.game.lower.handCardInterval[0], UI.game.lower.handCardZone)) {
            varGame.pointerHand = i
        }
    }
}