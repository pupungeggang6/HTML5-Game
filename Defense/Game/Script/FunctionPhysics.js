function pointInsideRect(x, y, r1, r2, r3, r4) {
    return x > r1 && x < r1 + r3 && y > r2 && y < r2 + r4
}

function pointInsideRectArray(x, y, rect) {
    return x > rect[0] && x < rect[0] + rect[2] && y > rect[1] && y < rect[1] + rect[3]
}

class VectorOP {
    static size(vec) {
        return Math.sqrt(vec.x ** 2 + vec.y ** 2)
    }

    static normalize(vec) {
        let size = Math.sqrt(vec.x ** 2 + vec.y ** 2)
        return new Vector(vec.x / size, vec.y / size)
    }
}