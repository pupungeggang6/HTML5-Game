function drawSceneUIInit() {
    context.font = '32px Opensans'
    context.textAlign = 'left'
    context.textBaseline = 'top'
    context.strokeStyle = 'Black'
    context.fillStyle = 'Black'
    context.lineWidth = 2
    context.clearRect(0, 0, 1280, 720)
}

function drawSceneGLInit() {
    gl.clearColor(0.0, 0.0, 0.0, 1.0)
    gl.enable(gl.DEPTH_TEST)
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)

    gl.useProgram(varGL.program)
    gl.bindBuffer(gl.ARRAY_BUFFER, varGL.buffer.vertex)
    gl.enableVertexAttribArray(varGL.location.position)
    gl.vertexAttribPointer(varGL.location.position, 3, gl.FLOAT, false, 0, 0)
    gl.bindBuffer(gl.ARRAY_BUFFER, varGL.buffer.texture)
    gl.enableVertexAttribArray(varGL.location.texcoord)
    gl.vertexAttribPointer(varGL.location.texcoord, 2, gl.FLOAT, false, 0, 0)

    gl.uniform1i(varGL.location.mode, 1)
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, texture.player)
    gl.bindBuffer(gl.ARRAY_BUFFER, varGL.buffer.vertex)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0, 0, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0.5, 0.5, 0, 0, 0, 0, 0, 0.5, 0]), gl.STATIC_DRAW)
    gl.bindBuffer(gl.ARRAY_BUFFER, varGL.buffer.texture)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0, 0, 0.5, 0, 0.5, 1, 0.5, 1, 0, 0, 0, 1]), gl.STATIC_DRAW)
    gl.drawArrays(gl.TRIANGLES, 0, 6)
    gl.bindBuffer(gl.ARRAY_BUFFER, varGL.buffer.vertex)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0.5, 0, 0, 1, 0, 0, 1, 0.5, 0, 1, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0]), gl.STATIC_DRAW)
    gl.bindBuffer(gl.ARRAY_BUFFER, varGL.buffer.texture)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0.5, 1, 1, 1, 1, 0, 1, 0, 0.5, 1, 0.5, 0]), gl.STATIC_DRAW)
    gl.drawArrays(gl.TRIANGLES, 0, 6)
}

function drawObject(verticeCoord, texCoord, texture) {
    
}
