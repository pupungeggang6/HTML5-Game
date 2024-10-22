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
    gl.clearColor(1.0, 1.0, 1.0, 1.0)
    gl.enable(gl.DEPTH_TEST)
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
    gl.lineWidth(4)

    gl.useProgram(varGL.program)
    gl.uniformMatrix4fv(varGL.location.cameraProjection, false, glOrthoMatrix(-1.6, 1.6, -1, 1, -1, 1))
    gl.uniformMatrix4fv(varGL.location.cameraRotateX, false, matrixRotate('x', space3D.camera.rotate[0]))
    gl.uniformMatrix4fv(varGL.location.cameraRotateY, false, matrixRotate('y', space3D.camera.rotate[1]))
    gl.uniformMatrix4fv(varGL.location.cameraRotateZ, false, matrixRotate('z', space3D.camera.rotate[2]))
    gl.uniformMatrix4fv(varGL.location.cameraTranslate, false, matrixTranslate(space3D.camera.translate[0], space3D.camera.translate[1], space3D.camera.translate[2]))

    gl.bindBuffer(gl.ARRAY_BUFFER, varGL.buffer.vertex)
    gl.enableVertexAttribArray(varGL.location.position)
    gl.vertexAttribPointer(varGL.location.position, 4, gl.FLOAT, false, 0, 0)
    gl.bindBuffer(gl.ARRAY_BUFFER, varGL.buffer.texture)
    gl.enableVertexAttribArray(varGL.location.texcoord)
    gl.vertexAttribPointer(varGL.location.texcoord, 2, gl.FLOAT, false, 0, 0)
}

function drawObject(transform, modeling, texture, texMode, edgeMode) {
    gl.uniformMatrix4fv(varGL.location.modelTranslate, false, matrixTranslate(transform.translate[0], transform.translate[1], transform.translate[2]))
    gl.uniformMatrix4fv(varGL.location.modelScale, false, matrixScale(transform.scale[0], transform.scale[1], transform.scale[2]))
    gl.uniformMatrix4fv(varGL.location.modelRotateX, false, matrixRotate('x', transform.rotate[0]))
    gl.uniformMatrix4fv(varGL.location.modelRotateY, false, matrixRotate('y', transform.rotate[1]))
    gl.uniformMatrix4fv(varGL.location.modelRotateZ, false, matrixRotate('z', transform.rotate[2]))

    if (edgeMode === true) {
        gl.uniform1i(varGL.location.mode, 0)
        gl.uniform4f(varGL.location.color, 0.0, 0.0, 0.0, 1.0)
        gl.bindBuffer(gl.ARRAY_BUFFER, varGL.buffer.vertex)

        for (let i = 0; i < modeling.f.length; i++) {
            let coord1 = [modeling.v[modeling.f[i][0][0]][0], modeling.v[modeling.f[i][0][0]][1], modeling.v[modeling.f[i][0][0]][2], 1]
            let coord2 = [modeling.v[modeling.f[i][1][0]][0], modeling.v[modeling.f[i][1][0]][1], modeling.v[modeling.f[i][1][0]][2], 1]
            let coord3 = [modeling.v[modeling.f[i][2][0]][0], modeling.v[modeling.f[i][2][0]][1], modeling.v[modeling.f[i][2][0]][2], 1]
            let coords = coord1.concat(coord2).concat(coord3)
            //alert(coords)
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(coords), gl.STATIC_DRAW)
            gl.drawArrays(gl.LINE_LOOP, 0, 3)
        }
    }

    if (texMode === false) {
        gl.uniform1i(varGL.location.mode, 0)
        gl.uniform4f(varGL.location.color, 0.5, 1.0, 0.5, 1.0)

        for (let i = 0; i < modeling.f.length; i++) {
            let coord1 = [modeling.v[modeling.f[i][0][0]][0], modeling.v[modeling.f[i][0][0]][1], modeling.v[modeling.f[i][0][0]][2], 1]
            let coord2 = [modeling.v[modeling.f[i][1][0]][0], modeling.v[modeling.f[i][1][0]][1], modeling.v[modeling.f[i][1][0]][2], 1]
            let coord3 = [modeling.v[modeling.f[i][2][0]][0], modeling.v[modeling.f[i][2][0]][1], modeling.v[modeling.f[i][2][0]][2], 1]
            let coords = coord1.concat(coord2).concat(coord3)
            //alert(coords)
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(coords), gl.STATIC_DRAW)
            gl.drawArrays(gl.TRIANGLES, 0, 3)
        }
    }
}