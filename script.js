let canvas = document.getElementById("myCanvas");
let c = canvas.getContext("2d");

c.beginPath()
//ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
c.arc(20,20,15,0,2*Math.PI)
c.fillStyle = "yellow"
c.fill()
c.stroke() //its just giving a boundary

