//Global Variables
let canvas = document.getElementById("myCanvas");
let c = canvas.getContext("2d");
let previousKey = null
let currentKey = null
let scoretab = document.getElementById(`scorelocate`)
let winnertab = document.getElementById(`winner`)
let calculatedScore = 0

class player
{
    constructor(x,y,velocity_x,velocity_y)
    {
        this.x = x
        this.y=y
        this.radius = 15
        this.velocity_x = velocity_x
        this.velocity_y = velocity_y
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

class ghost
{
    constructor(x,y,velocity_x,velocity_y)
    {
        this.x = x
        this.y= y
        this.radius = 15
        this.velocity_x = velocity_x
        this.velocity_y = velocity_y
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
        c.rect(this.x,this.y,this.width,this.height)
        c.strokeStyle = "blue"
        c.fillStyle = "blue"
        c.fill()
        c.lineWidth = "2"
        c.stroke() 
    }

    clear()
    {
       c.clearRect(0,0,500,500)
    }

}

class point
{
    constructor(x,y)
    {
        this.x = x
        this.y= y
        this.radius = 5
    }

    draw()
    {
        c.beginPath()
        c.arc(this.x,this.y,this.radius,0,2*Math.PI)
        c.fillStyle = "white"
        c.fill()
        c.stroke() //its just giving a boundary
    }

    clear()
    {
        console.log(`called`)
        c.clearRect(0,0,500,500)
    }
    


}

//defining layout for pacman stages

const layout = [
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
    ['-', ' ', 'p', 'p', 'p', 'p', 'p', 'p', 'p', '-'],
    ['-', 'p', '-', 'p', '-', '-', 'p', '-', 'p', '-'],
    ['-', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', '-'],
    ['-', 'p', '-', '-', 'p', '-', '-', '-', 'p', '-'],
    ['-', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', '-'],
    ['-', 'p', '-', 'p', '-', '-', 'p', '-', 'p', '-'],
    ['-', 'p', '-', 'p', '-', '-', 'p', '-', 'p', '-'],
    ['-', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-']
  ];
//Object Creation
//pacman object
const pacman =  new player(75,75,5,5)

//boundary and points object
let xCoordinate = 0
let yCoordinate = 0
let boundaryContainer = []
let pointContainer = []
layout.forEach((row)=>{
    
    row.forEach((element)=>{
    
        if(element==`-`)
        {
            //boundary object
            boundaryContainer.push(new RectBoundary(xCoordinate,yCoordinate,50,50))
        }
        else if(element==`p`)
        {
            //Points object
            pointContainer.push(new point(xCoordinate+25,yCoordinate+25,5,5))
        }
        xCoordinate = xCoordinate+50
       
    })
    xCoordinate=0
    yCoordinate = yCoordinate+50
})


//All functions
function reloadPage() {
    location.reload();
  }
  
function score()
{
    calculatedScore = (46-pointContainer.length)*10
    scoretab.innerHTML =  calculatedScore
}
function displayWinner()
{
    if (calculatedScore === 460)
    {
        winnertab.innerHTML = `You Won`
    }
    
}
function drawpoints()
{
    pointContainer.forEach((element)=>{
        element.draw()
    })
}

function drawboundary()
{
    boundaryContainer.forEach((boundary)=>{
        boundary.draw()
    })
}
function checkPointsCollision()
{
    pointContainer.forEach((element)=>{

        if((pacman.x<=(element.x-15) ) ||(pacman.x>=(element.x-15) )|| (pacman.y<=(element.y-15))|| (pacman.y>=(element.y-15)))
        {
            
            pointContainer = pointContainer.filter((element) => {
                element.clear()
                console.log(pointContainer.length)
                return!((element.x === pacman.x) &&  (element.y===pacman.y))
            });
        }

        
    })
    
}
function checkCollision(player)
{
    boundaryContainer.forEach((boundary)=>{
    
        if(player.y-(player.radius + player.velocity_y)<=(boundary.y+boundary.height) && 
            player.y+(player.radius + player.velocity_y)>=(boundary.y) &&
            player.x-(player.radius+player.velocity_x)<=(boundary.x+boundary.width) &&
            player.x+(player.radius + player.velocity_x )>=(boundary.x)
            )
            {
                switch(currentKey)
                    {
                        case `w`:
                            player.velocity_y = 0
                        
                            player.y = player.y + 5
                            currentKey = null
                            return true
                        case `s`:
                            player.velocity_y = 0   
                            
                            player.y = player.y - 5
                            currentKey = null
                            return true
                        case `a`:
                            player.velocity_x = 0 
                           
                            player.x = player.x + 5
                            currentKey = null
                            return true
                        case `d`:
                            player.velocity_x = 0 
                            
                            player.x = player.x - 5
                            currentKey = null
                            return true
                    }
            }
       
    })
    
}


gameLoop(pacman)


function gameLoop(player) {
    pacman.clear()
    drawboundary()
    pacman.velocity_x = 5
    pacman.velocity_y = 5
    pacman.draw()
    drawpoints()
    if(checkCollision(pacman)!= true)
    {
        pacman.move()
        checkPointsCollision()
        drawpoints()
        drawboundary()
        pacman.draw()
    }
    score()
    displayWinner()
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

