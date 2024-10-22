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
        mode : null,
        texcoord : null,
        texture : null,
        color : null,

        modelRotateX : null,
        modelRotateY : null,
        modelRotateZ : null,
        modelTranslate : null,
        modelScale : null,

        cameraRotateX : null,
        cameraRotateY : null,
        cameraRotateZ : null,
        cameraTranslate : null,
        cameraProjection : null,
    },
    buffer : {
        vertex : null,
        texture : null,
    }
}

let space3D = {
    camera : {
        translate : [0, 0, 0],
        rotate : [0, 0, 0]
    },
}
