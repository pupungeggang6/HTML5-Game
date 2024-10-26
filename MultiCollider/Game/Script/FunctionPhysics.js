function pointInsideRect(x, y, r1, r2, r3, r4) {
    return x > r1 && x < r1 + r3   
}

function pointInsideRectArray(x, y, rect) {
    return x > rect[0] && x < rect[0] + rect[2] && y > rect[1] && y < rect[1] + rect[3]
}

function distanceTwoPoint(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
}

function pointInsideCircle(x, y, cx, cy, cr) {
    return distanceTwoPoint(x, y, cx, cy) < cr
}

function vectorSize(vector) {
    return Math.sqrt(vector.x ** 2 + vector.y ** 2)
}

function vectorNormalize(vector) {
    let size = Math.sqrt(vector.x ** 2 + vector.y ** 2)
    return {
        x: vector.x / size, y: vector.y / size
    }
}
