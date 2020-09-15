class Ground{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
           restitution:0.1
        
        }
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        //this.image = loadImage("dustbingreen.png")
        this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options)
        World.add(world,this.body)
    }
    display(){
        
            var pos =this.body.position;
            push();
            translate(pos.x, pos.y);
            rectMode(CENTER);
            fill("red");
           rect(0, 0, this.width, this.height);
           // image(this.image,0,0,this.width, this.height)
            pop();
          } 
        
    
}