
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1300, 500);

	engine = Engine.create();
	world = engine.world;

	bobDiameter=40;
	//Create the Bodies Here.
	bobObject1 = new Bob(250,300,40); // 40 is the radius 
	bobObject2 = new Bob(300,300,40);
	bobObject3 = new Bob(350,300,40);
	bobObject4 = new Bob(400,300,40);
	bobObject5 = new Bob(450,300,40);

	roof = new Roof(350,100,300,30)

	rope1 = new Rope(bobObject1.body,roof.body,-bobDiameter*2,0)
	rope2 = new Rope(bobObject2.body,roof.body,-bobDiameter*1,0) // change the value so that it gets attached to different point
	rope3 = new Rope(bobObject3.body,roof.body,0,0) // change the value so that it gets attached to different point
	rope4 = new Rope(bobObject4.body,roof.body,bobDiameter*1,0)// change the value so that it gets attached to different point
	rope5 = new Rope(bobObject5.body,roof.body,bobDiameter*2,0)// change the value so that it gets attached to different point
   
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  Engine.update(engine);
  bobObject1.display()
  bobObject2.display()
  bobObject3.display()
  bobObject4.display()
  bobObject5.display()

  fill("black"); //added rope color
  stroke("black")
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display() // it was missing

  fill("brown");
  roof.display();
  
}
function keyPressed(){ //k was in upper case
if (keyCode===32){
	Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x: -50, y:-45})
}}


