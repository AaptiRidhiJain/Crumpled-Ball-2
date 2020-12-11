
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var dustbin;
var r;
var radius;

function setup() {
	createCanvas(1600,700);


	engine = Engine.create();
	world = engine.world;

  Engine.run(engine);
  
  paper = new Paper(200,460,70); 
  ground = new Ground(width/2,660,width,20);
  dustbin = new Dustbin(1200,650);
  //paper.debug = true;
}


function draw() {
  rectMode(CENTER);
  background(255);
  paper.display();
  ground.display();
  dustbin.display();
  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:130,y:-145});
  }
}
