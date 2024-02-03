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
       // c.clearRect(this.x-(this.radius),this.y-(this.radius),this.radius*2,this.radius*2)
       c.clearRect(0,0,500,500)
    }
}


class RectBoundary{

    constructor(x,y,width,height)
    {
        this.x = x
        this.y = y
        this.width = width
        this.height =height
    }

    draw()
    {
        c.beginPath()
        //context.rect(x, y, width, height);
        c.rect(this.x,this.y,this.width,this.height)
        c.strokeStyle = "blue";
        c.fillStyle = "blue";
        c.fill()
        c.lineWidth = "2"
        c.stroke() 
    }

}

//defining layout for pacman stages

const layout = [
    [`-`, `-`, `-`, `-`, `-`, `-`, `-`, `-`, `-`, `-`],
    [`-`, ` `, ` `, ` `, ` `, ` `, ` `, ` `, ` `, `-`],
    [`-`, ` `, `-`, ` `, `-`, `-`, ` `, `-`, ` `, `-`],
    [`-`, ` `, ` `, ` `, ` `, ` `, ` `, ` `, ` `, `-`],
    [`-`, ` `, `-`, `-`, ` `, `-`, `-`, `-`, ` `, `-`],
    [`-`, ` `, ` `, ` `, ` `, ` `, ` `, ` `, ` `, `-`],
    [`-`, ` `, `-`, ` `, `-`, `-`, ` `, `-`, ` `, `-`],
    [`-`, ` `, `-`, ` `, `-`, `-`, ` `, `-`, ` `, `-`],
    [`-`, ` `, ` `, ` `, ` `, ` `, ` `, ` `, ` `, `-`],
    [`-`, `-`, `-`, `-`, `-`, `-`, `-`, `-`, `-`, `-`]
  ];
  
//Object Creation
//pacman object
const pacman =  new player(75,75)

//boundary object
let xCoordinate = 0
let yCoordinate = 0
let boundaryContainer = []
layout.forEach((row)=>{
    
    row.forEach((element)=>{
    
        if(element==`-`)
        {
            boundaryContainer.push(new RectBoundary(xCoordinate,yCoordinate,50,50))
        }
        xCoordinate = xCoordinate+50
       
    })
    xCoordinate=0
    yCoordinate = yCoordinate+50
})

gameLoop()
//All functions
function gameLoop() {
    pacman.clear()
    boundaryContainer.forEach((boundary)=>{
        boundary.draw()
    })
    pacman.draw()
    pacman.move()
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

