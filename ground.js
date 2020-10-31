
class Ground {
    constructor(x,y,width, height){
    var groundOptions = {
        isStatic:true
    };
    this.body = Bodies.rectangle(x,y,width,height, groundOptions); 
    this.height = height;
    this.width = width;
    World.add(world, this.body);
    }
    
    display(){
    var groundPos = this.body.position;
    rectMode(CENTER);
    fill("brown");
    rect(groundPos.x, groundPos.y, this.width, this.height);
    }
    
}