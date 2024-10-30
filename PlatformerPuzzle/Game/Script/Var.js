let canvas
let context

let gameFrame
let gameFrameCurrent
let gameFramePrevious
let delta

let scene = 'Title'
let state = ''
let menu = false

let keyboard = {
    left: false,
    right: false,
    up: false,
    down: false,

    controlLeft: false,
    controlRight: false,
    controlUp: false,
    controlDown: false,
}

let varSelect = {
    title: 0,
    menu: 0,
}

let player
let camera
let level
let enemy