function drawSceneInit() {
    context.font = '32px Opensans'
    context.textAlign = 'left'
    context.textBaseline = 'top'
    context.strokeStyle = 'Black'
    context.lineWidth = 4
    context.fillStyle = 'White'
    context.clearRect(0, 0, 1280, 800)
    context.fillRect(0, 0, 1280, 800)
    context.fillStyle = 'Black'
}

function drawThing(thing) {
    context.beginPath()
    if (thing.type === 'Player') {
        context.fillStyle = 'Blue'
    } else {
        context.fillStyle = 'Red'   
    }
    context.strokeStyle = 'Black'
    context.arc(thing.position.x, thing.position.y, thing.size, 0, Math.PI * 2)
    context.stroke()
    context.fill()
    context.closePath()
}
