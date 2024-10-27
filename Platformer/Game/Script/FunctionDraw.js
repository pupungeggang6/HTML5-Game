function drawSceneInit() {
    context.font = '32px Opensans'
    context.textAlign = 'left'
    context.textBaseline = 'top'
    context.strokeStyle = 'Black'
    context.lineWidth = 2
    context.fillStyle = 'White'
    context.clearRect(0, 0, 1280, 800)
    context.strokeRect(0, 0, 1280, 800)
    context.fillStyle = 'Black'
}

function drawMenu() {
    context.fillStyle = 'White'
    context.fillRect(UI.menu.rect[0], UI.menu.rect[1], UI.menu.rect[2], UI.menu.rect[3])
    context.strokeRect(UI.menu.rect[0], UI.menu.rect[1], UI.menu.rect[2], UI.menu.rect[3])
    context.fillStyle = 'Black'

    context.fillText(`Paused`, UI.menu.textPause[0], UI.menu.textPause[1])
    context.fillText(`Resume`, UI.menu.textResume[0], UI.menu.textResume[1])
    context.fillText(`Exit`, UI.menu.textExit[0], UI.menu.textExit[1])

    context.strokeRect(UI.menu.arrow[varSelect.menu][0], UI.menu.arrow[varSelect.menu][1], 80, 80)
}

function drawThing(thing) {
    if (thing.animation.time > thing.animationData[thing.animation.state]['Time']) {
        thing.animation.time = 0
        thing.animation.frame = (thing.animation.frame + 1) % thing.animationData[thing.animation.state]['Frame'].length
    } else {
        thing.animation.time += delta / 1000
    }
    
    context.drawImage(thing.image, thing.animationData)
}
