window.onload = main
window.onerror = errorHandle
window.oncontextmenu = rightClick

function main() {
    canvas = document.getElementById('Screen')
    context = canvas.getContext('2d')

    window.addEventListener('mousemove', mouseMove, false)
    window.addEventListener('keydown', keyDown, false)

    gameFrameCurrent = Date.now()
    gameFramePrevious = Date.now() - 16
    gameLoop = requestAnimationFrame(loop)
}

function loop() {
    gameFramePrevious = gameFrameCurrent
    gameFrameCurrent = Date.now()
    delta = gameFrameCurrent - gameFramePrevious

    loopMain()

    gameLoop = requestAnimationFrame(loop)
}

function mouseMove(event) {
    let targetRect = canvas.getBoundingClientRect()
    let x = (event.clientX - targetRect.left) / targetRect.width * canvas.width
    let y = (event.clientY - targetRect.top) / targetRect.height * canvas.height
    
    mouse.x = x
    mouse.y = y
}

function keyDown(event) {
    let key = event.key

    keyDownMain(key)
}

function errorHandle(err, url, line, col, obj) {
    if (obj != null) {
        cancelAnimationFrame(gameLoop)
    }
}

function rightClick() {
    return false
}