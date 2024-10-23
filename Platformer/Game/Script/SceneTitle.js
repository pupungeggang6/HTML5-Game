function loopTitle() {
    displayTitle()
}

function displayTitle() {
    drawSceneInit()

    context.fillText(`Slide Platformer`, UI.title.textTitle[0], UI.title.textTitle[1])

    context.fillText(`Start Game`, UI.title.textStart[0], UI.title.textStart[1])
    context.fillText(`Erase Data`, UI.title.textErase[0], UI.title.textErase[1])

    context.strokeRect(UI.title.arrow[varSelect.title][0], UI.title.arrow[varSelect.title][1], UI.title.arrow[varSelect.title][2], UI.title.arrow[varSelect.title][3])
}

function keyDownTitle(key) {
    if (menu === false) {
        if (state === '') {
            if (key === 'ArrowUp') {
                varSelect.title = (varSelect.title + 1) % 2
            } else if (key === 'ArrowDown') {
                varSelect.title = (varSelect.title + 1) % 2
            } else if (key === 'Enter') {
                scene = 'Game'
                state = ''
            }
        }
    }
}

function keyUpTitle(key) {

}