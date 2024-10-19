let canvas
let canvasUI
let gl
let context

let gameFrame
let gameFrameCurrent
let gameFramePrevious
let delta

let scene = 'Title'
let state = ''
let menu = false

let varGL = {
    program : null,
    shader : {
        vertex : null,
        fragment : null,    
    },
    location : {
        position : null,
        camera : null,
        mode : null,
        texcoord : null,
        texture : null,
    },
    buffer : {
        vertex : null,
        texture : null,
    }
}

let space3D = {
    camera : [],
}
