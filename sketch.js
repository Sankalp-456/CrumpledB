const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var dustbinObject1, groundObject, paper;	
var world;

function setup() {
	createCanvas(1200, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	groundObject = new Ground(width/2,570,width,20);
	dustbinObject = new Dustbin(1000,550);
    paper = new Paper(100, 550, 80);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);

  groundObject.display();
  dustbinObject.display();
  paper.display();

 

}

function keyPressed(){

	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{x:950,y:-950})
	}

}