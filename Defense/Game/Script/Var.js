let canvas
let context

let gameFrame
let gameFrameCurrent
let gameFramePrevious
let delta

let scene = 'Title'
let state = ''
let stateSelected = ''
let selected = {
    type: '', thing: []
}
let menu = false

let deckPage = 0

let player
let field
let level
let gameHandler