window.onload = main
window.onerror = errorHandle
window.oncontextmenu = rightClick

function main() {
    canvas = document.getElementById('Screen')
    context = canvas.getContext('2d')

    window.addEventListener('keydown', keyDown, false)
    window.addEventListener('keyup', keyUp, false)

    player = new Player()

    for (let i = 0; i < 10; i++) {
        let tempEnemy = new Enemy()
        enemyList.push(tempEnemy)
    }

    gameFrameCurrent = Date.now()
    gameFramePrevious = Date.now() - 16
    gameFrame = requestAnimationFrame(loop)
}

function loop() {
    gameFramePrevious = gameFrameCurrent
    gameFrameCurrent = Date.now()
    delta = gameFrameCurrent - gameFramePrevious

    loopMain()
    
    gameFrame = requestAnimationFrame(loop)
}

function keyDown(event) {
    let key = event.key

    keyDownMain(key)
}

function keyUp(event) {
    let key = event.key

    keyUpMain(key)
}

function errorHandle(err, url, line, col, obj) {
    if (obj != null) {
        cancelAnimationFrame(gameFrame)
    }
}

function rightClick() {
    return false
}
