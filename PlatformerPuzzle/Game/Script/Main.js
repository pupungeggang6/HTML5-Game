window.onload = main
window.onerror = errorHandle
window.oncontextmenu = rightClick

function main() {
    canvas = document.querySelector('#Screen')
    context = canvas.getContext('2d')

    window.addEventListener('keydown', keyDown, false)
    window.addEventListener('keyup', keyUp, false)

    imageLoad()
    gameInit()

    gameFrameCurrent = Date.now()
    gameFramePrevious = Date.now() - 16
    gameFrame = requestAnimationFrame(loop)
}

function loop() {
    gameFramePrevious = gameFrameCurrent
    gameFrameCurrent = Date.now()
    delta = gameFrameCurrent - gameFramePrevious

    if (scene === 'Title') {
        loopTitle()
    } else if (scene === 'Game') {
        loopGame()
    }
    
    gameFrame = requestAnimationFrame(loop)
}

function keyDown(event) {
    let key = event.key

    if (scene === 'Title') {
        keyDownTitle(key)
    } else if (scene === 'Game') {
        keyDownGame(key)
    }
}

function keyUp(event) {
    let key = event.key

    if (key === 'w') {
        keyboard.up = false
    }
    if (key === 'a') {
        keyboard.left = false
    }
    if (key === 's') {
        keyboard.down = false
    }
    if (key === 'd') {
        keyboard.right = false
    }

    if (key === 'ArrowUp') {
        keyboard.controlUp = false
    }
    if (key === 'ArrowLeft') {
        keyboard.controlLeft = false
    }
    if (key === 'ArrowDown') {
        keyboard.controlDown = false
    }
    if (key === 'ArrowRight') {
        keyboard.controlRight = false
    }

    if (scene === 'Title') {
        keyUpTitle(key)
    } else if (scene === 'Game') {
        keyUpGame(key)
    }
}

function errorHandle(err, url, line, col, obj) {
    if (obj != null) {
        cancelAnimationFrame(gameInstance)
    }
}

function rightClick() {
    return false
}