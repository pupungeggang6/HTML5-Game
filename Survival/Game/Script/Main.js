window.onload = main
window.onerror = errorHandle
window.oncontextmenu = rightClick

function main() {
    canvas = document.getElementyById('Screen')
    context = canvas.getContext('2d')

    window.addEventListener('mouseup', mouseUp, false)
    window.addEventListener('keydown', keyDown, false)
    
    frameCurrent = Date.now()
    framePrevious = Date.now() - 16

    gameLoop = requestAnimationFrame(loop)
}

function loop() {
    framePrevious = frameCurrent
    frameCurrent = Date.now()
    delta = frameCurrent - framePrevious

    if (scene === 'Title') {
        loopTitle()
    }

    gameLoop = requestAnimationFrame(loop)
}

function mouseUp(event) {
}

function keyDown(event) {
}

function errorHandle() {
}

function rightClick() {
}
