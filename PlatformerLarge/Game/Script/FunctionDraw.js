function drawSceneInit() {
    context.font = '32px neodgm'
    context.textAlign = 'left'
    context.textBaseline = 'top'
    context.strokeStyle = 'Black'
    context.lineWidth = 2
    context.fillStyle = 'White'
    context.clearRect(0, 0, 1280, 800)
    context.fillRect(0, 0, 1280, 800)
    context.fillStyle = 'Black'
}

function drawField() {
    for (let t of field.thing) {
        context.strokeRect(t.rect[0], t.rect[1], t.rect[2], t.rect[3])
    }
}

function drawFieldUI() {

}