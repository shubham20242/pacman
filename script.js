let canvas = document.getElementById("myCanvas");
let c = canvas.getContext("2d");

class player
{
    constructor(x,y)
    {
        this.x = x;
        this.y=y
    }

    draw()
    {
        c.beginPath()
        //ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
        c.arc(this.x,this.y,15,0,2*Math.PI)
        c.fillStyle = "yellow"
        c.fill()
        c.stroke() //its just giving a boundary
    }
}

const pacman =  new player(20,20)
pacman.draw()