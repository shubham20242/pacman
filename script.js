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
        this.velocity_x = 1
        this.velocity_y = 1
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

    move(receiving_key)
    {
        switch(receiving_key)
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
                //console.log("d invoked")
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

//All functions
function gameLoop() {
    console.log(`line 62: ${currentKey}`)
    pacman.clear()
    pacman.move(currentKey)
    pacman.draw()

    requestAnimationFrame(gameLoop);
}

//All Event Listners
document.addEventListener(`keydown`,(event)=>{
    currentKey = event.key
    if(previousKey != currentKey)
    {
        gameLoop()
        previousKey = currentKey
    }
    
})

