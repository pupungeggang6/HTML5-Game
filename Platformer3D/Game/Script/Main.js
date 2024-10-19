window.onload = main
window.onerror = errorHandle
window.oncontextmenu = rightClick

function main() {
    canvasUI = document.querySelector('#CanvasUI')
    canvas = document.querySelector('#CanvasGL')
    context = canvasUI.getContext('2d')
    gl = canvas.getContext('webgl2')

    window.addEventListener('mouseup', mouseUp, false)
    window.addEventListener('keydown', keyDown, false)
    window.addEventListener('keyup', keyUp, false)

    imageLoad()
    textureLoad()
    glInit()

    gameFrameCurrent = Date.now()
    gameFramePrevious = Date.now() - 16
    gameFrame = requestAnimationFrame(loop)
}

function loop() {
    gameFramePrevious = gameFrameCurrent
    gameFrameCurrent = Date.now()
    delta = gameFrameCurrent - gameFramePrevious

    if (scene === 'Title') {
        loopTitle()
    } else if (scene === 'Game') {
        loopGame()
    }
    
    gameFrame = requestAnimationFrame(loop)
}

function glInit() {
    let sourceVertexShader = `#version 300 es
        in vec4 a_position;
        in vec2 a_texcoord;
        out vec2 v_texcoord;
        uniform vec2 u_resolution;

        void main() {
            gl_Position = a_position;
            v_texcoord = a_texcoord;
        }
    `

    let sourceFragmentShader = `#version 300 es
        precision highp float;
        in vec2 v_texcoord;
        uniform int mode;
        uniform sampler2D u_texture;
        out vec4 outColor;

        void main() {
            if (mode == 0) {
                outColor = vec4(0, 1, 0, 1);
            } else {
                outColor = texture(u_texture, v_texcoord);   
            }
        }
    `

    varGL.shader.vertex = gl.createShader(gl.VERTEX_SHADER)
    gl.shaderSource(varGL.shader.vertex, sourceVertexShader)
    gl.compileShader(varGL.shader.vertex)
    varGL.shader.fragment = gl.createShader(gl.FRAGMENT_SHADER)
    gl.shaderSource(varGL.shader.fragment, sourceFragmentShader)
    gl.compileShader(varGL.shader.fragment)
    
    varGL.program = gl.createProgram()
    gl.attachShader(varGL.program, varGL.shader.vertex)
    gl.attachShader(varGL.program, varGL.shader.fragment)
    gl.linkProgram(varGL.program)

    varGL.location.position = gl.getAttribLocation(varGL.program, 'a_position')
    varGL.location.texcoord = gl.getAttribLocation(varGL.program, 'a_texcoord')
    varGL.location.mode = gl.getUniformLocation(varGL.program, 'mode')
    varGL.location.texture = gl.getUniformLocation(varGL.program, 'u_texture')

    varGL.buffer.vertex = gl.createBuffer(gl.ARRAY_BUFFER)
    varGL.buffer.texture = gl.createBuffer(gl.ARRAY_BUFFER)

    varGL.texture = gl.createTexture()
    gl.bindTexture(gl.TEXTURE_2D, varGL.texture)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
}

function mouseUp(event) {
    let targetRect = canvas.getBoundingClientRect()
    let x = (event.clientX - targetRect.left) / targetRect.width * 1280
    let y = (event.clientY - targetRect.top) / targetRect.height * 720
    let button = event.button

    if (scene === 'Title') {
        mouseUpTitle(x, y, button)
    } else if (scene === 'Game') {
        mouseUpGame(x, y, button)
    }
}

function keyDown(event) {
    let key = event.key

    if (scene === 'Title') {
        keyDownTitle(key)
    } else if (scene === 'Game') {
        keyDownGame(key)
    }
}

function keyUp(event) {
    let key = event.key
    
    if (scene === 'Title') {
        keyUpTitle(key)
    } else if (scene === 'Game') {
        keyUpGame(key)
    }
}

function errorHandle(err, url, line, col, obj) {
    if (obj != null) {
        cancelAnimationFrame(gameFrame)
    }
}

function rightClick() {
    return false
}
