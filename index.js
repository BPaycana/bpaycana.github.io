const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 64 * 16
canvas.height = 64 * 9

const playerVelocity = 10
const playerJumpVelocity = -40

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
    c.fillStyle = 'white'
    c.fillRect(0, 0, canvas.width, canvas.height)

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

