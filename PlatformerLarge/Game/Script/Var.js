let canvas
let context

let gameLoop
let gameFrameCurrent
let gameFramePrevious
let delta

let scene = 'Title'
let state = ''
let menu = false

let control = {
    left: 'a',
    right: 'd',
    down: 's',
    jump: ' ',
    attack: '.',
    action: '/',
    controlUp: 'ArrowUp',
    controlLeft: 'ArrowLeft',
    controlDown: 'ArrowDown',
    controlRight: 'ArrowRight',
}

let keyboard = {
    left: false,
    right: false,
    down: false,
    jump: false,
    attack: false,
    action: false,
    controlUp: false,
    controlLeft: false,
    controlDown: false,
    controlRight: false,
}

let field
let player

let cursor = {
    title: 0,
}