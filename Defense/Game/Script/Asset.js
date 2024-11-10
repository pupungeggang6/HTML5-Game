let img = {
    icon: {
        life: new Image(),
        energy: new Image(),
    },

    card: {},

    spawn: new Image(),
    endPoint: new Image(),
}

function imageLoad() {
    img.icon.life.src = 'Image/Icon/Life.png'
    img.icon.energy.src = 'Image/Icon/Energy.png'

    for (let i = 1; i < 2; i++) {
        img.card[i] = new Image(),
        img.card[i].src = `Image/Card/Card${i.toString().padStart(3, '0')}.png`
    }

    img.spawn.src = 'Image/Spawn.png'
    img.endPoint.src = 'Image/EndPoint.png'
}