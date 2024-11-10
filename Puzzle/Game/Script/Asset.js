let img = {
    icon: {
        life: new Image(),
        energy: new Image(),
        attack: new Image(),
    },

    crystal: {
        'Fire': new Image(), 'Water': new Image(), 'Wind': new Image(), 'Earth': new Image(), 'Light': new Image(), 'Dark': new Image(), 'Heal': new Image(),
    }
}

function imageLoad() {
    img.icon.life.src = 'Image/Icon/Life.png'
    img.icon.energy.src = 'Image/Icon/Energy.png'
    img.icon.attack.src = 'Image/Icon/Attack.png'

    for (const key in img.crystal) {
        img.crystal[key].src = `Image/Crystal/${key}.png`
    }
}