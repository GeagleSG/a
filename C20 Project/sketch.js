const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


let engine;
let world;
var blue,red,yellow,green;
var ground, ground2;
var angle=60;

function setup() {
  
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var blue_options = {
    restitution : random(0.7,2.1),
    frictionAir : random(0.01,0.04)
  }
  var red_options = {
    restitution : random(0.7,2.1),
    frictionAir : random(0.01,0.04)
  }
  var yellow_options = {
    restitution : random(0.7,2.1),
    frictionAir : random(0.01,0.04)
  }
  var green_options = {
    restitution : random(0.7,2.1),
    frictionAir : random(0.01,0.04)
  }


  var static = {
    isStatic : true
  }
  blue = Bodies.circle(55,50,20,blue_options)
  World.add(world,blue);

  red = Bodies.circle(150,50,20,red_options);
  World.add(world,red);

  yellow = Bodies.circle(250,50,20,yellow_options);
  World.add(world,yellow);

  green = Bodies.circle(350,50,20,green_options);
  World.add(world,green);

  ground = Bodies.rectangle(200,390,400,20,static);
  World.add(world,ground);

  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
 background (51);
 Engine.update(engine);
fill("blue")
 ellipse(blue.position.x,blue.position.y,20);
 fill("red")
 ellipse(red.position.x,red.position.y,20);
 fill("yellow")
 ellipse(yellow.position.x,yellow.position.y,20);
 fill("green")
 ellipse(green.position.x,green.position.y,20);
 fill("white")
 rect(ground.position.x,ground.position.y,400,20);


}

