function loopGame() {
    displayGame()
}

function displayGame() {
    drawSceneInit()

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
    } else if (menu === true) {
        if (key === 'ArrowUp') {
            varSelect.menu = (varSelect.menu + 2) % 3
        } else if (key === 'ArrowDown') {
            varSelect.menu = (varSelect.menu + 1) % 3
        } else if (key === 'Enter') {
            if (varSelect.menu === 0) {
                menu = false
            } else if (varSelect.menu === 1) {
                menu = false
            } else if (varSelect.menu === 2) {
                scene = 'Title'
                state = ''
                varSelect.title = 0
                menu = false
            }
        } else if (key === 'Escape') {
            menu = false
        }
    }
}

function keyUpGame(key) {

}