const UI = {
    title: {
        textTitle: [24, 24],
        buttonStart: [160, 160, 960, 80],
        textStart: [164, 184],
    },

    characterSelect: {
        buttonBack: [1220, 20, 40, 40],
        textTitle: [24, 24],
        buttonCharacter: [
            [160, 160, 160, 160], [360, 160, 160, 160], [560, 160, 160, 160], [160, 360, 160, 160], [360, 360, 160, 160], [560, 360, 160, 160]
        ],
        buttonStart: [1040, 640, 160, 80],
        textStart: [1048, 664],
    },

    map: {
        buttonMenu: [1220, 20, 40, 40],
    },

    game: {
        textTitle: [24, 24],

        start: {
            rect: [160, 80, 960, 640],
            textTitle: [164, 84],
            buttonSelect: [[240, 160, 160, 240], [560, 160, 160, 240], [880, 160, 160, 240]],
            buttonStart: [960, 640, 160, 80],
            textStart: [964, 664],
        },

        lower: {
            buttonGenerator: [40, 680, 80, 80],
            textGenerator: [42, 682],
            handStart: [120, 680, 80, 80],
            handSize: [80, 80],
            handInterval: [80, 0],
            levelText: [44, 644],
            lifeIcon: [120, 640],
            lifeText: [164, 644],
            energyIcon: [200, 640],
            energyText: [244, 644],
        },

        field: {
            cellSize: [80, 80]
        },

        gameOver: {
            rect: [160, 80, 960, 640],
            text: [488, 248],
            buttonOK: [560, 560, 160, 80],
            textOK: [568, 584],
        }
    },

    card: {
        rect: [0, 0, 80, 80],
        textEnergy: [2, 2],
        image: [0, 0],
    }
}