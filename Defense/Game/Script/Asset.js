let img = {
    icon: {
        life: new Image(),
        energy: new Image(),
    },

    spawn: new Image(),
    endPoint: new Image(),
}

function imageLoad() {
    img.icon.life.src = 'Image/Icon/Life.png'
    img.icon.energy.src = 'Image/Icon/Energy.png'

    img.spawn.src = 'Image/Spawn.png'
    img.endPoint.src = 'Image/EndPoint.png'
}