
class Trashcan {
    constructor(x,y,width, height){
    var trashCanOptions = {
        isStatic:true
    };
    this.body = Bodies.rectangle(x,y,width,height, trashCanOptions); 
    this.height = height;
    this.width = width;
    World.add(world, this.body);
    }
    
    display(){
    var pos = this.body.position;
    rectMode(CENTER);
    fill("red");
    rect(pos.x, pos.y, this.width, this.height);
    }
    
}