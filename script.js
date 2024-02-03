//Global Variables
let canvas = document.getElementById("myCanvas");
let c = canvas.getContext("2d");
let previousKey = null
let currentKey = null

class player
{
    constructor(x,y)
    {
        this.x = x
        this.y=y
        this.radius = 15
        this.velocity_x = 5
        this.velocity_y = 5
    }

    draw()
    {
        c.beginPath()
        //ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
        c.arc(this.x,this.y,this.radius,0,2*Math.PI)
        c.fillStyle = "yellow"
        c.fill()
        c.stroke() //its just giving a boundary
    }

    move()
    {
        switch(currentKey)
        {
            case `w`:
                this.y = this.y - this.velocity_y     
                break
            case `s`:
                this.y = this.y + this.velocity_y  
                break
            case `a`:
                this.x = this.x - this.velocity_x
                break
            case `d`:
                this.x = this.x + this.velocity_x 
                break
        }
    }
    clear()
    {
        c.clearRect(this.x-(this.radius),this.y-(this.radius),this.radius*2,this.radius*2)
    }
}

//Object Creation
const pacman =  new player(20,20)
pacman.draw()
gameLoop()

//All functions
function gameLoop() {
    pacman.clear()
    pacman.move()
    pacman.draw()
    console.log(`what!!`)
    requestAnimationFrame(gameLoop);
}

//All Event Listners
document.addEventListener(`keydown`,(event)=>{
    currentKey = event.key
    if(previousKey != currentKey)
    {
        previousKey = currentKey
    }
    
})

