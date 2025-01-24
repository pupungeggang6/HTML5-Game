function pointInsideRectUI(point, rect) {
    return point.x > rect[0] && point.x < rect[0] + rect[2] && point.y > rect[1] && point.y < rect[1] + rect[3]
}

function pointInsideRect2D(point, rect) {
    return point.x > rect.x - rect.w / 2 && point.x < rect.x + rect.w / 2 && point.y < rect.y - rect.h / 2 && point.y > rect.y + rect.h / 2
}
