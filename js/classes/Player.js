class Player{
    constructor(){
        this.position = {
            x: 100,
            y: 100,
        }

        this.velocity = {
            x:0,
            y:0
        }

        this.width = 100
        this.height = 100
        this.sides = {
            bottom: this.position.y + this.height
        }
        this.gravity = 1
    }

    //Draws out the player character
    draw() {
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    //Updates the position of the player character
    update(){
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        this.sides.bottom = this.position.y + this.height

        // Above bottom of canvas
        if (this.sides.bottom + this.velocity.y < canvas.height){
            this.velocity.y += this.gravity
            
        } else this.velocity.y = 0

    }
}