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
    up: false,
    left: false,
    down: false,
    right: false,
}

let player
let enemyList = []