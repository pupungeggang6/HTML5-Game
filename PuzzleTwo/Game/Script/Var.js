let canvas
let context

let gameFrame
let gameFrameCurrent
let gameFramePrevious
let delta

let scene = 'Title'
let state = ''
let menu = false
let AITimeout = 0

// 0:Empty, 1:Black, 2:White
let game = {
    mode : '',
    rule : 'Classic',
    turnMax : 10,
    AILevel : 1,
    
    turnWho : 0,
    turnNum : 0,
    cursor : [0, 0],
    board : [],
    currentMove : [
        [0, 1, 0],
        [0, 0, 1],
        [2, 0, 0]
    ],
    nextMove : [
        [0, 1, 0],
        [0, 0, 1],
        [2, 0, 0]
    ],

    p1Score : 0,
    p2Score : 0,
    winner : 0,
}

let mouse = [0, 0]
