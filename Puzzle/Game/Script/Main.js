window.onload = main
window.onerror = errorHandle
window.oncontextmenu = rightClick

function main() {
    canvas = document.querySelector('#Screen')
    context = canvas.getContext('2d')

    window.addEventListener('mouseup', mouseUp, false)

    gameFrameCurrent = Date.now()
    gameFramePrevious = Date.now() - 16
    gameFrame = requestAnimationFrame(loop)
}

function loop() {
    gameFramePrevious = gameFrameCurrent
    gameFrameCurrent = Date.now()
    delta = gameFramePrevious - gameFrameCurrent

    if (scene === 'Title') {
        loopTitle()
    }

    gameFrame = requestAnimationFrame(loop)
}

function mouseUp(event) {
    let targetRect = canvas.getBoundingClientRect()
    let x = (event.clientX - canvas.offsetLeft) / targetRect.width * 1280
    let y = (event.clientY - canvas.offsetTop) / targetRect.height * 720
    let button = event.button

    if (scene === 'Title') {
        mouseUpTitle(x, y, button)
    }
}

function errorHandle(err, url, line, col, obj) {
    if (obj != null) {
        cancelAnimationFrame(gameFrame)        
    }
}

function rightClick() {
    return false
}
