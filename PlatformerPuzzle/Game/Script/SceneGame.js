function loopGame() {
    if (menu === false) {
        if (state === '') {
            cameraFollow()
        }
    }

    displayGame()
}

function displayGame() {
    drawSceneInit()
    drawThing(player)

    if (menu === true) {
        drawMenu()
    }
}

function keyDownGame(key) {
    if (menu === false) {
        if (key === 'Escape') {
            menu = true
            varSelect.menu = 0
        }
        if (state === '') {

        }
    } else if (menu === true) {
        if (key === 'Escape') {
            menu = false
        } else if (key === 'ArrowUp') {
            varSelect.menu = (varSelect.menu + 1) % 2
        } else if (key === 'ArrowDown') {
            varSelect.menu = (varSelect.menu + 1) % 2
        } else if (key === 'Enter') {
            if (varSelect.menu === 0) {
                menu = false
            } else if (varSelect.menu === 1) {
                menu = false
                scene = 'Title'
                state = ''
                varSelect.title = 0
            }
        }
    }
}

function keyUpGame(key) {

}