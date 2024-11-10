const directionB = [
    [-1, 0], [0, -1], [0, 1], [1, 0]
]

const directionA = [
    [-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]
]

const iterMax = 500

function vecSize(v) {
    return Math.sqrt(v[0] ** 2 + v[1] ** 2)
}

function EDistance(p1, p2) {
    return Math.sqrt((p2[0] - p1[0]) ** 2 + (p2[1] - p1[1]) ** 2)
}

function findPathA(board, start, goal) {
    let visited = []
    let cost = []
    let paths = []
    let path = []
    let position = [start[0], start[1]]
    let iter = 0
    let opened = []

    for (let i = 0; i < board.length; i++) {
        tempV = []
        tempC = []
        tempP = []
        for (let j = 0; j < board[0].length; j++) {
            tempV.push(0)
            tempC.push(999999)
            tempP.push([])
        }
        visited.push(tempV)
        cost.push(tempC)
        paths.push(tempP)
    }

    visited[start[0]][start[1]] = 1
    cost[start[0]][start[1]] = 0
    paths[start[0]][start[1]] = [start[0], start[1]]

    while (iter < iterMax) {
        let next = [0, 0]

        if ((position[0] === goal[0]) && (position[1] === goal[1])) {
            path = paths[position[0]][position[1]]
            break
        }

        for (let d of directionA) {
            let row = position[0] + d[0]
            let col = position[1] + d[1]
            if (row >= 0 && row < board.length && col >= 0 && col < board[0].length) {
                if (board[row][col] === 0) {
                    if (visited[row][col] === 0) {
                        visited[row][col] = 1
                        opened.push([row, col])
                        paths[row][col] = JSON.parse(JSON.stringify(paths[position[0]][position[1]]))
                        paths[row][col].push([row, col])
                    }
                }
            }
        }

        let minCost = 999999
        let nextIndex = 0

        if (opened.length <= 0) {
            break
        }

        for (let i = 0; i < opened.length; i++) {
            let tempCost = cost[position[0]][position[1]] + EDistance(position, opened[i]) + EDistance(opened[i], goal)
            if (tempCost < cost[opened[i][0]][opened[i][1]]) {
                cost[opened[i][0]][opened[i][1]] = tempCost
            }

            if (tempCost < minCost) {
                minCost = tempCost
                nextIndex = i
            }
        }

        next = opened.splice(nextIndex, 1)[0]

        position[0] = next[0]
        position[1] = next[1]

        iter += 1
    }

    return {'Path': path, 'Visited': visited}
}

function findPathB(board, start, goal) {
    let visited = []
    let queue = []
    let path = []

    for (let i = 0; i < board.length; i++) {
        temp = []
        for (let j = 0; j < board[0].length; j++) {
            temp.push(0)
        }
        visited.push(temp)
    }

    queue.push({'Position': [start[0], start[1]], 'Path': [[start[0], start[1]]]})
    visited[start[0]][start[1]] = 1

    while (queue.length > 0) {
        let first = queue[0]
        console.log(JSON.stringify(first))
        if (first['Position'][0] === goal[0] && first['Position'][1] === goal[1]) {
            path = first['Path']
            break
        }
        for (let d of directionB) {
            let row = first['Position'][0] + d[0]
            let col = first['Position'][1] + d[1]
            if (row >= 0 && row < board.length && col >= 0 && col < board[0].length) {
                if (visited[row][col] === 0 && board[row][col] === 0) {
                    let tempPath = JSON.parse(JSON.stringify(first['Path']))
                    tempPath.push([row, col])
                    queue.push({'Position': [row, col], 'Path': tempPath})
                    visited[row][col] = 1
                }
            }
        }
        queue.shift()
    }

    return {'Path': path, 'Visited': visited}
}