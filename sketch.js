
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

var cont1,cont2,cont3,dustBin;

var ground;

function preload() {
    dustBin = loadImage("sprites/dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);
    engine = Engine.create();
	world = engine.world;

	ground = new Ground (400,650,800,100);

  cont1 = new Container (700,600,100,20);
  cont2 = new Cont (660,570,10,60);
	cont3 = new Cont (740,570,10,60);

	ball = new Ball (150,560,30,30);
}


function draw() {
  background(255);
  
  Engine.update(engine);

  ball.display();

  cont2.display();
  cont3.display();
  cont1.display();

  ground.display();

  drawSprites();
 
}


function keyPressed() {
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(ball.body,ball.body.position,{x:93,y:-93});
 }
}



