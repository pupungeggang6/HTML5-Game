window.onload = main
window.onerror = errorHandle
window.oncontextmenu = rightClick

function main() {
    canvas = document.getElementById('Screen')
    context = canvas.getContext('2d')

    canvas.addEventListener('mouseup', mouseUp, false)
    loadImage()

    frameCurrent = Date.now()
    framePrevious = Date.now() - 16
    gameLoop = requestAnimationFrame(loop)
}

function loop() {
    framePrevious = frameCurrent
    frmaeCurrent = Date.now()
    delta = frameCurrent - frameCurrent

    if (scene === 'Title') {
        loopTitle()
    } else if (scene === 'CharacterSelect') {
        loopCharacterSelect()
    } else if (sceme === 'Battle') {
        loopBattle()
    }

    gameLoop = requestAnimationFrame(loop)
}

function mouseUp(event) {
    let targetRect = canvas.getBoundingClientRect()
    let x = (event.clientX - targetRect.left) / targetRect.width * canvas.width
    let y = (event.clientY - targetRect.top) / targetRect.height * canvas.height
    let button = event.button

    if (scene === 'Title') {
        mouseUpTitle(x, y, button)
    } else if (scene === 'CharacterSelect') {
        mouseUpCharacterSelect(x, y, button)
    } else if (scene === 'Battle') {
        mouseUpBattle(x, y, button)
    }
}

function errorHandle(err, url, line, col, obj) {
    if (obj != null) {
        cancelAnimationFrame(loop)
    }
}

function rightClick() {
    return false
}
