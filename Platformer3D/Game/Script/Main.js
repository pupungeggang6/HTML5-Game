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

        uniform mat4 u_camera;
        uniform mat4 u_translate;
        uniform mat4 u_rotateX;
        uniform mat4 u_rotateY;
        uniform mat4 u_rotateZ;
        uniform mat4 u_scale;

        void main() {
            gl_Position = u_camera * u_translate * u_rotateZ * u_rotateY * u_rotateX * u_scale * a_position;
            v_texcoord = a_texcoord;
        }
    `

    let sourceFragmentShader = `#version 300 es
        precision highp float;
        in vec2 v_texcoord;
        uniform int u_mode;
        uniform sampler2D u_texture;
        uniform vec4 u_color;
        out vec4 outColor;

        void main() {
            if (u_mode == 0) {
                outColor = u_color;
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
    varGL.location.mode = gl.getUniformLocation(varGL.program, 'u_mode')
    varGL.location.texture = gl.getUniformLocation(varGL.program, 'u_texture')
    varGL.location.camera = gl.getUniformLocation(varGL.program, 'u_camera')
    varGL.location.color = gl.getUniformLocation(varGL.program, 'u_color')

    varGL.location.translate = gl.getUniformLocation(varGL.program, 'u_translate')
    varGL.location.rotateX = gl.getUniformLocation(varGL.program, 'u_rotateX')
    varGL.location.rotateY = gl.getUniformLocation(varGL.program, 'u_rotateY')
    varGL.location.rotateZ = gl.getUniformLocation(varGL.program, 'u_rotateZ')
    varGL.location.scale = gl.getUniformLocation(varGL.program, 'u_scale')

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
