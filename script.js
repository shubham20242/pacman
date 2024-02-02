//Global Variables
let canvas = document.getElementById("myCanvas");
let c = canvas.getContext("2d");
let W_count = 0
let A_count = 0
let S_count = 0
let D_count = 0

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

    move(key)
    {
        if(key ==`w`)
        {
            if(W_count == 0)
            {
                doCount(key)
                console.log(`w move`)
                this.y = this.y - this.velocity_y
                
            }
            
        }
        else if(key ==`s`)
        {
            if(S_count==0)
            {
                doCount(key)
                console.log(`s move`)
                this.y = this.y + this.velocity_y
                
            }
          
        }
        else if(key ==`a`)
        {
            if(A_count ==0)
            {
                doCount(key)
                console.log(`a move`)
                this.x = this.x - this.velocity_x
                
            }
            
        }
        else if(key ==`d`)
        {
            if(D_count ==0)
            {
                doCount(key)
                console.log(`d move`)
                this.x = this.x + this.velocity_x
                
            }
            
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
function doCount(key)
{
    switch(key){
        case `w`:
            console.log(`w casw`)
            W_count = 1
            A_count = 0
            S_count = 0
            D_count = 0
            break

        case `s`:
            console.log(`s casw`)
            W_count = 0
            A_count = 0
            S_count = 1
            D_count = 0
            break

        case `a`:
            console.log(`a casw`)
            W_count = 0
            A_count = 1
            S_count = 0
            D_count = 0
            break

        case `d`:
            console.log(`d casw`)
            W_count = 0
            A_count = 0
            S_count = 0
            D_count = 1
            break
            
        
    }

}

function gameLoop(key) {
    pacman.clear()
    pacman.move(key)
    pacman.draw()


    requestAnimationFrame(() => gameLoop(key));
}



//All Event Listners
document.addEventListener(`keydown`,(event)=>{
   
    gameLoop(event.key)
})

