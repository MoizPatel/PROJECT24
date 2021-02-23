
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var logb, logl, logr ;
var ball ;
var ground ;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = createSprite(width/2,height-35,800,20);
	ground.shapeColor = "yellow";
	//Create the Bodies Here.
    logb = createSprite(600,height-55,200,20);
	logb.shapeColor = "white";
    logl = createSprite(490,605,20,100);
	logl.shapeColor = "white";
	logr = createSprite(710,605,20,100);
	logr.shapeColor = "white";
	ball = createSprite(50,height-55,10,10);
	ball.shapeColor = "pink";
    
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 keyPressed();

  drawSprites();
 
}
 function keyPressed() {
	if(keyDown === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
	}
 }




