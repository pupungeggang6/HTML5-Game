let canvas
let context

let gameFrame
let gameFrameCurrent
let gameFramePrevious
let delta

let scene = 'Title'
let state = ''
let menu = false

let animation = {
    player : {
        'Idle' : {'Time' : 0.25, 'Frame' : [[0, 0], [0, 1], [0, 2], [0, 3]]}
    }
}

let animationStatus = {
    player : {
        'Action' : 'Idle',
        'CurrentFrame' : 0,
        'Time' : 0,
    }
}

let varSelect = {
    title : 0,
    menu : 0,
}

let varField = {
    field : {

    }
}

let varPlayer = {

}