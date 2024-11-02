window.onload = main
window.onerror = errorHandle
window.oncontextmenu = rightClick

let game

function main() {
    game = new Game()
}

function errorHandle(err) {

}

function rightClick() {
    return false
}