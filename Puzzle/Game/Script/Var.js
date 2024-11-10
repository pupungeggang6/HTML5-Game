let canvas
let context

let gameLoop
let gameFrameCurrent
let gameFramePrevious
let delta

let scene = 'Title'
let state = ''
let stateSelected = ''
let menu = false

let selected = {
    character: -1,
}

let field

let player
let enemy
let board
let battle