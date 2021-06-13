class mango{
constructor(x,y,radius){
    var options = {
        restitution:0,
        friction:1,
        isStatic:true
    } 
    this.body=Bodies.circle(x,y,radius,options);
    this.image=loadImage("sprites/mango.png");
    World.add(world, this.body);
    this.x=x;
    this.y=y;
}
display(){
    ellipseMode(RADIUS);
    ellipse(this.x, this.y, radius);
}
}