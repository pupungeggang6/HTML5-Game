window.onload = main
window.onerror = errorHandle
window.oncontextmenu = rightClick

function main() {
    canvas = document.querySelector('#Screen')
    context = canvas.getContext('2d')

    window.addEventListener('mouseup', mouseUp, false)

    imageLoad()

    gameFrameCurrent = Date.now()
    gameFramePrevious = Date.now() - 16
    gameFrame = requestAnimationFrame(loop)
}

function loop() {
    gameFramePrevious = gameFrameCurrent
    gameFrameCurrent = Date.now()
    delta = gameFrameCurrent -gameFramePrevious

    if (scene === 'Title') {
        loopTitle()
    } else if (scene === 'Game') {
        loopGame()
    }
    
    gameFrame = requestAnimationFrame(loop)
}

function mouseUp(event) {
    let targetRect = canvas.getBoundingClientRect()
    let x = (event.clientX - targetRect.left) / targetRect.width * canvas.width
    let y = (event.clientY - targetRect.top) / targetRect.height * canvas.height
    let button = event.button

    if (scene === 'Title') {
        mouseUpTitle(x, y, button)
    } else if (scene === 'Game') {
        mouseUpGame(x, y, button)
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
