let canvas = document.getElementById("myCanvas");
let c = canvas.getContext("2d");

class player
{
    
    constructor(x,y)
    {
        this.x = x;
        this.y=y
        this.radius = 15
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
        this.x = this.x +1
        this.y = this.y +1
    }

    clear()
    {
        c.clearRect(this.x-(this.radius),this.y-(this.radius),this.radius*2,this.radius*2)
    }

}

const pacman =  new player(20,20)
pacman.draw()
pacman.clear()
pacman.move()
pacman.draw()


