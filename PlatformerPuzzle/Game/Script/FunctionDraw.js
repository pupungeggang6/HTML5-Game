function drawSceneInit() {
    context.font = '32px Opensans'
    context.textAlign = 'left'
    context.textBaseline = 'top'
    context.strokeStyle = 'Black'
    context.lineWidth = 2
    context.fillStyle = 'White'
    context.clearRect(0, 0, 1280, 800)
    context.fillRect(0, 0, 1280, 800)
    context.fillStyle = 'Black'
}

function cameraFollow() {
    camera.position.x = player.position.x
    camera.position.y = player.position.y
}

function drawThing(thing) {
    context.strokeRect(thing.position.x - thing.size.x / 2 - camera.position.x + 640, thing.position.y - thing.size.y / 2 - camera.position.y + 400, thing.size.x, thing.size.y)
}

function drawMenu() {
    context.fillStyle = 'White'
    context.fillRect(UI.menu.rect[0], UI.menu.rect[1], UI.menu.rect[2], UI.menu.rect[3])
    context.strokeRect(UI.menu.rect[0], UI.menu.rect[1], UI.menu.rect[2], UI.menu.rect[3])
    context.fillStyle = 'Black'

    context.fillText('Paused', UI.menu.textPause[0], UI.menu.textPause[1])
    context.fillText('Resume', UI.menu.textResume[0], UI.menu.textResume[1])
    context.fillText('Exit to title', UI.menu.textExit[0], UI.menu.textExit[1])

    context.strokeRect(UI.menu.arrow[varSelect.menu][0], UI.menu.arrow[varSelect.menu][1], 80, 80)
}