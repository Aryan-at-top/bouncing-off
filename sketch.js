const  Engine=Matter.Engine
const  World=Matter.World
const  Bodies=Matter.Bodies
var  engine
var  world
function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world
  var ground={
    isStatic:true
  }
  var ball={
    restitution:1.5
  }
  bodies=Bodies.rectangle(400,400,800,32,ground)
  bodies1=Bodies.circle(400,200,50,ball)
  World.add(world,bodies)
  World.add(world,bodies1)
  console.log(bodies)
}

function draw() {
  background(World.mouseX,World.mouseY,123); 
  Engine.update(engine) 
  rectMode(CENTER)
  rect(bodies.position.x,bodies.position.y,800,50)
  ellipseMode(CENTER)
  ellipse(bodies1.position.x,bodies1.position.y,50)
}