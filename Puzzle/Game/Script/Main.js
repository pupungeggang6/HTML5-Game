window.onload = main
window.onerror = errorHandle
window.oncontextmenu = rightClick

function main() {
    canvas = document.getElementById('Screen')
    context = canvas.getContext('2d')

    window.addEventListener('mouseup', mouseUp, false)

    gameInit()
    imageLoad()
    
    gameFrameCurrent = Date.now()
    gameFramePrevious = Date.now() - 16
    gameLoop = requestAnimationFrame(loop)
}

function mouseUp(event) {
    let targetRect = canvas.getBoundingClientRect()
    let x = (event.clientX - targetRect.left) / targetRect.width * canvas.width
    let y = (event.clientY - targetRect.top) / targetRect.height * canvas.height
    let button = event.button

    if (scene === 'Title') {
        mouseUpTitle(x, y, button)
    } else if (scene === 'Ready') {
        mouseUpReady(x, y, button)
    } else if (scene === 'Map') {
        mouseUpMap(x, y, button)
    } else if (scene === 'Game') {
        mouseUpBattle(x, y, button)
    }

    gameLoop = requestAnimationFrame(loop)
}

function loop() {
    gameFramePrevious = gameFrameCurrent
    gameFrameCurrent = Date.now()
    delta = gameFrameCurrent - gameFramePrevious

    if (scene === 'Title') {
        loopTitle()
    } else if (scene === 'Ready') {
        loopReady()
    } else if (scene === 'Map') {
        loopMap()
    } else if (scene === 'Game') {
        loopBattle()
    }

    gameLoop = requestAnimationFrame(loop)
}

function errorHandle(err, url, line, col, obj) {
    if (obj != null) {
        cancelAnimationFrame(gameLoop)
    }
}

function rightClick() {
    return false
}