class Ball
{
    constructor(x,y,radius)
    {
        var options={
            density:0.1,
        }
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.body = Matter.Bodies.circle(x,y,radius,options);
        World.add(world,this.body);
    }
    display()
    {
       var pos = this.body.position;
       var angle = this.body.angle;
       push();
       translate(pos.x,pos.y);
       rotate(angle);
       rectMode(CENTER);
       ellipse(0,0,this.radius);
       pop();
    }
}