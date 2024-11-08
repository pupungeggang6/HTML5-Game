function loopTitle() {
    displayTitle()
}

function displayTitle() {
    drawSceneInit()

    context.fillText(`Platformer`, UI.title.textTitle[0], UI.title.textTitle[1])
    context.fillText(`Start Game`, UI.title.textStart[0], UI.title.textStart[1])
    context.fillText(`Tutorial`, UI.title.textTutorial[0], UI.title.textTutorial[1])
    context.strokeRect(UI.title.arrow[cursor.title][0], UI.title.arrow[cursor.title][1], 80, 80)
}

function keyDownTitle(key) {
    if (menu === false) {
        if (state === '') {
            if (key === 'w' || key === 'ArrowUp') {
                cursor.title = (cursor.title + 1) % 2
            } else if (key === 's' || key === 'ArrowDown') {
                cursor.title = (cursor.title + 1) % 2
            } else if (key === 'Enter') {
                if (cursor.title === 0) {
                    scene = 'Game'
                    state = ''
                } else if (cursor.title === 1) {
                    scene = 'Game'
                    state = ''
                }
            }
        }
    }
}

function keyUpTitle(key) {

}