function drawSceneInit() {
    context.font = '32px neodgm'
    context.textAlign = 'left'
    context.textBaseline = 'top'
    context.strokeStyle = 'Black'
    context.lineWidth = 2
    context.fillStyle = 'White'
    context.clearRect(0, 0, 1280, 720)
    context.fillRect(0, 0, 1280, 720)
    context.fillStyle = 'Black'
}

function drawMenu() {
    context.fillStyle = 'White'
    context.fillRect(UI.menu.rect[0], UI.menu.rect[1], UI.menu.rect[2], UI.menu.rect[3])
    context.strokeRect(UI.menu.rect[0], UI.menu.rect[1], UI.menu.rect[2], UI.menu.rect[3])
    context.fillStyle = 'Black'

    context.fillText(`Paused`, UI.menu.textPaused[0], UI.menu.textPaused[1])
    context.fillText(`Resume`, UI.menu.textResume[0], UI.menu.textResume[1])
    context.fillText(`Exit Level`, UI.menu.textExitLevel[0], UI.menu.textExitLevel[1])
    context.fillText(`Exit to Title`, UI.menu.textExit[0], UI.menu.textExit[1])

    context.strokeRect(UI.menu.arrow[varSelect.menu][0], UI.menu.arrow[varSelect.menu][1], UI.menu.arrow[varSelect.menu][2], UI.menu.arrow[varSelect.menu][3])
}