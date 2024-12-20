const UI = {
    title: {
        textTitle: [4, 4],
        buttonStart: [80, 160, 560, 80],
        textStart: [84, 184]
    },

    ready: {
        textTitle: [4, 4],
        buttonMenu : [680, 0, 40, 40],
        buttonCharacter: [
            [40, 160, 160, 160], [280, 160, 160, 160], [520, 160, 160, 160],
            [40, 400, 160, 160], [280, 400, 160, 160], [520, 400, 160, 160],
        ],
        buttonStart: [280, 1120, 160, 80],
        descriptionRect: [40, 640, 640, 400],
        textStart: [284, 1144],
    },
    
    map: {
        textTitle: [4, 4],
        buttonMenu: [680, 0, 40, 40],
        fieldStart: [200, 160],
        fieldCellSize: [80, 80],
        fieldCellInterval: [120, 120]
    },

    battle: {
        textTitle: [4, 4],
        buttonMenu : [680, 0, 40, 40],
        boardStart: [40, 80],
        boardCellSize: [80, 80],

        lower: {
            attackIcon: [40, 720],
            attackText: [84, 724],
            energyIcon: [40, 760],
            energyText: [84, 764],
            energyBarStart: [200, 760],
            energyCellSize: [80, 40],
            energyInterval: [80, 0],
            lifeIcon: [40, 800],
            lifeText: [84, 804],
            lifeBar: [200, 800, 480, 40],
            equipmentStart: [40, 880],
            itemStart: [440, 880],
            equipmentInterval: [80, 0],
            equipmentSize: [80, 80],

            cardStart: [40, 1000],
            cardInterval: [80, 0],
            cardBack: [520, 1000]
        },
    },

    card: {
        rect: [0, 0, 160, 240]
    },

    menu: {
        rect: [160, 520, 400, 240],
        textPause: [164, 544],
        buttonResume: [160, 600, 400, 80],
        textResume: [164, 624],
        buttonExit: [160, 680, 400, 80],
        textExit: [164, 704]
    }
}