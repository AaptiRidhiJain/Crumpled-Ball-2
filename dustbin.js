class Dustbin{
     constructor(x,y){
          this.x = x;
          this.y = y;
          this.dustbinHeight = 213;
          this.dustbinWidth = 200;
          this.wallThickness = 20;
          this.angle = 0;
         
          this.image = loadImage("dustbin.png");
          this.bottomBody = Bodies.rectangle(this.x,this.y,this.dustbinWidth,this.wallThickness,{isStatic: true});
     
          World.add(world,this.bottomBody);
     }
    
     display(){
          var posBottom = this.bottomBody.position;
      

          push();
          translate(posBottom.x,posBottom.y);
          rectMode(CENTER);
          stroke(255);
          angleMode(RADIUS);
          fill(255);
          imageMode(CENTER); 
          image(this.image, 0,-this.dustbinHeight/2,this.dustbinWidth,this.dustbinHeight);
          //rect(0,0,this.dustbinWidth,this.wallThickness);
          pop();        
     }
}