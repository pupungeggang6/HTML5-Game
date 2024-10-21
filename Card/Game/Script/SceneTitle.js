function loopTitle() {
    displayTitle()
}

function displayTitle() {
    drawSceneInit()

    context.fillText(`Card`, UI.title.textTitle[0], UI.title.textTitle[1])
}

function mouseUpTitle(x, y, button) {
    console.log(`${x} ${y}`)
}