function loopTitle() {
    displayTitle()
}

function displayTitle() {
    drawSceneInit()

    context.fillText(`Platformer`, UI.title.textTitle[0], UI.title.textTitle[1])
    context.fillText(`Start Game`, UI.title.textStart[0], UI.title.textStart[1])
    context.strokeRect(UI.title.arrow[0][0], UI.title.arrow[0][1], 80, 80)
}

function keyDownTitle(key) {
    if (menu === false) {
        if (state === '') {
            if (key === 'Enter') {
                scene = 'Game'
                state = ''
            }
        }
    }
}

function keyUpTitle(key) {

}