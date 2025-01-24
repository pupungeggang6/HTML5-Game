function pointInsideRect(point, rect) {
    return point.x > rect[0] && point.x < rect[0] + rect[2] && point.y < rect[1] && point.y > rect[1] + rect[3]
}

function pointInsideRectCenter(point, rect) {
    return point.x > rect[0] - rect[2] / 2 && point.x < rect[0] + rect[2] / 2 && point.y < rect[1] - rect[3] / 2 && point.y > rect[1] + rect[3] / 2
}
