const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 64 * 16
canvas.height = 64 * 9

const playerVelocity = 10
const playerJumpVelocity = -20



const backgroundLevel1 = new Sprite({
    position:{
        x: 0, y:0,
    },
    imageSrc: './img/backgroundLevel1.png'
})

const player = new Player()

const keys = {
    w:{
        pressed: false
    },

    a:{
        pressed: false
    },
    
    d:{
        pressed: false
    },
}

function animate() {
    window.requestAnimationFrame(animate)

    backgroundLevel1.draw()

    player.velocity.x = 0
    if (keys.d.pressed) player.velocity.x = playerVelocity
    else if (keys.a.pressed) player.velocity.x = -playerVelocity

    player.draw()
    player.update()

    // if (bottom < canvas.height){
    //     y++
    //     bottom = y + 100
    // }
    
}

animate()

