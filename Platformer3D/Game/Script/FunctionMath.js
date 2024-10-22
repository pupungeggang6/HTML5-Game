function matrixIdentity() {
    return [
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1
    ]
}

function matrixTranslate(x, y, z) {
    return [
        1, 0, 0, x,
        0, 1, 0, y,
        0, 0, 1, z,
        0, 0, 0, 1
    ]
}

function matrixRotate(axis, angle) {
    let s = Math.sin(angle * Math.PI / 180)
    let c = Math.cos(angle * Math.PI / 180)

    if (axis === 'x') {
        return [
            1, 0, 0, 0,
            0, c, -s, 0,
            0, s, c, 0,
            0, 0, 0, 1
        ]
    } else if (axis === 'y') {
        return [
            c, 0, s, 0,
            0, 1, 0, 0,
            -s, 0, c, 0,
            0, 0, 0, 1
        ]

    } else if (axis === 'z') {
        return [
            c, -s, 0, 0,
            s, c, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ]
    } else {
        return matrixIdentity()
    }
}

function matrixScale(x, y, z) {
    return [
        x, 0, 0, 0,
        0, y, 0, 0,
        0, 0, z, 0,
        0, 0, 0, 1
    ]
}

function glOrthoMatrix(l, r, b, t, f, n) {
    return [
        2 / (r - l), 0, 0, -(r + l)/(r - l),
        0, 2 / (t - b), 0, -(t + b)/(t - b),
        0, 0, -2 / (f - n), -(f + n)/(f - n),
        0, 0, 0, 1,
    ]
}
