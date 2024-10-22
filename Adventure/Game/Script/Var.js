let canvas
let context

let gameFrame
let gameFrameCurrent
let gameFramePrevious
let delta

let scene = 'Title'
let state = ''
let menu = false

let varField = {
    positionPlayer : [200, 200],
    wall : [],
    unit : [],
    projectile : [],
}

let varPlayer = {
    energy : 8,
    energyMax : 8,
    life : 60,
    lifeMax : 60,

    hand : [],
    deck : [],
    item : [],
}