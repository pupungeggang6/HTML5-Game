let canvas
let context
let canvasDebug
let contextDebug

let gameFrame
let gameFrameCurrent
let gameFramePrevious
let delta

let scene = 'Title'
let state = ''
let stateClick = ''
let menu = false

let mouse = [0, 0]

let varSave = {

}

let varPlayer = {

}

let varGame = {
    handCard : [],
    handCrystal : [],
    deckCard : [],
    deckCrystal : [],
    field : [

    ],

    statementEnv : {},
    statementStack : [],

    pointerHand : -1,
}