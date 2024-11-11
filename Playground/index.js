let board = []

function randomGenerate() {
    board = []

    for (let i = 0; i < 7; i++) {
        let temp = []
        for (let j = 0; j < 8; j++) {
            temp.push(Math.floor(Math.random() * 3))
        }
        board.push(temp)
    }
}